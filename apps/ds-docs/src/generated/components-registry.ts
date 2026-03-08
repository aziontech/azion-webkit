/**
 * Component Metadata Registry
 * 
 * Central registry of documented components.
 * This file is auto-generated and should not be edited manually.
 * 
 * Generated at: ${new Date().toISOString()}
 */

/**
 * Component registry entry
 */
export interface ComponentRegistryEntry {
  /** Component name */
  name: string;
  /** Component status */
  status: 'stable' | 'beta' | 'deprecated' | 'planned' | 'experimental';
  /** Component category */
  category: string;
  /** Path to documentation */
  documentation: string;
  /** Short description */
  description?: string;
  /** Available since version */
  since?: string;
  /** Deprecated in version */
  deprecatedIn?: string;
  /** Related components */
  related?: string[];
  /** Tags for search */
  tags?: string[];
}

/**
 * Component registry
 */
export const componentsRegistry: ComponentRegistryEntry[] = [
  {
    name: 'Button',
    status: 'stable',
    category: 'actions',
    documentation: '/components/button',
    description: 'Primary action trigger component for user interactions',
    since: 'v1.0.0',
    tags: ['action', 'interactive', 'form', 'click'],
  },
  {
    name: 'Fieldset',
    status: 'stable',
    category: 'form',
    documentation: '/components/fieldset',
    description: 'Form grouping component for organizing related form controls',
    since: 'v1.0.0',
    tags: ['form', 'group', 'input', 'container'],
  },
];

/**
 * Get component by name
 */
export function getComponentByName(name: string): ComponentRegistryEntry | undefined {
  return componentsRegistry.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get components by status
 */
export function getComponentsByStatus(
  status: ComponentRegistryEntry['status']
): ComponentRegistryEntry[] {
  return componentsRegistry.filter((c) => c.status === status);
}

/**
 * Get components by category
 */
export function getComponentsByCategory(category: string): ComponentRegistryEntry[] {
  return componentsRegistry.filter(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get stable components
 */
export function getStableComponents(): ComponentRegistryEntry[] {
  return getComponentsByStatus('stable');
}

/**
 * Get beta components
 */
export function getBetaComponents(): ComponentRegistryEntry[] {
  return getComponentsByStatus('beta');
}

/**
 * Get deprecated components
 */
export function getDeprecatedComponents(): ComponentRegistryEntry[] {
  return getComponentsByStatus('deprecated');
}

/**
 * Search components by query
 */
export function searchComponents(query: string): ComponentRegistryEntry[] {
  const lowerQuery = query.toLowerCase();
  
  return componentsRegistry.filter((c) => {
    // Search in name
    if (c.name.toLowerCase().includes(lowerQuery)) return true;
    
    // Search in description
    if (c.description?.toLowerCase().includes(lowerQuery)) return true;
    
    // Search in tags
    if (c.tags?.some((t) => t.toLowerCase().includes(lowerQuery))) return true;
    
    return false;
  });
}

/**
 * Get all component names
 */
export function getAllComponentNames(): string[] {
  return componentsRegistry.map((c) => c.name);
}

/**
 * Get component categories
 */
export function getCategories(): string[] {
  const categories = new Set(componentsRegistry.map((c) => c.category));
  return Array.from(categories);
}

/**
 * Registry statistics
 */
export function getRegistryStats(): {
  total: number;
  stable: number;
  beta: number;
  deprecated: number;
  planned: number;
  experimental: number;
} {
  return {
    total: componentsRegistry.length,
    stable: getComponentsByStatus('stable').length,
    beta: getComponentsByStatus('beta').length,
    deprecated: getComponentsByStatus('deprecated').length,
    planned: getComponentsByStatus('planned').length,
    experimental: getComponentsByStatus('experimental').length,
  };
}

/**
 * Export default registry
 */
export default componentsRegistry;
