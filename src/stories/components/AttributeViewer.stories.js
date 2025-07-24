import AttributeViewer from '../../templates/attributeviewer'
import { attributeViewerMock } from '../../mock/attributeviewer'

export default {
  title: 'Components/AttributeViewer',
  component: AttributeViewer,
  tags: ['autodocs'],
  argTypes: {
    attributes: {
      description: 'Array of attribute objects with nested structure',
      control: { type: 'object' }
    },
    toggleText: {
      description: 'Text to display in the accordion toggle header for child attributes',
      control: { type: 'text' },
      defaultValue: 'Hide child attributes'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    attributes: attributeViewerMock.attributes
  }
}

export const SimpleAttributes = {
  args: {
    attributes: [
      {
        name: 'username',
        type: 'String',
        description: 'The username for authentication.',
        children: []
      },
      {
        name: 'password',
        type: 'String',
        description: 'The password for authentication.',
        children: []
      },
      {
        name: 'settings',
        type: 'Object',
        description: 'User configuration settings.',
        children: [
          {
            name: 'theme',
            type: 'String',
            description: 'UI theme preference (light/dark).',
            children: []
          },
          {
            name: 'notifications',
            type: 'Boolean',
            description: 'Enable or disable notifications.',
            children: []
          }
        ]
      }
    ]
  }
}

export const DeepNesting = {
  args: {
    attributes: [
      {
        name: 'api',
        type: 'Object',
        description: 'API configuration object.',
        children: [
          {
            name: 'endpoints',
            type: 'Object',
            description: 'Available API endpoints.',
            children: [
              {
                name: 'users',
                type: 'Object',
                description: 'User management endpoints.',
                children: [
                  {
                    name: 'create',
                    type: 'String',
                    description: 'Endpoint for creating new users.',
                    children: []
                  },
                  {
                    name: 'update',
                    type: 'String',
                    description: 'Endpoint for updating existing users.',
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

export const CustomToggleText = {
  args: {
    attributes: attributeViewerMock.attributes,
    toggleText: 'Ocultar atributos filhos'
  }
}
