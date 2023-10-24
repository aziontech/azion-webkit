<template>
  <section class="newsletter-signup shadow-lg p-7 rounded">
    <h5 class="max-w-xl mt-2 mb-0">
      Become an expert in Edge Computing
    </h5>
    <form id="FormNewsletterWide" class="mt-4">
      <div class="mt-4">
        <InputText class="w-full" placeholder="Your e-mail" />
        <Button class='mt-4 w-full' type="submit">
          subscribe our newsletter
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

  // TODO
  // implement props to receive I18N
</script>
