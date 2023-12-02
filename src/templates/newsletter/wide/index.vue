<template>
  <section class="surface-section flex justify-center lg:py-28 py-8 px-3 md:px-8">
    <div class="container">
      <div class="lg:flex justify-between lg:gap-16">
        <div class="lg:w-2/4">
          <Overline :label="props.overline" v-if="props.overline" />
          <h3 class="md:text-6xl text-3xl font-normal text-color max-w-xl mt-2 mb-0">
            {{ props.title }}
          </h3>
        </div>
        <div class="lg:w-2/4 flex flex-col justify-center mt-8 lg:mt-0">
          <form @submit.prevent="onSubmit" :id="formIdElement" :name="formIdElement" class="lg:w-full">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-envelope" />
              </InputGroupAddon>
              <InputText v-bind="email" type="e-mail" class="w-1/2 lg:w-fit" :placeholder="props.placeholderEmail"
                :class="{ 'p-invalid': errors.email }" />
              <Button type="submit" :label="buttonText" size="small" :disabled="errors.email || !email.value" />
            </InputGroup>
          </form>
          <div class="mt-2">
            <InlineMessage v-if="isSuccess" severity="success" class="flex justify-start">{{ successMessage }}
            </InlineMessage>
            <InlineMessage v-if="isError" severity="error" class="flex justify-start"> Error message</InlineMessage>
          </div>
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
import Overline from '../../overline/index.vue'
import InlineMessage from 'primevue/inlinemessage'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { newsletterSubrscribeHandler } from '../../../services/newsletter/newsletterSubmitHandler'
import { ref } from 'vue';

const formIdElement = stringConcatRamdomNumber('FormNewsletterSingleLine');
const isSuccess = ref(false);
const isError = ref(false);

const props = defineProps({
  overline: {
    type: String,
    required: false,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  placeholderInput: {
    type: String,
    required: false,
    default: 'Your Full Name'
  },
  placeholderEmail: {
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
    email: '',
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
