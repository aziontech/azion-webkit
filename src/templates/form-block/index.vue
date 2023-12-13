<template>
  <div class="flex flex-column justify-center items-center">
  <div class="border surface-border rounded-md max-w-xl">
    <div class="p-8 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
        <h5 class="text-xl"> {{ title }} </h5>
        <p class="text-sm text-secondary-color"> {{ description }} </p>
      </div>
      <form>
        <slot name="fieldset" />
      </form>
    </div>
    <div class="py-4 px-8 border-t surface-border flex flex-row gap-3 justify-end">
      <Button :label="buttonText" @click="onSubmit" size="small" />
    </div>
  </div>
</div>

</template>

<script setup>
import Button from "primevue/button";

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  onSubmit: {
    type: Function,
    required: true
  },
  buttonText: {
    type: String,
    required: false,
    default: 'Submit'
  }
})

</script>
