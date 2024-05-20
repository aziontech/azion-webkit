<template>
  <section class="border-t border-solid surface-border surface-section flex justify-center py-12 px-3 md:px-8">
    <div>
      <div class="flex flex-col gap-8 items-center">
        <div class="max-w-md w-full text-center">
          <p class="text-2xl font-normal text-color max-w-xl mt-2 mb-0">
            {{ props.title }}
          </p>
        </div>
        <div class="w-full max-w-md flex flex-col justify-center gap-4">
          <form @submit.prevent="onSubmit" id="newslleterWide" name="newsletterWide">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-envelope" />
              </InputGroupAddon>
              <InputText v-bind="email" type="e-mail" class="w-1/2 lg:w-fit" :placeholder="props.placeholderEmail"
                :class="{ 'p-invalid': errors.email }" />
              <Button type="submit" :label="buttonText" size="small" :disabled="errors.email || !email.value" />
            </InputGroup>
          </form>
          <div>
            <InlineMessage v-if="isSuccess" severity="success" class="flex justify-start">
              {{ responseMessages.successMessage }}
            </InlineMessage>
            <InlineMessage v-if="isError" severity="error" class="flex justify-start">
              {{ responseMessages.errorMessage }}
            </InlineMessage>
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
import InlineMessage from 'primevue/inlinemessage'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { newsletterSubrscribeHandler } from '../../../services/newsletter/newsletterSubmitHandler'
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
