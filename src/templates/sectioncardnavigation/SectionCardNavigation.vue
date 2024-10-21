<template>
    <div class="flex flex-col gap-14 px-container w-full">
    <hgroup>
      <h1 class="text-4xl font-medium pb-5">
        {{ title }}
      </h1>
      <p class="text-color-secondary">{{ description }}</p>
    </hgroup>
    <div class="transition-all surface-ground grid m-0 p-0 justify-between gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
      <CardBase v-for="({ title, description, links}) in cards">
        <template #content>
          <CardTitle> {{ title }} </CardTitle>
          <CardDescription> {{ description }}</CardDescription>
          <div class="flex flex-col">
            <LinkButton v-for="({ link, label }) in links" class="w-fit p-button-link hover:underline text-left"
              :label="label" :link="link" style="padding: 4px 0 !important;" />
          </div>
        </template>
      </CardBase>
    </div>
  </div>
</template>

<script setup>
import CardBase from '../cardbase'
import CardTitle from '../cardtitle'
import CardDescription from '../carddescription'
import LinkButton from '../linkbutton'

defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    cards: {
      type: Array,
      required: true
    }
  })
</script>
