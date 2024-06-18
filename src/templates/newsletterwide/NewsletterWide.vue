<template>
  <section class="px-container w-full">
    <CardBase>
      <template #content-raw>
        <div class="flex flex-col lg:flex-row gap-4 md:gap-8 p-6 md:p-10">
          <div class="flex flex-col gap-3 max-w-lg w-full">
            <Overline :label="overline" />
            <CardTitle> {{ title }}</CardTitle>
            <CardDescription> {{ description }}</CardDescription>
          </div>
          <div class="w-full flex flex-col justify-center gap-4">
            <form
              @submit.prevent="onSubmit"
              id="newslleterWide"
              name="newsletterWide"
              class="flex gap-4"
            >
              <InputGroup>
                <InputGroupAddon>
                  <i class="pi pi-envelope" />
                </InputGroupAddon>
                <InputText
                  v-bind="email"
                  type="e-mail"
                  class="w-1/2 lg:w-fit"
                  :placeholder="props.placeholderEmail"
                  :class="{ 'p-invalid': errors.email }"
                />
              </InputGroup>

              <Button
                  type="submit"
                  :label="buttonText"
                  size="small"
                  class="min-w-fit"
                  :disabled="errors.email || !email.value"
                />
            </form>
            <div v-show="isSuccess || isError">
              <InlineMessage
                v-if="isSuccess"
                severity="success"
                class="flex justify-start"
              >
                {{ responseMessages.successMessage }}
              </InlineMessage>
              <InlineMessage
                v-if="isError"
                severity="error"
                class="flex justify-start"
              >
                {{ responseMessages.errorMessage }}
              </InlineMessage>
            </div>
          </div>
        </div>
      </template>
    </CardBase>
  </section>
</template>

<script setup>
  import InputText from 'primevue/inputtext'
  import InputGroup from 'primevue/inputgroup'
  import InputGroupAddon from 'primevue/inputgroupaddon'
  import Button from 'primevue/button'
  import InlineMessage from 'primevue/inlinemessage'
  import CardBase from '../cardbase'
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import * as yup from 'yup'
  import { useForm } from 'vee-validate'
  import { newsletterSubrscribeHandler } from '../src/services/newsletter/newsletterSubmitHandler'
  import { ref } from 'vue'

  const isSuccess = ref(false)
  const isError = ref(false)

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    overline: {
      type: String,
      required: true
    },
    description: {
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
  })

  const { formData } = props

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

    console.log(isError.value, isSuccess.value)
  }
</script>
