<template>
  <section class="newsletter-signup border border-solid surface-section surface-border p-7 rounded max-w-md">
    <p class="max-w-xl mt-0 mb-0 lg:text-xl font-medium">
      {{ title }}
    </p>
    <form @submit.prevent="onSubmit" name="newslleterCard" id="newslleterCard" class="mt-4">
      <div class="mt-4">
        <span class="p-input-icon-left w-full">
          <i class="pi pi-envelope" />
          <InputText v-bind="email" :placeholder="placeholderInput" class="w-full"
            :class="{ 'p-invalid': errors.email }" />

        </span>
        <Button
          class='mt-4 w-full'
          type="submit"
          :label="buttonText"
          size="small"
          :disabled="errors.email || !email.value" />
      </div>
    </form>
    <div class="mt-2">
      <InlineMessage v-if="isSuccess" severity="success" class="flex justify-start">
        {{ responseMessages.successMessage }}
      </InlineMessage>
      <InlineMessage v-if="isError" severity="error" class="flex justify-start">
        {{ responseMessages.errorMessage }}
      </InlineMessage>
    </div>
  </section>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { newsletterSubrscribeHandler } from '../src/services/newsletter/newsletterSubmitHandler';
import InlineMessage from 'primevue/inlinemessage';
import { ref } from 'vue';


const isSuccess = ref(false);
const isError = ref(false);

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
  formData: {
    type: Object,
    required: true
  },
  responseMessages: {
    successMessage: {
      type: String,
      required: false,
      default: 'Thanks for subscribing to Azion newsletter'
    },
    errorMessage: {
      type: String,
      required: false,
      default: 'Error while subscribing to Azion newsletter, try again later'
    }
  }
});

// interface formData {
//   fetchLink: String,
//   acceptanceTermText: String,
//   uri: String,
//   pageName: String,
// }

const { title, placeholderInput, buttonText, formData } = props

const emailValidateRegex = /^\S+@\S+\.\S+$/
const emailValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .matches(emailValidateRegex, 'Email not associated with any account.')
})

const { defineInputBinds, errors } = useForm({
  validationSchema: emailValidationSchema,
  initialValues: {
    email: ''
  }
})

const email = defineInputBinds('email', { validateOnInput: true })

const onSubmit = async () => {
  const response = await newsletterSubrscribeHandler(formData, email.value)
  isError.value = false
  isSuccess.value = false

  if (response.status !== 200) {
    isError.value = true

    return
  }

  isSuccess.value = true
}
</script>
