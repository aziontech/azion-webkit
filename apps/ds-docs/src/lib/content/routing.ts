/**
 * Routing Utilities
 * 
 * Helper functions for resolving routes and pages.
 */

import { getCollection } from 'astro:content';
import { SECTIONS, getSectionById, type Section } from './sections';

/**
 * Page resolution result
 */
export interface ResolvedPage {
  /** Section the page belongs to */
  section: Section;
  /** Page slug */
  slug: string;
  /** Full URL path */
  href: string;
  /** Whether this is an index page */
  isIndex: boolean;
  /** Collection entry data */
  entry: unknown;
}

/**
 * Resolve a page from section ID and slug
 */
export async function resolvePage(
  sectionId: string,
  slug: string
): Promise<ResolvedPage | null> {
  const section = getSectionById(sectionId);
  if (!section) return null;

  try {
    const collectionName = section.collectionName as 'components' | 'foundations' | 'tokens' | 'blocks' | 'patterns' | 'templates' | 'get-started' | 'icons' | 'contributing';
    const entries = await getCollection(collectionName);
    const entry = entries.find((e) => e.slug === slug);
    
    if (!entry) return null;

    const isIndex = slug === 'index' || slug === '';
    const href = isIndex ? section.basePath : `${section.basePath}/${slug}`;

    return {
      section,
      slug,
      href,
      isIndex,
      entry,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Resolve a page from a URL path
 */
export async function resolvePageFromPath(path: string): Promise<ResolvedPage | null> {
  // Remove leading slash and split
  const parts = path.replace(/^\//, '').split('/');
  
  if (parts.length === 0) return null;

  // Find matching section
  const section = SECTIONS.find((s) => s.basePath === `/${parts[0]}`);
  if (!section) return null;

  // Get slug (default to index)
  const slug = parts.length === 1 ? 'index' : parts.slice(1).join('/');

  return resolvePage(section.id, slug);
}

/**
 * Get all slugs for a section (for static path generation)
 */
export async function getSectionSlugs(sectionId: string): Promise<string[]> {
  const section = getSectionById(sectionId);
  if (!section) return [];

  try {
    const collectionName = section.collectionName as 'components' | 'foundations' | 'tokens' | 'blocks' | 'patterns' | 'templates' | 'get-started' | 'icons' | 'contributing';
    const entries = await getCollection(collectionName);
    return entries.map((e) => e.slug);
  } catch (error) {
    return [];
  }
}

/**
 * Get static paths for a section
 */
export async function getSectionStaticPaths(sectionId: string) {
  const section = getSectionById(sectionId);
  if (!section) return [];

  try {
    const collectionName = section.collectionName as 'components' | 'foundations' | 'tokens' | 'blocks' | 'patterns' | 'templates' | 'get-started' | 'icons' | 'contributing';
    const entries = await getCollection(collectionName);
    
    return entries.map((entry) => ({
      params: { slug: entry.slug },
      props: { entry, section },
    }));
  } catch (error) {
    return [];
  }
}

/**
 * Get all static paths for all sections
 */
export async function getAllStaticPaths() {
  const allPaths = await Promise.all(
    SECTIONS.map((section) => getSectionStaticPaths(section.id))
  );
  
  return allPaths.flat();
}

/**
 * Build URL for a page
 */
export function buildPageUrl(section: Section, slug: string): string {
  if (slug === 'index' || slug === '') {
    return section.basePath;
  }
  return `${section.basePath}/${slug}`;
}

/**
 * Parse URL to extract section and slug
 */
export function parsePageUrl(url: string): { sectionId: string; slug: string } | null {
  const parts = url.replace(/^\//, '').split('/');
  
  if (parts.length === 0) return null;

  const section = SECTIONS.find((s) => s.basePath === `/${parts[0]}`);
  if (!section) return null;

  const slug = parts.length === 1 ? 'index' : parts.slice(1).join('/');

  return {
    sectionId: section.id,
    slug,
  };
}
