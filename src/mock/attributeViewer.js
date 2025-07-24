export const attributeViewerMock = {
  attributes: [
    {
      name: 'capture',
      type: 'Object',
      description: 'Configuration object for capturing behavior rules.',
      children: [
        {
          name: 'captured',
          type: 'Array of strings',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          children: [
            {
              name: 'item.test.teste.teste',
              type: 'String',
              description: 'Individual captured item identifier.',
              children: []
            }
          ]
        },
        {
          name: 'enabled',
          type: 'Boolean',
          description: 'Determines if capture functionality is active.',
          children: []
        },
        {
          name: 'options',
          type: 'Object',
          description: 'Additional configuration options for capture behavior.',
          children: [
            {
              name: 'timeout',
              type: 'Number',
              description: 'Timeout value in milliseconds for capture operations.',
              children: []
            },
            {
              name: 'retries',
              type: 'Number',
              description: 'Number of retry attempts for failed captures.',
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'behavior',
      type: 'Object',
      description: 'Set the behaviors the rule should perform if the conditions defined in the criteria are met.',
      children: [
        {
          name: 'type',
          type: 'String',
          description: 'Type of behavior to be executed.',
          children: []
        },
        {
          name: 'parameters',
          type: 'Object',
          description: 'Parameters specific to the behavior type.',
          children: [
            {
              name: 'value',
              type: 'String',
              description: 'The value to be applied by the behavior.',
              children: []
            },
            {
              name: 'conditions',
              type: 'Array',
              description: 'Conditional logic for behavior execution.',
              children: [
                {
                  name: 'condition',
                  type: 'Object',
                  description: 'Individual condition specification.',
                  children: [
                    {
                      name: 'operator',
                      type: 'String',
                      description: 'Comparison operator for the condition.',
                      children: []
                    },
                    {
                      name: 'value',
                      type: 'String',
                      description: 'Value to compare against.',
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
  ]
}
