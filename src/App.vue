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
        description: 'Item 1',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'Item 2',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'Item 3',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'Item 4',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'Item 5',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'Item 6',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      }
    ]
  }
</script>
Sure! The translation of "feat: Substituir SectionImageRight por GridHighlight com mock de itens" into English is:

"feat: Replace SectionImageRight with GridHighlight using mock items"
