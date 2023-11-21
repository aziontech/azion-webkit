<template>
  <section class="container mx-auto">
    <div class="lg:flex justify-between p-4 lg:p-8 rounded surface-section border border-solid surface-border">
      <div class="lg:w-2/4 flex items-center">
        <h3 class="text-2xl max-w-xl">
          {{ props.title }}
        </h3>
      </div>
      <div class="lg:w-2/4 pt-2 lg:pt-0">
        <form :id="formIdElement" :name="formIdElement" class="flex items-center w-full" @submit.prevent="onSubmit">
          <InputGroup class="w-full">
            <InputGroupAddon>
              <i class="pi pi-envelope" />
            </InputGroupAddon>
            <InputText v-bind="email" type="e-mail" class="w-1/2 lg:w-fit" :placeholder="props.placeholderInput"
              :class="{ 'p-invalid': errors.email }" />
            <Button type="submit" :label="props.buttonText" :disabled="errors.email || !email.value" />
          </InputGroup>
        </form>
        <div v-if="isError || isSuccess" class="mt-2">
          <InlineMessage v-if="isSuccess" severity="success" class="flex justify-start">
            {{ successMessage }}
          </InlineMessage>
          <InlineMessage v-else severity="error" class="flex justify-start">Error message</InlineMessage>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon'
import Button from 'primevue/button';
import stringConcatRamdomNumber from '../../../helpers/stringConcatRamdomNumber';
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { submit } from '../../../services/newsletter/newsletterSubmitHandler'
import { ref } from 'vue';
import InlineMessage from 'primevue/inlinemessage'

const formIdElement = stringConcatRamdomNumber('FormNewsletterSingleLine');
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
    default: 'Your e-mail'
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
  successMessage: {
    type: String,
    required: false,
    default: 'Thanks for subscribing to Azion newsletter'
  }
});

const { formData } = props

// interface formData {
//   fetchLink: String,
//   acceptanceTermText: String,
//   uri: String,
//   pageName: String,
// }

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
  const response = await submit(formData, email.value)
  isError.value = false
  isSuccess.value = false

  if (response.status !== 200) {
    isError.value = true

    return
  }

  isSuccess.value = true
}
</script>
