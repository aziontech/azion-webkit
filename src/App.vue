<template>
  <Container>
    <GridHighlight :cards="MOCK.items" />
  </Container>
    <div class="grid grid-cards grid-flow-row-dense grid-cols-5 gap-4">
      <template
        v-for="(item, index) in cards"
        :key="index"
      >
        <div
          v-if="item.description"
          class="row-span-2"
        >
          <CardBaseClickable
            :link="item.link"
            disableAction
          >
            <template v-slot:header>
              <div>
                <img
                  :src="item.image"
                  alt="Image"
                />
              </div>
            </template>
            <template v-slot:content>
              <div>
                <p class="text-color-secondary">{{ item.description }}</p>
              </div>
            </template>
          </CardBaseClickable>
        </div>

        <div
          v-else
          class="flex flex-col gap-4"
        >
          <CardBaseClickable
            :link="item.link"
            disableAction
          >
            <template v-slot:content>
              <div>
                <img
                  :src="item.image"
                  alt="Image"
                />
              </div>
            </template>
          </CardBaseClickable>
          <CardBaseClickable
            :link="cards[index + 1].link"
            v-if="cards[index + 1]"
            disableAction
          >
            <template v-slot:content>
              <div>
                <img
                  :src="cards[index + 1].image"
                  alt="Image"
                />
              </div>
            </template>
          </CardBaseClickable>
        </div>
      </template>
    </div>
  </div> -->
</template>

<script setup>
  import Container from './templates/container'
  import GridHighlight from './templates/gridhighlight'

  const MOCK = {
    items: [
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: 'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales.',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
      {
        description: '',
        link: 'https://google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
      },
    ]
  }
</script>
