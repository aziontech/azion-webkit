#!/usr/bin/env node

/**
 * Script para gerar documentação automática dos componentes Vue
 *
 * Uso:
 * node scripts/generate-component-docs.js [component-name]
 * node scripts/generate-component-docs.js --all
 *
 * Exemplos:
 * node scripts/generate-component-docs.js message
 * node scripts/generate-component-docs.js --all
 */

const fs = require('fs')
const path = require('path')

class ComponentDocGenerator {
  constructor() {
    this.templatesDir = path.join(__dirname, '../src/templates')
    this.templateFile = path.join(__dirname, '../docs/component-readme-template.md')
    this.storiesDir = path.join(__dirname, '../src/stories')
  }

  /**
   * Extrai informações das props do arquivo .vue
   */
  extractPropsFromVue(vueContent) {
    const props = []

    // Regex para capturar defineProps
    const definePropsRegex = /defineProps\(\{([\s\S]*?)\}\)/
    const match = vueContent.match(definePropsRegex)

    if (match) {
      const propsContent = match[1]

      // Regex para capturar cada prop
      const propRegex = /(\w+):\s*\{([^}]*)\}/g
      let propMatch

      while ((propMatch = propRegex.exec(propsContent)) !== null) {
        const [, propName, propDefinition] = propMatch

        const prop = {
          name: propName,
          type: this.extractType(propDefinition),
          default: this.extractDefault(propDefinition),
          required: this.extractRequired(propDefinition),
          validator: this.extractValidator(propDefinition),
          options: this.extractOptions(propDefinition)
        }

        props.push(prop)
      }
    }

