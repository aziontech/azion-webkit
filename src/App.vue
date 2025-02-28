<script setup>
  import Container from './templates/container'
  import Dropdown from 'primevue/dropdown'
  import Tag from 'primevue/tag'
  import CardGridListWithLoadMore from './templates/cardgridlistwithloadmore'

  const dataList = [
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    },
    {
      image: 'https://logospng.org/wp-content/uploads/renner.png',
      imgAlt: 'Azion logo',
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      tagList: ['Blog']
    }
  ]
</script>

<template>
  <Container>
    <div
      id="header"
      class="flex flex-col gap-6"
    >
      <div class="flex justify-between gap-2 w-full flex-col md:flex-row">
        <div class="w-1/3">
          <Dropdown
            class="w-full"
            id="country"
            :options="[]"
            optionLabel="label"
            placeholder="Industry"
          />
        </div>
        <div class="w-1/3">
          <Dropdown
            class="w-full"
            id="country"
            :options="[]"
            optionLabel="label"
            placeholder="Region"
          />
        </div>
        <div class="w-1/3">
          <Dropdown
            class="w-full"
            id="country"
            :options="[]"
            optionLabel="label"
            placeholder="Use Case"
          />
        </div>
      </div>

      <div class="flex gap-4">
        Filtered by:
        <div class="flex gap-2">
          <Tag
            rounded
            class="tag-close"
          >
            <template #default>
              <div class="flex gap-2 justify-center items-center px-1 text-[0.875rem]">
                <span>Financial Services</span>
                <i class="pi pi-times-circle cursor-pointer" />
              </div>
            </template>
          </Tag>
        </div>
      </div>
      <CardGridListWithLoadMore
        cardType="blog"
        :data="dataList"
        buttonText="buttonText"
      />

      <!-- <div class="grid grid-cols-4 gap-8">
        <CardBaseClickable
          v-for="(item, index) in 8"
          :key="index"
          :link="item.link"
        >
          <template #content>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </template>
        </CardBaseClickable>
      </div> -->
    </div>
  </Container>
</template>
