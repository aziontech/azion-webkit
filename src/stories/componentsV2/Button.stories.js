import Button from '../../components/Button/Button.vue'

export default {
  title: 'Components/Rebranding/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The text label displayed on the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Controls the button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'link', 'linkExternal', 'linkSecondary'],
      description: 'Defines the button style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'secondary' }
      }
    },
    theme: {
      control: { type: 'select' },
      options: ['dark', 'light'],
      description: 'Theme variant for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dark' }
      }
    },
    href: {
      control: { type: 'text' },
      description: 'Optional URL for link buttons',
      table: {
        type: { summary: 'string' }
      }
    },
    icon: {
      control: { type: 'text' },
      description: 'PrimeVue icon class (e.g., "pi pi-check")',
      table: {
        type: { summary: 'string' }
      }
    },
    customClass: {
      control: { type: 'text' },
      description: 'Custom CSS classes for additional styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'px-3 py-3' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Button Component

A versatile button component built on PrimeVue with multiple style variants and themes.

## Features
- **6 Button Types**: Primary, Secondary, Tertiary, Link, Link External, Link Secondary
- **2 Sizes**: Small and Large
- **2 Themes**: Dark and Light mode support
- **Icon Support**: Integrates with PrimeVue icons
- **Link Functionality**: Can function as a button or anchor tag
- **Hover Effects**: Smooth transitions and interactive states
- **Accessibility**: Built on PrimeVue's accessible button component

## Button Types

### Primary
Solid button with dark background and orange hover effect. Best for primary CTAs.

### Secondary
Outlined button with border. Good for secondary actions.

### Tertiary
Subtle button with orange background tint. For tertiary actions.

### Link
Text-only button with violet color and underline animation. For inline links.

### Link External
Similar to link but with external link icon. For external URLs.

### Link Secondary
Text-only button with neutral colors. For secondary text links.

## Usage

\`\`\`vue
<Button 
  type="primary" 
  label="Get Started" 
  icon="pi pi-check" 
  theme="dark" 
/>
\`\`\`
        `
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <div class="p-8">
      <Button v-bind="args" />
    </div>
  `
})

// Primary Button Stories
export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'large',
  theme: 'dark'
}
PrimaryLarge.parameters = {
  docs: {
    description: {
      story: 'Large primary button with dark theme. Best for main CTAs.'
    }
  }
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  type: 'primary',
  label: 'Primary Button',
  size: 'small',
  theme: 'dark'
}
PrimarySmall.parameters = {
  docs: {
    description: {
      story: 'Small primary button. Useful in compact layouts.'
    }
  }
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  type: 'primary',
  label: 'Save Changes',
  icon: 'pi pi-check',
  size: 'large',
  theme: 'dark'
}
PrimaryWithIcon.parameters = {
  docs: {
    description: {
      story: 'Primary button with icon. Icons appear before the label.'
    }
  }
}

// Secondary Button Stories
export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = {
  type: 'secondary',
  label: 'Secondary Button',
  size: 'large',
  theme: 'dark'
}
SecondaryLarge.parameters = {
  docs: {
    description: {
      story: 'Large secondary button with border. Good for secondary actions.'
    }
  }
}

export const SecondarySmall = Template.bind({})
SecondarySmall.args = {
  type: 'secondary',
  label: 'Cancel',
  size: 'small',
  theme: 'dark'
}
SecondarySmall.parameters = {
  docs: {
    description: {
      story: 'Small secondary button. Perfect for cancel or dismiss actions.'
    }
  }
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  type: 'secondary',
  label: 'Settings',
  icon: 'pi pi-cog',
  size: 'large',
  theme: 'dark'
}
SecondaryWithIcon.parameters = {
  docs: {
    description: {
      story: 'Secondary button with settings icon.'
    }
  }
}

// Tertiary Button Stories
export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  label: 'Tertiary Action',
  size: 'large',
  theme: 'dark'
}
Tertiary.parameters = {
  docs: {
    description: {
      story: 'Tertiary button with subtle orange background. For less prominent actions.'
    }
  }
}

export const TertiaryWithIcon = Template.bind({})
TertiaryWithIcon.args = {
  type: 'tertiary',
  label: 'View Details',
  icon: 'pi pi-eye',
  size: 'large',
  theme: 'dark'
}
TertiaryWithIcon.parameters = {
  docs: {
    description: {
      story: 'Tertiary button with icon.'
    }
  }
}

// Link Button Stories
export const Link = Template.bind({})
Link.args = {
  type: 'link',
  label: 'Learn more',
  href: 'https://azion.com',
  size: 'large',
  theme: 'dark'
}
Link.parameters = {
  docs: {
    description: {
      story: 'Text link with violet color and animated underline. Renders as anchor tag.'
    }
  }
}

export const LinkSecondary = Template.bind({})
LinkSecondary.args = {
  type: 'linkSecondary',
  label: 'View documentation',
  href: 'https://azion.com/docs',
  size: 'large',
  theme: 'dark'
}
LinkSecondary.parameters = {
  docs: {
    description: {
      story: 'Secondary text link with neutral colors and animated underline.'
    }
  }
}

export const LinkExternal = Template.bind({})
LinkExternal.args = {
  type: 'linkExternal',
  label: 'Visit website',
  href: 'https://azion.com',
  size: 'large',
  theme: 'dark'
}
LinkExternal.parameters = {
  docs: {
    description: {
      story: 'External link with arrow icon indicating it opens in new context.'
    }
  }
}

// Theme Comparison
const ThemeTemplate = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <div class="flex gap-8">
      <div class="bg-black p-8 rounded">
        <h3 class="text-white mb-4 font-bold">Dark Theme</h3>
        <div class="flex flex-col gap-4">
          <Button v-bind="args" theme="dark" />
        </div>
      </div>
      <div class="bg-white p-8 rounded">
        <h3 class="text-black mb-4 font-bold">Light Theme</h3>
        <div class="flex flex-col gap-4">
          <Button v-bind="args" theme="light" />
        </div>
      </div>
    </div>
  `
})

