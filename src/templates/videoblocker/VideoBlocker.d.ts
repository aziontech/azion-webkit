export interface VideoBlockerProps {
  /**
   * Video configuration object containing id, title, and image.
   */
  video: {
    id: string
    title: string
    image: {
      alt: string
      dark: {
        src: string
      }
      light: {
        src: string
      }
    }
  }
  /**
   * Form configuration object containing HubSpot settings and title.
   */
  form: {
    hubspot: {
      formId: string
      companyId: string
    }
    title: string
  }
  /**
   * Whether to disable the modal visibility toggle.
   * @default false
   */
  disableVisibilityToggle?: boolean
  /**
   * Duration in milliseconds before the form is shown after video starts playing.
   * @default 10000
   */
  timerDuration?: number
}

export const VideoBlocker: import('vue').DefineComponent<VideoBlockerProps>
