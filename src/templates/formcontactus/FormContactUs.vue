<template>
  <FormBlock
    :title="t.title"
    :description="t.description"
  >
    <template #content>
      <form
        id="contact-us"
        class="w-full hs-form"
      >
        <div class="flex flex-col gap-8">
          <div class="flex flex-column gap-2">
            <label
              class="text-sm"
              for="name"
              >{{ t.name }}</label
            >
            <InputText
              id="name"
              v-model="name"
              :placeholder="t.namePlaceholder"
            />
          </div>
          <template v-if="t.lastName">
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="lastName"
                >{{ t.lastName }}</label
              >
              <InputText
                id="lastName"
                v-model="lastName"
                :placeholder="t.lastNamePlaceholder"
              />
            </div>
          </template>
          <template v-if="t.phone">
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="phone"
                >{{ t.phone }}</label
              >
              <InputText
                id="phone"
                v-model="phone"
                :placeholder="t.phonePlaceholder"
                @input="formatPhoneNumber"
                @keydown="preventLetters"
              />
            </div>
          </template>
          <div class="flex flex-column gap-2">
            <label
              class="text-sm"
              for="email"
              >{{ t.email }}</label
            >
            <InputText
              v-model="email"
              id="email"
              class="w-full"
              :placeholder="t.emailPlaceholder"
            />
          </div>
          <div class="flex flex-column gap-2">
            <label
              class="text-sm"
              for="segment"
              >{{ t.segment }}</label
            >
            <Dropdown
              id="segment"
              v-model="segment"
              :options="t.segmentData"
              optionLabel="label"
              :placeholder="t.segmentPlaceholder"
            />
          </div>
          <div class="flex flex-column gap-2">
            <label
              class="text-sm"
              for="message"
              >{{ t.message }}</label
            >
            <Textarea
              id="message"
              v-model="message"
              rows="5"
              cols="30"
            />
          </div>
        </div>
      </form>
      <div
        class="mt-2"
        v-if="responseStatus !== 'default'"
      >
        <InlineMessage
          v-if="responseStatus === 'success'"
          severity="success"
          class="flex justify-start"
        >
          {{ responseMessages.success }}
        </InlineMessage>
        <InlineMessage
          v-if="responseStatus === 'error'"
          severity="error"
          class="flex justify-start"
        >
          {{ responseMessages.error }}
        </InlineMessage>
      </div>
    </template>
    <template #actions>
      <div class="w-full flex flex-col gap-8">
        <Button
          class="justify-center"
          size="small"
          @click="onSubmit()"
          :label="t.buttonText"
        />
      </div>
    </template>
  </FormBlock>
</template>

<script setup>
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'
  import Textarea from 'primevue/textarea'
  import Dropdown from 'primevue/dropdown'
  import InlineMessage from 'primevue/inlinemessage'
  import FormBlock from '../formblock/FormBlock.vue'
  import { hbspPostHandler } from '../src/services/hubspot-service'
  import { ref } from 'vue'

  const props = defineProps({
    t: {
      type: Object,
      required: true
    },
    hubspot: {
      formId: String,
      companyId: String
    },
    requester: {
      type: String,
      required: true
    },
    requesterName: {
      type: String,
      required: true
    },
    responseMessages: {
      success: {
        type: String,
        default: 'Thanks for subscribing to Azion newsletter'
      },
      error: {
        type: String,
        default: 'Error while subscribing to Azion newsletter, try again later'
      }
    }
  })

  const { hubspot, t, requester, requesterName } = props

  const responseStatus = ref('default')
  const segment = ref('')
  const name = ref('')
  const lastName = ref('')
  const phone = ref('')
  const email = ref('')
  const message = ref('')
  const termsAcceptance = ref(true)

  const preventLetters = (event) => {
    // Allow: backspace, delete, tab, escape, enter, home, end, left, right, up, down
    const allowedKeys = [8, 9, 27, 13, 46, 35, 36, 37, 39, 38, 40]

    if (
      allowedKeys.includes(event.keyCode) ||
      // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (event.ctrlKey === true && [65, 67, 86, 88].includes(event.keyCode))
    ) {
      return
    }

    // Ensure that it is a number and stop the keypress
    if (
      (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault()
    }
  }

  const formatPhoneNumber = (event) => {
    let value = event.target.value.replace(/\D/g, '')
    if (value.length >= 2) {
      value = `+${value.substring(0, 2)} (${value.substring(2, 4)}) ${value.substring(4, 8)}-${value.substring(8, 12)}`
    }
    phone.value = value
  }

  const onSubmit = async () => {
    const requestBody = {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: email.value
        },
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: name.value
        },
        {
          objectTypeId: '0-1',
          name: 'message',
          value: message.value
        },
        {
          objectTypeId: '0-1',
          name: 'segmento_de_neg_cio',
          value: segment.value.value
        }
      ],
      context: {
        pageUri: requester,
        pageName: requesterName
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: termsAcceptance.value,
          text: `${t.terms}`
        }
      }
    }

    if (lastName.value) {
      requestBody.fields.push({
        objectTypeId: '0-1',
        name: 'lastname',
        value: lastName.value
      })
    }

    if (phone.value) {
      requestBody.fields.push({
        objectTypeId: '0-1',
        name: 'phone',
        value: phone.value
      })
    }
    const postURL = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.companyId}/${hubspot.formId}`

    const response = await hbspPostHandler(postURL, requestBody)

    if (response.status !== 200) {
      responseStatus.value = 'error'

      return
    }

    responseStatus.value = 'success'
  }
</script>
