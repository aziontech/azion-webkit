/**
 *
 *
 * @module `attributeviewer`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines a single attribute item with nested structure.
 */
export interface AttributeItem {
  /**
   * The name of the attribute.
   */
  name: string
  /**
   * The data type of the attribute (e.g., 'String', 'Object', 'Array').
   */
  type: string
  /**
   * A description explaining the purpose of the attribute.
   */
  description: string
  /**
   * Optional array of child attributes for nested structures.
   */
  children?: AttributeItem[]
}

/**
 * Defines valid properties in AttributeViewer component.
 */
export interface AttributeViewerProps {
  /**
   * Array of attribute objects with nested structure to display.
   * First-level attributes are shown outside panels, children are rendered in collapsible panels.
   */
  attributes: AttributeItem[]
  /**
   * Text to display in the accordion toggle header for child attributes.
   * @default 'Hide child attributes'
   */
  toggleText?: string
}

/**
 * Defines valid slots in AttributeViewer component.
 */
export interface AttributeViewerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AttributeViewer component.
 */
export interface AttributeViewerEmits {}

/**
 * **Azion WebKit - AttributeViewer**
 *
 * _Component for displaying nested attribute structures in a hierarchical, collapsible format._
 *
 * @group Component
 */
declare class AttributeViewer extends ClassComponent<
  AttributeViewerProps,
  AttributeViewerSlots,
  AttributeViewerEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AttributeViewer: GlobalComponentConstructor<AttributeViewer>
  }
}

export default AttributeViewer
