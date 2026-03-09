/**
 * Props Metadata Definitions
 * 
 * These metadata objects define how props are displayed and edited
 * in the playground. This format is designed to be easily generated
 * automatically from Vue component definitions or TypeScript types
 * in the future.
 */

import type { PropsDefinition } from '../playground/types';

/**
 * Button component props metadata
 */
export const buttonProps: PropsDefinition = {
  variant: {
    type: 'enum',
    control: 'select',
    default: 'primary',
    options: ['primary', 'secondary', 'destructive', 'ghost'],
    optionLabels: {
      primary: 'Primary',
      secondary: 'Secondary',
      destructive: 'Destructive',
      ghost: 'Ghost',
    },
    label: 'Variant',
    description: 'Visual style variant of the button',
    category: 'Appearance',
  },
  size: {
    type: 'enum',
    control: 'select',
    default: 'md',
    options: ['sm', 'md', 'lg'],
    optionLabels: {
      sm: 'Small',
      md: 'Medium',
      lg: 'Large',
    },
    label: 'Size',
    description: 'Size of the button',
    category: 'Appearance',
  },
  disabled: {
    type: 'boolean',
    control: 'boolean',
    default: false,
    label: 'Disabled',
    description: 'Whether the button is disabled',
    category: 'State',
  },
  loading: {
    type: 'boolean',
    control: 'boolean',
    default: false,
    label: 'Loading',
    description: 'Shows loading spinner and disables interaction',
    category: 'State',
  },
  fullWidth: {
    type: 'boolean',
    control: 'boolean',
    default: false,
    label: 'Full Width',
    description: 'Whether button takes full width of container',
    category: 'Layout',
  },
  icon: {
    type: 'string',
    control: 'text',
    default: '',
    label: 'Icon',
    description: 'Name of the icon to display before or after the label',
    category: 'Content',
    placeholder: 'e.g., plus, arrow-right',
  },
  iconPosition: {
    type: 'enum',
    control: 'select',
    default: 'left',
    options: ['left', 'right'],
    optionLabels: {
      left: 'Left',
      right: 'Right',
    },
    label: 'Icon Position',
    description: 'Position of the icon relative to the label',
    category: 'Content',
  },
};

/**
 * Example of how this could be auto-generated in the future:
 * 
 * From Vue component:
 * ```typescript
 * // Future: Auto-generate from component
 * const buttonProps = extractPropsMetadata(AzButton);
 * ```
 * 
 * From TypeScript types:
 * ```typescript
 * // Future: Auto-generate from types
 * const buttonProps = generatePropsMetadata<ButtonProps>();
 * ```
 * 
 * From JSON metadata file:
 * ```typescript
 * // Future: Load from JSON file
 * import buttonProps from './metadata/button.json';
 * ```
 */
