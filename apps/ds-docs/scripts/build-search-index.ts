/**
 * Build Search Index
 * 
 * Build-time script to generate the search index from content collections.
 * Run during the Astro build process.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Types
interface SearchIndexEntry {
  id: string;
  title: string;
  section: string;
  type: string;
  category?: string;
  description: string;
  headings: string[];
  tags: string[];
  content: string;
  url: string;
  status?: string;
  related?: string[];
  version: string;
  language: string;
  lastUpdated?: string;
}

interface SearchIndex {
  meta: {
    generated: string;
    count: number;
    language: string;
    version: string;
    languages: string[];
    versions: string[];
    schemaVersion: number;
  };
  entries: SearchIndexEntry[];
}

// Content extraction functions (duplicated for build-time use)
function extractHeadings(content: string): string[] {
  const headings: string[] = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const headingText = match[2]
      .replace(/\s*\{#[^}]+\}\s*$/, '')
      .replace(/\s*\[#[^}]+\]\s*$/, '')
      .trim();
    
    if (headingText) {
      headings.push(headingText);
    }
  }
  
  return headings;
}

function extractTextContent(content: string): string {
  let text = content;
  
  // Remove frontmatter
  text = text.replace(/^---[\s\S]*?---/, '');
  
  // Remove code blocks (fenced)
  text = text.replace(/```[\s\S]*?```/g, ' ');
  
  // Remove inline code
  text = text.replace(/`[^`]+`/g, ' ');
  
  // Remove import statements
  text = text.replace(/^import\s+.*$/gm, '');
  
  // Remove component usage
  text = text.replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, ' ');
  text = text.replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, ' ');
  
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, ' ');
  
  // Remove markdown links but keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // Remove markdown images
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, ' ');
  
  // Remove markdown heading markers
  text = text.replace(/^#{1,6}\s+/gm, '');
  
  // Remove markdown bold/italic
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
  
  // Remove blockquotes
  text = text.replace(/^>\s+/gm, '');
  
  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, '');
  
  // Remove list markers
  text = text.replace(/^[\s]*[-*+]\s+/gm, '');
  text = text.replace(/^[\s]*\d+\.\s+/gm, '');
  
  // Remove special characters except basic punctuation
  text = text.replace(/[^\w\s.,!?;:'"()-]/g, ' ');
  
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

function truncateContent(content: string, maxLength: number = 2000): string {
  if (content.length <= maxLength) {
    return content;
  }
  
  const truncated = content.slice(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastQuestion = truncated.lastIndexOf('?');
  const lastExclaim = truncated.lastIndexOf('!');
  
  const lastSentenceEnd = Math.max(lastPeriod, lastQuestion, lastExclaim);
  
  if (lastSentenceEnd > maxLength * 0.7) {
    return truncated.slice(0, lastSentenceEnd + 1);
  }
  
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.8) {
    return truncated.slice(0, lastSpace);
  }
  
  return truncated;
}

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content: string): Record<string, unknown> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return {};
  }
  
  const frontmatterStr = frontmatterMatch[1];
  const result: Record<string, unknown> = {};
  
  // Simple YAML parsing for frontmatter
  const lines = frontmatterStr.split('\n');
  let currentKey = '';
  let currentValue: unknown = '';
  let inArray = false;
  let arrayValues: unknown[] = [];
  
  for (const line of lines) {
    const keyValueMatch = line.match(/^(\w+):\s*(.*)$/);
    
    if (keyValueMatch) {
      // Save previous key/value
      if (currentKey) {
        result[currentKey] = inArray ? arrayValues : currentValue;
      }
      
      currentKey = keyValueMatch[1];
      const value = keyValueMatch[2].trim();
      
      if (value === '') {
        inArray = true;
        arrayValues = [];
        currentValue = '';
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // Inline array
        const arrayContent = value.slice(1, -1);
        result[currentKey] = arrayContent.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
        currentKey = '';
        inArray = false;
      } else if (value.startsWith('"') && value.endsWith('"')) {
        result[currentKey] = value.slice(1, -1);
        currentKey = '';
      } else if (value.startsWith("'") && value.endsWith("'")) {
        result[currentKey] = value.slice(1, -1);
        currentKey = '';
      } else {
        result[currentKey] = value;
        currentKey = '';
      }
    } else if (line.startsWith('  - ') && inArray) {
      const arrayValue = line.slice(4).trim().replace(/^['"]|['"]$/g, '');
      arrayValues.push(arrayValue);
    }
  }
  
  // Save last key/value
  if (currentKey) {
    result[currentKey] = inArray ? arrayValues : currentValue;
  }
  
  return result;
}

/**
 * Map content type from frontmatter to search type
 */
