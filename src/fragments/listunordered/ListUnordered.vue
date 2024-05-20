<template>
  <ul :class="[
    {'flex flex-col gap-10' : direction === 'vertical'},
    {'grid grid-cols-3 gap-20' : direction === 'horizontal'}
  ]">
    <template v-for="({ icon, title, description }, index) in data" v-bind:key="index">
      <li class="flex flex-col gap-3 justify-center">
        <template v-if="title || icon">
          <div class="flex" :class="[
            {'flex-col gap-3' : direction === 'horizontal'},
            {'flex-row gap-2' : direction === 'vertical'}
          ]">
            <template v-if="icon">
              <div class="bg-[--surface-200] rounded h-6 w-6 flex justify-center items-center">
                <i class="text-xs" :class="icon"/>
              </div>
            </template>
            <template v-if="title">
              <p class="font-medium text-base"> {{ title }} </p>
            </template>
          </div>
        </template>
        <template v-if="description">
          <p class="text-color-secondary text-base"> {{ description }} </p>
        </template>
      </li>
    </template>
  </ul>
</template>

<script setup>

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  direction: {
    type: String,
    required: false,
    default: 'vertical'
  }
})
</script>
