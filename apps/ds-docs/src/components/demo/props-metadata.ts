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
};

/**
 * Fieldset component props metadata
 */
export const fieldsetProps: PropsDefinition = {
  title: {
    type: 'string',
    control: 'text',
    default: 'Fieldset Title',
    label: 'Title',
    description: 'The legend/title of the fieldset',
    category: 'Content',
    placeholder: 'Enter fieldset title...',
  },
  variant: {
    type: 'enum',
    control: 'select',
    default: 'default',
    options: ['default', 'bordered', 'elevated'],
    optionLabels: {
      default: 'Default',
      bordered: 'Bordered',
      elevated: 'Elevated',
    },
    label: 'Variant',
    description: 'Visual style variant of the fieldset',
    category: 'Appearance',
  },
  disabled: {
    type: 'boolean',
    control: 'boolean',
    default: false,
    label: 'Disabled',
    description: 'Whether the fieldset is disabled',
    category: 'State',
  },
  collapsible: {
    type: 'boolean',
    control: 'boolean',
    default: false,
    label: 'Collapsible',
    description: 'Whether the fieldset can be collapsed',
    category: 'Behavior',
  },
  defaultExpanded: {
    type: 'boolean',
    control: 'boolean',
    default: true,
    label: 'Default Expanded',
    description: 'Whether the fieldset is expanded by default (when collapsible)',
    category: 'Behavior',
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
