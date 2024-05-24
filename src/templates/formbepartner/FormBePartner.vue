<template>
  <FormBlock :title="t.title">
    <template #content>
      <form id="contact-us" class="w-full hs-form">
        <div class="flex flex-col gap-8">
          <div class="flex gap-8 w-ful flex flex-col md:flex-row">
            <div class="flex flex-column gap-2  max-w-xl md:w-1/2">
              <label class="text-sm" for="firstName">{{ t.firstName }}</label>
              <InputText id="firstName" v-model="firstName" :placeholder="t.firstNamePlaceholder" />
            </div>
            <div class="flex flex-column gap-2 max-w-xl md:w-1/2">
              <label class="text-sm" for="lastName">{{ t.lastName }}</label>
              <InputText id="lastName" v-model="lastName" :placeholder="t.lastNamePlaceholder" />
            </div>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="email">{{ t.email }}</label>
            <InputText v-model="email" id="email" class="w-full" :placeholder="t.emailPlaceholder" />
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="address">{{ t.address }}</label>
            <InputText id="address" v-model="address" :placeholder="t.addressPlaceholder" />
          </div>
          <div class="flex gap-8 w-full flex flex-col md:flex-row">
            <div class="flex flex-column gap-2 md:w-1/2">
              <label class="text-sm" for="country">{{ t.country }}</label>
              <Dropdown id="country" v-model="country" :options="t.countryData" optionLabel="label"
                :placeholder="t.countryPlaceholder" />
            </div>
            <div class="flex flex-column gap-2 md:w-1/2">
              <label class="text-sm" for="city">{{ t.city }}</label>
              <InputText id="city" v-model="city" :placeholder="t.cityPlaceholder" />
            </div>
          </div>
          <div class="flex flex-column gap-2 max-w-xs">
            <label class="text-sm" for="role">{{ t.role }}</label>
            <Dropdown id="role" v-model="role" :options="t.roleData" optionLabel="label" :placeholder="t.role" />
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
            <Checkbox v-model="termsAcceptance" aria-labelledby="checkbox" id="terms" :binary="true" />
            <span id="checkbox" class="text-sm"> {{ t.terms }}</span>
          </div>
          <Button class="justify-center lg:justify-start" size="small" @click="onSubmit()"> {{ t.buttonText }} </Button>
        </div>
        <p class="text-color-secondary text-sm">
          {{ t.azionPrivacy.description}}
          <a class="text-[--text-color-link] font-medium  hover:underline" target="_blank" :href="t.azionPrivacy.link"> {{ t.azionPrivacy.buttonText}}</a>
        </p>
      </div>
    </template>
  </FormBlock>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Checkbox from 'primevue/checkbox';
import InlineMessage from 'primevue/inlinemessage';
import FormBlock from "../formblock/FormBlock.vue";
import { hbspPostHandler } from "../src/services/hubspot-service";
import { ref } from 'vue';

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
const role = ref("");
const address = ref("")
const email = ref("")
const country = ref("")
const city = ref("")
const firstName = ref("")
const lastName = ref("")
const termsAcceptance = ref(false)


const onSubmit = async () => {
  const requestBody = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'company',
        value: email.value
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email.value
      },
      {
        objectTypeId: '0-1',
        name: 'company',
        value: email.value
      },
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: firstName.value
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: lastName.value
      },
      {
        objectTypeId: '0-1',
        name: 'address',
        value: address.value
      },
      {
        objectTypeId: '0-1',
        name: 'role',
        value: role.value.value
      },
      {
        objectTypeId: '0-1',
        name: 'country_contato',
        value: country.value.value
      },
      {
        objectTypeId: '0-1',
        name: 'city',
        value: city.value
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: '#'
      },
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