function mapContentType(frontmatter: Record<string, unknown>): string {
  if (frontmatter.type) {
    return frontmatter.type as string;
  }
  return 'doc';
}

/**
 * Process a single markdown file
 */
function processMarkdownFile(
  filePath: string,
  collection: string,
  slug: string
): SearchIndexEntry | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);
    
    // Skip hidden files
    if (frontmatter.hidden === true) {
      return null;
    }
    
    // Extract content
    const headings = extractHeadings(content);
    const textContent = truncateContent(extractTextContent(content));
    
    // Build URL
    const url = `/${collection}/${slug}`;
    
    // Build entry
    const entry: SearchIndexEntry = {
      id: `${collection}/${slug}`,
      title: (frontmatter.title as string) || slug,
      section: collection,
      type: mapContentType(frontmatter),
      description: (frontmatter.description as string) || '',
      headings,
      tags: (frontmatter.tags as string[]) || [],
      content: textContent,
      url,
      // i18n fields with defaults
      version: (frontmatter.version as string) || 'v1',
      language: (frontmatter.language as string) || 'en',
    };
    
    // Add optional fields
    if (frontmatter.category) {
      entry.category = frontmatter.category as string;
    }
    
    if (frontmatter.status) {
      entry.status = frontmatter.status as string;
    }
    
    if (frontmatter.related) {
      entry.related = frontmatter.related as string[];
    }
    
    return entry;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

/**
 * Process all content collections
 */
function processCollections(contentDir: string): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];
  
  // Define collections to process
  const collections = [
    'components',
    'foundations',
    'tokens',
    'blocks',
    'patterns',
    'templates',
    'get-started',
    'icons',
    'contributing',
    'playground',
  ];
  
  for (const collection of collections) {
    const collectionPath = path.join(contentDir, collection);
    
    if (!fs.existsSync(collectionPath)) {
      console.log(`Collection not found: ${collection}`);
      continue;
    }
    
    const files = fs.readdirSync(collectionPath);
    
    for (const file of files) {
      if (!file.endsWith('.md')) {
        continue;
      }
      
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(collectionPath, file);
      
      const entry = processMarkdownFile(filePath, collection, slug);
      if (entry) {
        entries.push(entry);
      }
    }
  }
  
  return entries;
}

/**
 * Build the search index
 */
function buildSearchIndex(contentDir: string, outputPath: string): void {
  console.log('Building search index...');
  
  const entries = processCollections(contentDir);
  
  // Extract unique versions and languages from entries
  const versions = Array.from(new Set(entries.map(e => e.version)));
  const languages = Array.from(new Set(entries.map(e => e.language)));
  
  const index: SearchIndex = {
    meta: {
      generated: new Date().toISOString(),
      count: entries.length,
      language: 'en',
      version: 'v1',
      languages,
      versions,
      schemaVersion: 2,
    },
    entries,
  };
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write index
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  
  console.log(`Search index built with ${entries.length} entries`);
  console.log(`Output: ${outputPath}`);
}

// Run the build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');
const outputPath = path.join(__dirname, '../public/search-index.json');

buildSearchIndex(contentDir, outputPath);
