<template>
  <kbd>
    <Button outlined @click="emitClicked">
      <small>
        {{ keyname }}
      </small>
    </Button>
  </kbd>
</template>

<script setup>
  import Button from 'primevue/button'

  const props = defineProps({
    keyname: String
  })

  const emit = defineEmits(['clicked'])
  const { keyname } = props

  function emitClicked(event) {
    emit('clicked', event)
  }
</script>
