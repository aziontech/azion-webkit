/**
 *
 * Message represents a wrapper component for PrimeVue Message
 *
 *
 * @module `message`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Message component.
 */
export interface MessageProps {
  /**
   * Severity level of the message.
   * @defaultValue 'info'
   */
  severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'
  /**
   * Whether the message can be closed by the user.
   * @defaultValue false
   */
  closable?: boolean
  /**
   * When enabled, message is not removed automatically.
   * @defaultValue true
   */
  sticky?: boolean
  /**
   * Delay in milliseconds to close the message automatically.
   * @defaultValue 3000
   */
  life?: number
  /**
   * Display a custom icon for the message.
   */
  icon?: string
  /**
   * Custom CSS class to apply to the message.
   */
  customClass?: string
}

/**
 * Defines valid slots in Message component.
 */
export interface MessageSlots {
  /**
   * Default content slot.
   */
  default(): VNode[]
  /**
   * Custom message icon template.
   */
  messageicon(): VNode[]
}

/**
 * Defines valid emits in Message component.
 */
export interface MessageEmits {
  /**
   * Callback to invoke when a message is closed.
   * @param {Event} event - Browser event.
   */
  close(event: Event): void
}

/**
 * **AzionWebkit - Message**
 *
 * _Message is a wrapper component for PrimeVue Message that provides consistent styling and behavior._
 *
 * @group Component
 */
declare class Message extends ClassComponent<MessageProps, MessageSlots, MessageEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Message: GlobalComponentConstructor<Message>
  }
}

export default Message
