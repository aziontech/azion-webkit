import VideoBlocker from '../../templates/videoblocker'

const MOCK = {
  video: {
    id: '6Pyn2T8EmC8',
    title: 'Move to the Edge with Azion',
    image: {
      alt: 'Video thumbnail showing Azion edge computing',
      dark: {
        src: 'https://www.azion.com/assets/pages/about/globe-about.png'
      },
      light: {
        src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
      }
    }
  },
  form: {
    hubspot: {
      formId: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      companyId: '5759082'
    },
    title: 'Get Started with Azion'
  },
  disableVisibilityToggle: false
}

const MOCK_WITH_DISABLED_TOGGLE = {
  ...MOCK,
  disableVisibilityToggle: true
}

const MOCK_DIFFERENT_VIDEO = {
  video: {
    id: 'dQw4w9WgXcQ',
    title: 'Another Azion Video',
    image: {
      alt: 'Alternative video thumbnail',
      dark: {
        src: 'https://www.azion.com/assets/pages/about/globe-about.png'
      },
      light: {
        src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
      }
    }
  },
  form: {
    hubspot: {
      formId: 'a3b0bf4c-c170-4988-a21a-f109055c4b70',
      companyId: '5759082'
    },
    title: 'Learn More About Edge Computing'
  },
  disableVisibilityToggle: false
}

const config = (args) => {
  return {
    components: { VideoBlocker },
    setup() {
      return { args }
    },
    template: '<VideoBlocker v-bind="args" />'
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = MOCK

const TemplateWithDisabledToggle = (args) => config(args)
export const WithDisabledVisibilityToggle = TemplateWithDisabledToggle.bind({})
WithDisabledVisibilityToggle.args = MOCK_WITH_DISABLED_TOGGLE

const TemplateDifferentVideo = (args) => config(args)
export const DifferentVideo = TemplateDifferentVideo.bind({})
DifferentVideo.args = MOCK_DIFFERENT_VIDEO

export default {
  title: 'Components/VideoBlocker',
  component: VideoBlocker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### VideoBlocker Component

A Vue component that provides video blocking functionality with HubSpot form integration.

### Features
- **YouTube Video Embed**: Displays YouTube videos with minimal branding
- **10-Second Timer**: Automatically pauses video and shows form after 10 seconds
- **Protective Overlay**: Hides YouTube branding and allows manual form trigger
- **HubSpot Integration**: Seamless form integration with HubSpot
- **Modal Management**: Uses BaseModal for consistent UI

### Behavior
1. **Initial State**: Shows video thumbnail with play button
2. **Video Play**: User clicks play, video starts in modal
3. **Timer**: After 10 seconds, video pauses and form appears
4. **Manual Trigger**: User can click overlay to pause video and show form immediately
5. **Form Submission**: After form submission, video resumes

### Props
- **video**: Video configuration (id, title, image)
- **form**: Form configuration (hubspot settings, title)
- **disableVisibilityToggle**: Controls modal visibility behavior

### Content rules
        `
      }
    }
  },
  argTypes: {
    video: {
      description: 'Video configuration object',
      control: { type: 'object' }
    },
    form: {
      description: 'Form configuration with HubSpot settings',
      control: { type: 'object' }
    },
    disableVisibilityToggle: {
      description: 'Whether to disable modal visibility toggle',
      control: { type: 'boolean' }
    }
  }
}
