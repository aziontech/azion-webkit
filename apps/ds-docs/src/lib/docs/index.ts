/**
 * Documentation Utilities
 * 
 * Central export point for documentation resolution and utilities.
 */

export {
  resolveDoc,
  resolveDocFromUrl,
  getAvailablePages,
  hasTranslation,
  getDocStaticPaths,
  type ResolveDocParams,
  type ResolvedDoc,
  type ResolvedDocNotFound,
  type ResolveOptions,
} from './resolveDoc';

export {
  SITE_BASE_URL,
  getCanonicalUrl,
  getAlternateUrls,
  getHreflangTags,
  getOgUrl,
  getCurrentPageUrl,
  getSeoMetadata,
  type CanonicalConfig,
  type SeoMetadata,
} from './canonical';
