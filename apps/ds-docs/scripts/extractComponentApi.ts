#!/usr/bin/env node
/**
 * Automatic API Extraction for Vue Components
 * 
 * Extracts component API information (props, events, slots) from Vue components
 * and generates JSON metadata files for documentation.
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

/**
 * Prop definition
 */
interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  default: string | null;
  description: string;
}

/**
 * Event definition
 */
interface EventDefinition {
  name: string;
  payload: string | null;
  description: string;
}

/**
 * Slot definition
 */
interface SlotDefinition {
  name: string;
  description: string;
  props?: string;
}

/**
 * Component API
 */
interface ComponentApi {
  component: string;
  source: string;
  props: PropDefinition[];
  events: EventDefinition[];
  slots: SlotDefinition[];
  extractedAt: string;
}

/**
 * Extraction options
 */
interface ExtractionOptions {
  /** Components directory */
  componentsDir: string;
  /** Output directory for generated JSON files */
  outputDir: string;
  /** File patterns to ignore */
  ignorePatterns?: RegExp[];
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: ExtractionOptions = {
  componentsDir: 'src/components',
  outputDir: 'src/generated/component-api',
  ignorePatterns: [
    /index\.ts$/,
    /index\.js$/,
    /\.d\.ts$/,
    /\.spec\.ts$/,
    /\.test\.ts$/,
    /\.stories\.ts$/,
    /\.stories\.js$/,
  ],
};

/**
 * Parse Vue SFC content
 */
function parseVueSfc(content: string): {
  script: string;
  scriptSetup: string;
  template: string;
  style: string;
} {
  const result = {
    script: '',
    scriptSetup: '',
    template: '',
    style: '',
  };

  // Extract script
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    result.script = scriptMatch[1];
  }

  // Extract script setup
  const scriptSetupMatch = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/);
  if (scriptSetupMatch) {
    result.scriptSetup = scriptSetupMatch[1];
  }

  // Extract template
  const templateMatch = content.match(/<template[^>]*>([\s\S]*?)<\/template>/);
  if (templateMatch) {
    result.template = templateMatch[1];
  }

  // Extract style
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    result.style = styleMatch[1];
  }

  return result;
}

/**
 * Extract props from defineProps
 */
function extractDefineProps(scriptSetup: string): PropDefinition[] {
  const props: PropDefinition[] = [];

  // Match defineProps with object syntax
  const withObjectMatch = scriptSetup.match(/defineProps\s*<\s*{\s*([^}]+)\s*}\s*>/);
  if (withObjectMatch) {
    const propsContent = withObjectMatch[1];
    // Parse each prop
    const propMatches = Array.from(propsContent.matchAll(/(\w+)\s*(?:\?)?\s*:\s*([^;,\n]+)/g));
    for (const match of propMatches) {
      const name = match[1];
      const type = match[2].trim();
      props.push({
        name,
        type: type.replace(/\|/g, ' | '),
        required: !match[0].includes('?'),
        default: null,
        description: '',
      });
    }
  }

  // Match defineProps with interface
  const interfaceMatch = scriptSetup.match(/interface\s+\w+Props\s*{([^}]+)}/);
  if (interfaceMatch) {
    const propsContent = interfaceMatch[1];
    const propMatches = Array.from(propsContent.matchAll(/(\w+)\s*(\?)?\s*:\s*([^;,\n]+)/g));
    for (const match of propMatches) {
      const name = match[1];
      const type = match[3].trim();
      props.push({
        name,
        type: type.replace(/\|/g, ' | '),
        required: !match[2],
        default: null,
        description: '',
      });
    }
  }

  // Match withPropsDefaults pattern
  const withDefaultsMatch = scriptSetup.match(/withDefaults\s*\(\s*defineProps\s*<\s*([^>]+)\s*>\s*\(\s*\)\s*,\s*{\s*([^}]+)\s*}\s*\)/);
  if (withDefaultsMatch) {
    // Extract defaults
    const defaultsContent = withDefaultsMatch[2];
    const defaultMatches = Array.from(defaultsContent.matchAll(/(\w+)\s*:\s*(?:\(\)\s*=>\s*)?([^,}\n]+)/g));
    const defaults: Record<string, string> = {};
    
    for (const match of defaultMatches) {
      defaults[match[1]] = match[2].trim().replace(/['"]/g, '');
    }

    // Apply defaults to props
    for (const prop of props) {
      if (prop.name in defaults) {
        prop.default = defaults[prop.name];
      }
    }
  }

  return props;
}

