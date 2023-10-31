<template>
  <section class="newsletter-signup shadow-lg p-7 rounded max-w-md">
    <h5 class="max-w-xl mt-2 mb-0 lg:text-2xl">
      {{ title }}
    </h5>
    <form :id="formId" class="mt-4">
      <div class="mt-4">
        <span class="p-input-icon-left w-full">
          <i class="pi pi-envelope" />
          <InputText class="w-full" :placeholder="placeholderInput" />

        </span>
        <Button class='mt-4 w-full' type="submit" @click.prevent="onSubmit">
          {{ buttonText }}
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  placeholderInput: {
    type: String,
    required: false,
    default: 'Your Email'
  },
  buttonText: {
    type: String,
    required: false,
    default: 'submit'
  },
  onSubmit: {
    type: Function,
    required: false,
    default: () => { console.log('[NewsletterCard] onSubmit') }
  }
});

const { title, placeholderInput, buttonText, onSubmit} = props
</script>
