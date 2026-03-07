import { defineCollection, z } from 'astro:content';

/**
 * Base frontmatter schema shared across all page types
 */
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Navigation metadata
  navLabel: z.string().optional(),
  order: z.number().optional(),
  hidden: z.boolean().optional(),
  category: z.string().optional(),
  // Status metadata
  status: z.enum(['stable', 'beta', 'deprecated', 'planned', 'experimental']).optional(),
  since: z.string().optional(),
  contributors: z.array(z.string()).optional(),
  lastUpdated: z.coerce.date().optional(),
});

/**
 * Component documentation schema
 */
const componentSchema = baseSchema.extend({
  type: z.literal('component'),
  category: z.enum(['form', 'navigation', 'feedback', 'data-display', 'layout', 'utility']).optional(),
  component: z.string().optional(),
  source: z.string().optional(),
  storybook: z.string().optional(),
  figma: z.string().optional(),
  related: z.array(z.string()).optional(),
});

/**
 * Foundation documentation schema
 */
const foundationSchema = baseSchema.extend({
  type: z.literal('foundation'),
  category: z.enum(['color', 'typography', 'spacing', 'elevation', 'motion', 'imagery']).optional(),
});

/**
 * Token documentation schema
 */
const tokenSchema = baseSchema.extend({
  type: z.literal('token'),
  category: z.enum(['color', 'typography', 'spacing', 'elevation', 'motion', 'border', 'shadow']),
});

/**
 * Block documentation schema
 */
const blockSchema = baseSchema.extend({
  type: z.literal('block'),
  category: z.string(),
  components: z.array(z.string()).optional(),
});

/**
 * Pattern documentation schema
 */
const patternSchema = baseSchema.extend({
  type: z.literal('pattern'),
  category: z.string(),
  useCases: z.array(z.string()).optional(),
});

/**
 * Template documentation schema
 */
const templateSchema = baseSchema.extend({
  type: z.literal('template'),
  category: z.string(),
  blocks: z.array(z.string()).optional(),
});

/**
 * Getting started guide schema
 */
const guideSchema = baseSchema.extend({
  type: z.literal('guide'),
  category: z.enum(['installation', 'quick-start', 'migration', 'contribution']).optional(),
  prerequisites: z.array(z.string()).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
});

/**
 * Icon documentation schema
 */
const iconSchema = baseSchema.extend({
  type: z.literal('icon'),
  category: z.enum(['azionicons', 'primeicons']).optional(),
});

/**
 * Contributing documentation schema
 */
const contributingSchema = baseSchema.extend({
  type: z.literal('contributing'),
  category: z.enum(['guidelines', 'development', 'documentation', 'pull-requests']).optional(),
});

/**
 * Define all content collections
 */
export const collections = {
  components: defineCollection({
    type: 'content',
    schema: componentSchema,
  }),
  foundations: defineCollection({
    type: 'content',
    schema: foundationSchema,
  }),
  tokens: defineCollection({
    type: 'content',
    schema: tokenSchema,
  }),
  blocks: defineCollection({
    type: 'content',
    schema: blockSchema,
  }),
  patterns: defineCollection({
    type: 'content',
    schema: patternSchema,
  }),
  templates: defineCollection({
    type: 'content',
    schema: templateSchema,
  }),
  'get-started': defineCollection({
    type: 'content',
    schema: guideSchema,
  }),
  icons: defineCollection({
    type: 'content',
    schema: iconSchema,
  }),
  contributing: defineCollection({
    type: 'content',
    schema: contributingSchema,
  }),
};

/**
 * Export types for frontmatter
 */
export type ComponentFrontmatter = z.infer<typeof componentSchema>;
export type FoundationFrontmatter = z.infer<typeof foundationSchema>;
export type TokenFrontmatter = z.infer<typeof tokenSchema>;
export type BlockFrontmatter = z.infer<typeof blockSchema>;
export type PatternFrontmatter = z.infer<typeof patternSchema>;
export type TemplateFrontmatter = z.infer<typeof templateSchema>;
export type GuideFrontmatter = z.infer<typeof guideSchema>;
export type IconFrontmatter = z.infer<typeof iconSchema>;
export type ContributingFrontmatter = z.infer<typeof contributingSchema>;