/**
 * Extract props from Options API
 */
function extractOptionsApiProps(script: string): PropDefinition[] {
  const props: PropDefinition[] = [];

  // Match props object
  const propsMatch = script.match(/props\s*:\s*{([\s\S]*?)}/);
  if (propsMatch) {
    const propsContent = propsMatch[1];
    
    // Parse each prop definition
    const propDefMatches = Array.from(propsContent.matchAll(/(\w+)\s*:\s*{([^}]+)}/g));
    for (const match of propDefMatches) {
      const name = match[1];
      const def = match[2];
      
      const typeMatch = def.match(/type\s*:\s*([^,}\n]+)/);
      const requiredMatch = def.match(/required\s*:\s*(true|false)/);
      const defaultMatch = def.match(/default\s*:\s*(?:function\s*\(\)\s*{[^}]*}|[^,}\n]+)/);
      
      props.push({
        name,
        type: typeMatch ? typeMatch[1].trim() : 'unknown',
        required: requiredMatch ? requiredMatch[1] === 'true' : false,
        default: defaultMatch ? defaultMatch[1].trim() : null,
        description: '',
      });
    }

    // Match simple array props syntax
    const arrayPropsMatch = script.match(/props\s*:\s*\[([^\]]+)\]/);
    if (arrayPropsMatch) {
      const propNames = arrayPropsMatch[1].split(',').map((p) => p.trim().replace(/['"]/g, ''));
      for (const name of propNames) {
        props.push({
          name,
          type: 'unknown',
          required: false,
          default: null,
          description: '',
        });
      }
    }
  }

  return props;
}

/**
 * Extract events from defineEmits
 */
function extractDefineEmits(scriptSetup: string): EventDefinition[] {
  const events: EventDefinition[] = [];

  // Match defineEmits with array syntax
  const arrayMatch = scriptSetup.match(/defineEmits\s*\(\s*\[([^\]]+)\]\s*\)/);
  if (arrayMatch) {
    const eventNames = arrayMatch[1].split(',').map((e) => e.trim().replace(/['"]/g, ''));
    for (const name of eventNames) {
      events.push({
        name,
        payload: null,
        description: '',
      });
    }
  }

  // Match defineEmits with object/record syntax
  const objectMatch = scriptSetup.match(/defineEmits\s*<\s*{([^}]+)}\s*>/);
  if (objectMatch) {
    const eventsContent = objectMatch[1];
    const eventMatches = Array.from(eventsContent.matchAll(/['"](\w+)['"]\s*:\s*\[([^\]]+)\]/g));
    
    for (const match of eventMatches) {
      events.push({
        name: match[1],
        payload: match[2].trim(),
        description: '',
      });
    }
  }

  // Match defineEmits with type
  const typeMatch = scriptSetup.match(/defineEmits\s*<\s*([^>]+)\s*>/);
  if (typeMatch && !objectMatch) {
    const typeContent = typeMatch[1];
    // Try to extract event names from type
    const eventNameMatches = Array.from(typeContent.matchAll(/['"](\w+)['"]/g));
    for (const match of eventNameMatches) {
      if (!events.some((e) => e.name === match[1])) {
        events.push({
          name: match[1],
          payload: null,
          description: '',
        });
      }
    }
  }

  return events;
}

/**
 * Extract events from Options API
 */
function extractOptionsApiEmits(script: string): EventDefinition[] {
  const events: EventDefinition[] = [];

  // Match emits array
  const emitsMatch = script.match(/emits\s*:\s*\[([^\]]+)\]/);
  if (emitsMatch) {
    const eventNames = emitsMatch[1].split(',').map((e) => e.trim().replace(/['"]/g, ''));
    for (const name of eventNames) {
      events.push({
        name,
        payload: null,
        description: '',
      });
    }
  }

  // Match emits object
  const emitsObjectMatch = script.match(/emits\s*:\s*{([\s\S]*?)}/);
  if (emitsObjectMatch) {
    const emitsContent = emitsObjectMatch[1];
    const eventMatches = Array.from(emitsContent.matchAll(/['"]?(\w+)['"]?\s*(?::\s*function|\([^)]*\)\s*{)/g));
    
    for (const match of eventMatches) {
      events.push({
        name: match[1],
        payload: null,
        description: '',
      });
    }
  }

  return events;
}

/**
 * Extract slots from template
 */
function extractSlots(template: string): SlotDefinition[] {
  const slots: SlotDefinition[] = [];

  // Match slot definitions
  const slotMatches = Array.from(template.matchAll(/<slot\s+name=["']([^"']+)["'][^>]*>/g));
  for (const match of slotMatches) {
    slots.push({
      name: match[1],
      description: '',
    });
  }

  // Match default slot
  if (template.includes('<slot>') || template.includes('<slot ')) {
    if (!slots.some((s) => s.name === 'default')) {
      slots.unshift({
        name: 'default',
        description: '',
      });
    }
  }

  return slots;
}

/**
 * Extract JSDoc comments for documentation
 */
function extractJsDocComments(content: string): Map<string, string> {
  const comments = new Map<string, string>();
  
  // Match JSDoc comments
  const jsDocMatches = Array.from(content.matchAll(/\/\*\*([\s\S]*?)\*\/\s*(?:const|let|var|function|interface|type)\s+(\w+)/g));
  for (const match of jsDocMatches) {
    const comment = match[1]
      .split('\n')
      .map((line: string) => line.replace(/^\s*\*\s?/, '').trim())
      .filter(Boolean)
      .join(' ');
    comments.set(match[2], comment);
  }

  return comments;
}

/**
 * Extract API from a Vue component file
 */
function extractComponentApi(
  filePath: string,
  componentName: string
): ComponentApi {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { script, scriptSetup, template } = parseVueSfc(content);

  // Extract from script setup
  let props = extractDefineProps(scriptSetup);
  let events = extractDefineEmits(scriptSetup);

  // Extract from Options API if no script setup
  if (props.length === 0 && script) {
    props = extractOptionsApiProps(script);
  }
  if (events.length === 0 && script) {
    events = extractOptionsApiEmits(script);
  }

  // Extract slots from template
  const slots = extractSlots(template);

  // Extract JSDoc comments for descriptions
  const jsDocComments = extractJsDocComments(script || scriptSetup);
  
  // Apply descriptions to props
  for (const prop of props) {
    if (jsDocComments.has(prop.name)) {
      prop.description = jsDocComments.get(prop.name) || '';
    }
  }

  return {
    component: componentName,
    source: filePath,
    props,
    events,
    slots,
    extractedAt: new Date().toISOString(),
  };
}

/**
 * Get all Vue component files
 */
function getVueComponentFiles(
  dir: string,
  ignorePatterns: RegExp[]
): Array<{ name: string; path: string }> {
  const components: Array<{ name: string; path: string }> = [];

  if (!fs.existsSync(dir)) {
    return components;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check for component file in directory
      const files = fs.readdirSync(fullPath);
      const vueFile = files.find(
        (f) => f.endsWith('.vue') && !ignorePatterns.some((p) => p.test(f))
      );

      if (vueFile) {
        const componentName = entry.name;
        components.push({
          name: componentName,
          path: path.join(fullPath, vueFile),
        });
      }

      // Recursively check subdirectories
      components.push(...getVueComponentFiles(fullPath, ignorePatterns));
    } else if (entry.name.endsWith('.vue') && !ignorePatterns.some((p) => p.test(entry.name))) {
      // Standalone Vue file
      const componentName = entry.name.replace('.vue', '');
      components.push({
        name: componentName,
        path: fullPath,
      });
    }
  }

  return components;
}

/**
 * Extract API from all components
 */
export function extractAllComponentApis(options: Partial<ExtractionOptions> = {}): ComponentApi[] {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const apis: ComponentApi[] = [];

  const components = getVueComponentFiles(
    opts.componentsDir,
    opts.ignorePatterns || []
  );

  for (const { name, path: componentPath } of components) {
    try {
      const api = extractComponentApi(componentPath, name);
      apis.push(api);
    } catch (error) {
      console.error(`Error extracting API from ${componentPath}:`, error);
    }
  }

  return apis;
}

/**
 * Write API JSON files
 */
export function writeApiJsonFiles(
  apis: ComponentApi[],
  outputDir: string
): void {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const api of apis) {
    const outputPath = path.join(outputDir, `${api.component.toLowerCase()}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(api, null, 2));
    console.log(`Generated: ${outputPath}`);
  }
}

/**
 * Generate TypeScript types from API
 */
export function generateApiTypes(apis: ComponentApi[]): string {
  const lines: string[] = [];

  lines.push('/**');
  lines.push(' * Auto-generated component API types');
  lines.push(' * Do not edit manually');
  lines.push(' */');
  lines.push('');

  for (const api of apis) {
    lines.push(`export interface ${api.component}Props {`);
    for (const prop of api.props) {
      const optional = prop.required ? '' : '?';
      lines.push(`  /** ${prop.description || prop.name} */`);
      lines.push(`  ${prop.name}${optional}: ${prop.type};`);
    }
    lines.push('}');
    lines.push('');

    if (api.events.length > 0) {
      lines.push(`export interface ${api.component}Emits {`);
      for (const event of api.events) {
        lines.push(`  /** ${event.description || event.name} */`);
        lines.push(`  (e: '${event.name}'${event.payload ? `, payload: ${event.payload}` : ''}): void;`);
      }
      lines.push('}');
      lines.push('');
    }

    if (api.slots.length > 0) {
      lines.push(`export interface ${api.component}Slots {`);
      for (const slot of api.slots) {
        lines.push(`  /** ${slot.description || slot.name} */`);
        lines.push(`  ${slot.name}: () => VNode;`);
      }
      lines.push('}');
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Main function for CLI
 */
async function main() {
  const args = process.argv.slice(2);
  const outputTypes = args.includes('--types');
  const outputDir = args.find((a) => a.startsWith('--output='))?.split('=')[1] || 'src/generated/component-api';

  const cwd = process.cwd();
  const componentsDir = path.join(cwd, 'src/components');

  console.log('Extracting component APIs...');
  console.log(`Components directory: ${componentsDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log('');

  const apis = extractAllComponentApis({
    componentsDir,
    outputDir,
  });

  // Write JSON files
  writeApiJsonFiles(apis, outputDir);

  // Write types if requested
  if (outputTypes) {
    const typesPath = path.join(outputDir, 'component-api-types.ts');
    const typesContent = generateApiTypes(apis);
    fs.writeFileSync(typesPath, typesContent);
    console.log(`Generated types: ${typesPath}`);
  }

  console.log('');
  console.log(`Extracted API for ${apis.length} components`);
}

// Run main when executed as script (CJS or ESM)
const isCjsMain = typeof require !== 'undefined' && require.main === module;
const isEsmMain =
  typeof import.meta !== 'undefined' &&
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isCjsMain || isEsmMain) {
  main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}

export {
  ComponentApi,
  PropDefinition,
  EventDefinition,
  SlotDefinition,
  ExtractionOptions,
};
