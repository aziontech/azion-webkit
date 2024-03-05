<template>
  <FormBlock :title="t.title" :description="t.description">
    <template #content>
      <form id="contact-us" class="w-full">
        <div class="flex flex-col gap-8">
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="name">{{ t.name }}</label>
            <InputText id="name" v-model="name" :placeholder="t.namePlaceholder" />
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="email">{{ t.email }}</label>
            <InputText v-model="email" id="email" class="w-full"
              :placeholder="t.emailPlaceholder"/>
          </div>
          <div class="flex flex-column gap-2 max-w-xs">
            <label class="text-sm" for="segment">{{ t.segment }}</label>
            <Dropdown
              id="segment" v-model="segment" :options="t.segmentData" optionLabel="label"
              :placeholder="t.segmentPlaceholder"/>
          </div>
          <div class="flex flex-column gap-2">
            <label class="text-sm" for="message">{{ t.message }}</label>
            <Textarea name="message" v-model="message" rows="5" cols="30" />
          </div>
        </div>
      </form>
      <div class="mt-2" v-if="responseStatus !== 'default'">
        <InlineMessage v-if="responseStatus === 'success'" severity="success" class="flex justify-start">
          {{ responseMessages.success }}
        </InlineMessage>
        <InlineMessage v-if="responseStatus === 'error'" severity="error" class="flex justify-start">
          {{ responseMessages.error }}
        </InlineMessage>
      </div>
    </template>
    <template #actions>
      <div class="w-full flex flex-col gap-8">
        <div class="flex flex-col md:flex-row gap-6 justify-between w-full">
          <div class="flex gap-2 items-center">
            <Checkbox v-model="termsAcceptance" id="terms" :binary="true" />
            <label for="terms" class="text-sm"> {{ t.terms }}</label>
          </div>
          <Button class="justify-center lg:justify-start" size="small" @click="onSubmit()"> {{ t.buttonText }} </Button>
        </div>
        <p class="text-color-secondary text-sm"> {{ t.azionPrivacy }} </p>
      </div>
    </template>
  </FormBlock>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from 'primevue/textarea';
import Dropdown from "primevue/dropdown";
import Checkbox from 'primevue/checkbox';
import InlineMessage from 'primevue/inlinemessage'
import FormBlock from "../form-block/index.vue"
import { hbspPostHandler } from "../../services/hubspot-service"
import { ref } from 'vue'

const props = defineProps({
  t: {
    type: Object,
    required: true
  },
  hubspot: {
    formId: String,
    companyId: String,
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
      required: false,
      default: 'Thanks for subscribing to Azion newsletter'
    },
    error: {
      type: String,
      required: false,
      default: 'Error while subscribing to Azion newsletter, try again later'
    }
  }
})

const { hubspot, t, requester, requesterName } = props

const responseStatus = ref('default');
const segment = ref("");
const name = ref("")
const email = ref("")
const message = ref("")
const termsAcceptance = ref(false)


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
  const postURL = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.companyId}/${hubspot.formId}`

  const response = await hbspPostHandler(postURL, requestBody)

  if (response.status !== 200) {
    responseStatus.value = 'error'

    return
  }

  responseStatus.value = 'success'
}

</script>
