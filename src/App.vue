<template>
  <Container>
    <GridHighlight :cards="MOCK.items" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import GridHighlight from './templates/gridhighlight'

  const MOCK = {
    items: [
      {
        description: '',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description:
          'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales.',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description:
          'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales.',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description:
          'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales.',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description:
          'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales.',
        link: 'https://google.com',
        alt: 'Logo Google',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      }
    ]
  }
</script>
