<template>
  <kbd>
    <Button outlined @click="handle">
      <small>
        {{ keyname }}
      </small>
    </Button>
  </kbd>
</template>

<script setup>
  import { defineEmits } from 'vue'
  import Button from 'primevue/button'

  const props = defineProps({
    keyname: String
  })

  const emit = defineEmits(['clicked'])
  const { keyname } = props

  function handle(event) {
    emit('clicked', event)
  }
</script>