    return props
  }

  /**
   * Extrai tipo da prop
   */
  extractType(propDefinition) {
    const typeMatch = propDefinition.match(/type:\s*(\[?[^\,\n]*\]?)/)
    if (typeMatch) {
      return typeMatch[1].trim()
    }
    return 'unknown'
  }

  /**
   * Extrai valor padrão da prop
   */
  extractDefault(propDefinition) {
    const defaultMatch = propDefinition.match(/default:\s*([^,\n]*?)(?:,|\n|})/s)
    if (defaultMatch) {
      return defaultMatch[1].trim()
    }
    return undefined
  }

  /**
   * Extrai se a prop é obrigatória
   */
  extractRequired(propDefinition) {
    return propDefinition.includes('required: true')
  }

  /**
   * Extrai validator da prop
   */
  extractValidator(propDefinition) {
    const validatorMatch = propDefinition.match(/validator:\s*\([^)]*\)\s*=>\s*([^,\n}]*)/s)
    if (validatorMatch) {
      return validatorMatch[1].trim()
    }
    return null
  }

  /**
   * Extrai opções da prop (do campo options se existir)
   */
  extractOptions(propDefinition) {
    const optionsMatch = propDefinition.match(/options:\s*\[([^\]]*)\]/)
    if (optionsMatch) {
      return optionsMatch[1].split(',').map(opt => opt.trim().replace(/['"]/g, ''))
    }
    return null
  }

  /**
   * Extrai slots do arquivo .vue
   */
  extractSlotsFromVue(vueContent) {
    const slots = []

    // Procura por slots no template
    const slotRegex = /<template\s+#(\w+)[^>]*>/g
    let match

    while ((match = slotRegex.exec(vueContent)) !== null) {
      if (!slots.includes(match[1])) {
        slots.push(match[1])
      }
    }

    // Procura por slot default
    if (vueContent.includes('<slot') && !slots.includes('default')) {
      slots.unshift('default')
    }

    return slots
  }

  /**
   * Extrai events do arquivo .vue
   */
  extractEventsFromVue(vueContent) {
    const events = []

    // Procura por emits
    const emitRegex = /\$emit\(['"](.*?)['"]|emit\(['"](.*?)['"]|@(\w+)/g
    let match

    const foundEvents = new Set()

    while ((match = emitRegex.exec(vueContent)) !== null) {
      const eventName = match[1] || match[2] || match[3]
      if (eventName && !foundEvents.has(eventName)) {
        foundEvents.add(eventName)
        events.push(eventName)
      }
    }

    return events
  }

  /**
   * Extrai informações do arquivo TypeScript
   */
  extractFromTypeScript(tsContent) {
    const info = {
      props: [],
      slots: [],
      events: [],
      description: ''
    }

    // Extrai descrição do módulo
    const moduleMatch = tsContent.match(/\* (.+)\n \*\n \* @module/)
    if (moduleMatch) {
      info.description = moduleMatch[1]
    }

    // Extrai props da interface
    const propsInterfaceMatch = tsContent.match(/export interface \w+Props \{([\s\S]*?)\}/s)
    if (propsInterfaceMatch) {
      const propsContent = propsInterfaceMatch[1]

      // Regex para extrair cada prop
      const propRegex = /\/\*\*\s*\n\s*\* (.+?)\n(?:\s*\* @defaultValue (.+?)\n)?\s*\*\/\s*(\w+)\?\?: (.+)/gs
      let match

      while ((match = propRegex.exec(propsContent)) !== null) {
        const [, description, defaultValue, name, type] = match
        info.props.push({
          name,
          type: type.trim(),
          description: description.trim(),
          default: defaultValue?.trim(),
          required: !name.includes('?')
        })
      }
    }

    return info
  }

  /**
   * Procura story do Storybook relacionado
   */
  findStoryFile(componentName) {
    const possiblePaths = [
      path.join(this.storiesDir, 'elements', `${componentName}.stories.js`),
      path.join(this.storiesDir, 'templates', `${componentName}.stories.js`),
      path.join(this.storiesDir, 'templates', 'sections', `${componentName}.stories.js`),
      path.join(this.storiesDir, 'blocks', `${componentName}.stories.js`)
    ]

    for (const storyPath of possiblePaths) {
      if (fs.existsSync(storyPath)) {
        return path.relative(path.join(__dirname, '..'), storyPath)
      }
    }

    return null
  }

  /**
   * Extrai dependências do arquivo .vue
   */
  extractDependencies(vueContent) {
    const dependencies = {
      external: [],
      internal: []
    }

    // Extrai imports
    const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g
    let match

    while ((match = importRegex.exec(vueContent)) !== null) {
      const importPath = match[1]

      if (importPath.startsWith('@/') || importPath.startsWith('./') || importPath.startsWith('../')) {
        dependencies.internal.push(importPath)
      } else {
        dependencies.external.push(importPath)
      }
    }

    return dependencies
  }

  /**
   * Gera documentação para um componente
   */
  generateComponentDoc(componentName) {
    const componentDir = path.join(this.templatesDir, componentName.toLowerCase())

    if (!fs.existsSync(componentDir)) {
      console.error(`❌ Component '${componentName}' not found in ${componentDir}`)
      return false
    }

    const compName = this.getComponentName(componentName)
    const vueFile = path.join(componentDir, `${compName}.vue`)
    const tsFile = path.join(componentDir, `${compName}.d.ts`)

    if (!fs.existsSync(vueFile)) {
      console.error(`❌ Vue file not found: ${vueFile}`)
      return false
    }

    try {
      const vueContent = fs.readFileSync(vueFile, 'utf8')
      const tsContent = fs.existsSync(tsFile) ? fs.readFileSync(tsFile, 'utf8') : ''

      // Extrai informações
      const vueProps = this.extractPropsFromVue(vueContent)
      const slots = this.extractSlotsFromVue(vueContent)
      const events = this.extractEventsFromVue(vueContent)
      const tsInfo = this.extractFromTypeScript(tsContent)
      const dependencies = this.extractDependencies(vueContent)
      const storyPath = this.findStoryFile(componentName)

      // Combina informações do Vue e TypeScript
      const allProps = this.mergeProps(vueProps, tsInfo.props)

      // Gera documentação
      const documentation = this.generateDocumentation({
        componentName: compName,
        folderName: componentName,
        description: tsInfo.description || `Component ${compName}`,
        props: allProps,
        slots,
        events,
        dependencies,
        storyPath
      })

      // Salva documentação
      const readmePath = path.join(componentDir, 'README.md')
      fs.writeFileSync(readmePath, documentation)

      console.log(`✅ Documentation generated for ${componentName}: ${readmePath}`)
      return true

    } catch (error) {
      console.error(`❌ Error generating documentation for ${componentName}:`, error.message)
      return false
    }
  }

  /**
   * Obtém o nome correto do arquivo do componente
   */
  getComponentFileName(componentName) {
    const componentDir = path.join(this.templatesDir, componentName.toLowerCase())
    const files = fs.readdirSync(componentDir)

    const vueFile = files.find(file => file.endsWith('.vue'))
    return vueFile ? path.parse(vueFile).name : componentName
  }

  /**
   * Obtém o nome correto do componente do arquivo .vue
   */
  getComponentName(componentName) {
    return this.getComponentFileName(componentName)
  }

  /**
   * Combina props extraídas do Vue e TypeScript
   */
  mergeProps(vueProps, tsProps) {
    const propMap = new Map()

    // Adiciona props do Vue
    vueProps.forEach(prop => {
      propMap.set(prop.name, prop)
    })

    // Mescla com informações do TypeScript
    tsProps.forEach(tsProp => {
      const existing = propMap.get(tsProp.name)
      if (existing) {
        propMap.set(tsProp.name, { ...existing, ...tsProp })
      } else {
        propMap.set(tsProp.name, tsProp)
      }
    })

    return Array.from(propMap.values())
  }

  /**
   * Gera o conteúdo da documentação
   */
  generateDocumentation({ componentName, folderName, description, props, slots, events, dependencies, storyPath }) {
    // Use o nome correto do componente sem forçar capitalização
    let doc = `# ${componentName}\n\n`

    // Purpose
    doc += `## Purpose\n\n${description}\n\n`

    // Props
    if (props.length > 0) {
      const requiredProps = props.filter(p => p.required)
      const optionalProps = props.filter(p => !p.required)

      doc += `## Props\n\n`

      if (requiredProps.length > 0) {
        doc += `### Required\n`
        doc += `| Prop | Type | Description |\n`
        doc += `|------|------|-------------|\n`

        requiredProps.forEach(prop => {
          doc += `| \`${prop.name}\` | \`${prop.type}\` | ${prop.description || 'No description'} |\n`
        })
        doc += '\n'
      }

      if (optionalProps.length > 0) {
        doc += `### Optional\n`
        doc += `| Prop | Type | Default | Values | Description |\n`
        doc += `|------|------|---------|--------|-------------|\n`

        optionalProps.forEach(prop => {
          const defaultValue = prop.default !== undefined ? `\`${prop.default}\`` : '-'
          const values = prop.options ? `\`${prop.options.join('\\|')}\`` : '-'
          doc += `| \`${prop.name}\` | \`${prop.type}\` | ${defaultValue} | ${values} | ${prop.description || 'No description'} |\n`
        })
        doc += '\n'
      }
    }

    // Slots
    if (slots.length > 0) {
      doc += `## Slots\n\n`
      doc += `| Slot | Description |\n`
      doc += `|------|-------------|\n`

      slots.forEach(slot => {
        const description = slot === 'default' ? 'Default component content' : `${slot} slot`
        doc += `| \`${slot}\` | ${description} |\n`
      })
      doc += '\n'
    }

    // Events
    if (events.length > 0) {
      doc += `## Events\n\n`
      doc += `| Event | Description |\n`
      doc += `|-------|-------------|\n`

      events.forEach(event => {
        doc += `| \`${event}\` | ${event} event |\n`
      })
      doc += '\n'
    }

    // Dependencies
    if (dependencies.external.length > 0 || dependencies.internal.length > 0) {
      doc += `## Dependencies\n\n`

      if (dependencies.external.length > 0) {
        doc += `### External\n`
        dependencies.external.forEach(dep => {
          doc += `- ${dep}\n`
        })
        doc += '\n'
      }

      if (dependencies.internal.length > 0) {
        doc += `### Internal\n`
        dependencies.internal.forEach(dep => {
          doc += `- ${dep}\n`
        })
        doc += '\n'
      }
    }

    // Basic example
    doc += `## Usage Example\n\n`
    doc += '```vue\n'
    doc += '<template>\n'
    doc += `  <${componentName}`

    // Add required props in example
    const requiredProps = props.filter(p => p.required)
    if (requiredProps.length > 0) {
      requiredProps.forEach(prop => {
        doc += `\n    :${prop.name}="${this.getExampleValue(prop.type)}"`
      })
    }
    doc += '\n  >\n'

    // Add default slot if it exists
    if (slots.includes('default')) {
      doc += '    Component content\n'
    }

    doc += `  </${componentName}>\n`
    doc += '</template>\n'
    doc += '```\n\n'

    // Related links
    doc += `## Related Links\n\n`
    if (storyPath) {
      doc += `- [Storybook Story](../${storyPath})\n`
    }
    doc += `- [TypeScript Definitions](./${componentName}.d.ts)\n`
    doc += `- [Component Implementation](./${componentName}.vue)\n`
    doc += `- [Export Module](./${folderName}.js)\n`
    doc += `- [Package Configuration](./package.json)\n`

    return doc
  }

  /**
   * Gera valor de exemplo baseado no tipo
   */
  getExampleValue(type) {
    if (type.includes('String')) return '"exemplo"'
    if (type.includes('Number')) return '42'
    if (type.includes('Boolean')) return 'true'
    if (type.includes('Array')) return '[]'
    if (type.includes('Object')) return '{}'
    return '"valor"'
  }

  /**
   * Gera documentação para todos os componentes
   */
  generateAllDocs() {
    const components = fs.readdirSync(this.templatesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => !name.startsWith('.'))

    console.log(`📄 Generating documentation for ${components.length} components...\n`)

    let successCount = 0
    let failureCount = 0

    components.forEach(component => {
      if (this.generateComponentDoc(component)) {
        successCount++
      } else {
        failureCount++
      }
    })

    console.log(`\n📊 Summary:`)
    console.log(`✅ Success: ${successCount}`)
    console.log(`❌ Failures: ${failureCount}`)
    console.log(`📄 Total: ${components.length}`)
  }
}

// CLI
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log(`
🚀 Component Documentation Generator

Usage:
  node scripts/generate-component-docs.js [component-name]  # Generate docs for one component
  node scripts/generate-component-docs.js --all           # Generate docs for all components

Examples:
  node scripts/generate-component-docs.js message
  node scripts/generate-component-docs.js titlesection
  node scripts/generate-component-docs.js --all
  `)
  process.exit(0)
}

const generator = new ComponentDocGenerator()

if (args[0] === '--all') {
  generator.generateAllDocs()
} else {
  const componentName = args[0]
  generator.generateComponentDoc(componentName)
}