export const ThemeComparison = ThemeTemplate.bind({})
ThemeComparison.args = {
  type: 'primary',
  label: 'Button',
  icon: 'pi pi-check',
  size: 'large'
}
ThemeComparison.parameters = {
  docs: {
    description: {
      story: 'Side-by-side comparison of dark and light themes.'
    }
  },
  backgrounds: { default: 'neutral' }
}

// All Button Types Showcase
const ShowcaseTemplate = () => ({
  components: { Button },
  template: `
    <div class="bg-black p-8">
      <div class="space-y-8">
        <div>
          <h3 class="text-white mb-4 font-bold text-lg">Button Types</h3>
          <div class="flex flex-wrap gap-4">
            <Button type="primary" label="Primary" theme="dark" />
            <Button type="secondary" label="Secondary" theme="dark" />
            <Button type="tertiary" label="Tertiary" theme="dark" />
          </div>
        </div>
        
        <div>
          <h3 class="text-white mb-4 font-bold text-lg">Link Buttons</h3>
          <div class="flex flex-wrap gap-6">
            <Button type="link" label="Link" href="#" theme="dark" />
            <Button type="linkSecondary" label="Link Secondary" href="#" theme="dark" />
            <Button type="linkExternal" label="Link External" href="#" theme="dark" />
          </div>
        </div>
        
        <div>
          <h3 class="text-white mb-4 font-bold text-lg">With Icons</h3>
          <div class="flex flex-wrap gap-4">
            <Button type="primary" label="Save" icon="pi pi-check" theme="dark" />
            <Button type="secondary" label="Settings" icon="pi pi-cog" theme="dark" />
            <Button type="primary" label="Download" icon="pi pi-download" theme="dark" />
          </div>
        </div>
        
        <div>
          <h3 class="text-white mb-4 font-bold text-lg">Sizes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Button type="primary" label="Large" size="large" theme="dark" />
            <Button type="primary" label="Small" size="small" theme="dark" />
          </div>
        </div>
      </div>
    </div>
  `
})

export const AllVariants = ShowcaseTemplate.bind({})
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Comprehensive showcase of all button variants, types, and sizes.'
    }
  }
}
