<template>
  <SectionForm2Column
    :id="id"
    :bottom-spacing="bottomSpacing"
    :type="type"
  >
    <template #form>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h2 class="display-3-mobile md:display-3 font-medium">
            {{ form.title }}
          </h2>
          <template v-if="form.descriptionRawMarkdown">
            <div
              class="text-sm text-neutral-400"
              v-html="parseMarkdown(form.descriptionRawMarkdown)"
            ></div>
          </template>
        </div>
        <form
          id="contact-us"
          class="w-full hs-form"
        >
          <div class="flex flex-col gap-8">
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="name"
              >
                {{ form.name }}
              </label>
              <InputText
                id="name"
                v-model="name as unknown as string"
                :placeholder="form.namePlaceholder"
              />
            </div>
            <template v-if="form.lastName">
              <div class="flex flex-column gap-2">
                <label
                  class="text-sm"
                  for="lastName"
                >
                  {{ form.lastName }}
                </label>
                <InputText
                  id="lastName"
                  v-model="lastName as unknown as string"
                  :placeholder="form.lastNamePlaceholder"
                />
              </div>
            </template>
            <template v-if="form.phone">
              <div class="flex flex-column gap-2">
                <label
                  class="text-sm"
                  for="phone"
                >
                  {{ form.phone }}
                </label>
                <div class="flex gap-2">
                  <Dropdown
                    v-model="selectedPhoneCountry"
                    :options="phoneCountries"
                    optionLabel="name"
                    optionValue="phonecode"
                    placeholder="DDI"
                    class="w-48"
                    filter
                    appendTo="body"
                    :disabled="phoneCountries.length === 0"
                  >
                    <template #option="{ option }">
                      <div class="flex align-items-center gap-2">
                        <span>{{ option.flag }}</span>
                        <span>{{ option.name }}</span>
                        <span class="text-sm text-gray-500">+{{ option.phonecode }}</span>
                      </div>
                    </template>
                    <template #value="{ value }">
                      <div
                        v-if="value"
                        class="flex align-items-center gap-1"
                      >
                        <span>{{ getPhoneCountryFlag(value) }}</span>
                        <span>+{{ value }}</span>
                      </div>
                    </template>
                  </Dropdown>
                  <InputText
                    id="phone"
                    type="tel"
                    class="flex-1"
                    v-model="phone as unknown as string"
                    :placeholder="form.phonePlaceholder"
                    @input="sanitizePhoneNumber"
                    @keydown="preventLetters"
                  />
                </div>
              </div>
            </template>
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="email"
              >
                {{ form.email }}
              </label>
              <InputText
                v-model="email as unknown as string"
                id="email"
                class="w-full"
                :placeholder="form.emailPlaceholder"
              />
            </div>
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="segment"
              >
                {{ form.segment }}
              </label>
              <Dropdown
                id="segment"
                v-model="segment as unknown as string"
                :options="form.segmentData"
                optionLabel="label"
                :placeholder="form.segmentPlaceholder"
              />
            </div>
            <div class="flex flex-column gap-2">
              <label
                class="text-sm"
                for="message"
              >
                {{ form.message }}
              </label>
              <Textarea
                id="message"
                v-model="message as unknown as string"
                rows="5"
                cols="30"
              />
            </div>
          </div>
        </form>
        <div
          v-if="(responseStatus as unknown as string) !== 'default'"
          class="mt-2"
        >
          <InlineMessage
            v-if="(responseStatus as unknown as string) === 'success'"
            severity="success"
            class="flex justify-start"
          >
            {{ responseMessages.success }}
          </InlineMessage>
          <InlineMessage
            v-if="(responseStatus as unknown as string) === 'error'"
            severity="error"
            class="flex justify-start"
          >
            {{ responseMessages.error }}
          </InlineMessage>
        </div>
        <div class="w-full flex items-end flex-col gap-8">
          <Button
            type="primary"
            customClass=" w-fit"
            @click="onSubmit()"
            :label="form.buttonText"
          />
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-10 p-6 md:p-12">
        <Card
          v-for="card in cards"
          variant="outline"
          :key="card.title"
          :title="card.title"
          :descriptionRawMarkdown="card.descriptionRawMarkdown"
        />
        <div class="flex flex-col gap-10">
          <Overline>{{ locations.overline }}</Overline>
          <template v-if="Array.isArray(locations.offices)">
            <div
              v-for="(office, index) in locations.offices"
              :key="index"
              class="flex flex-col gap-3"
            >
              <p class="text-heading-1">{{ office.city }}</p>
              <p class="text-body-1 text-color-secondary">{{ office.address }}</p>
              <div>
                <Button
                  size="small"
                  :label="office.button.label"
                  :href="office.button.link"
                  type="linkSecondary"
                  icon="pi pi-map-marker"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </SectionForm2Column>
</template>

<script setup lang="ts">
  import SectionForm2Column from '../SectionForm2Column/SectionForm2Column.vue'
  import Card from '../../components/Card/Card.vue'
  import Button from '../../components/Button/Button.vue'
  import Overline from '../../components/overline/Overline.vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import Dropdown from 'primevue/dropdown'
  import InlineMessage from 'primevue/inlinemessage'
  import { hbspPostHandler } from '../../services/hubspot-service'
  import { ref, onMounted, nextTick } from 'vue'
  import { Country } from 'country-state-city'

  interface SectionFormContactUsProps {
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    type?: '70x30' | '50x50'
    form: {
      title: string
      descriptionRawMarkdown: string
      name: string
      namePlaceholder: string
      lastName?: string
      lastNamePlaceholder?: string
      phone?: string
      phonePlaceholder?: string
      email: string
      emailPlaceholder: string
      segment: string
      segmentPlaceholder: string
      segmentData: Array<{ value: string; label: string }>
      message: string
      terms: string
      buttonText: string
    }
    hubspot: {
      formId: string
      companyId: string
    }
    requester: string
    requesterName: string
    responseMessages: {
      success: string
      error: string
    }
    cards: Array<{
      title: string
      descriptionRawMarkdown: string
    }>
    locations: {
      overline: string
      offices: Array<{
        city: string
        address: string
        button: {
          label: string
          link: string
        }
      }>
    }
    lang?: string
  }

  const props = withDefaults(defineProps<SectionFormContactUsProps>(), {
    id: '',
    bottomSpacing: 'mb-24',
    type: '50x50',
    lang: 'en'
  })

  const responseStatus = ref<'default' | 'success' | 'error'>('default')
  const segment = ref<{ value: string; label: string } | null>(null)
  const name = ref('')
  const lastName = ref('')
  const phone = ref('')
  const email = ref('')
  const message = ref('')
  const termsAcceptance = ref(true)

  const getDefaultPhoneCountry = () => {
    if (props.lang === 'pt-br') return '55'
    if (props.lang === 'es') return '52'
    return '1'
  }
  const selectedPhoneCountry = ref(getDefaultPhoneCountry())
  const phoneCountries = ref<
    Array<{ name: string; phonecode: string; flag: string; isoCode: string }>
  >([])

  const fetchCountries = async () => {
    try {
      const allCountries = Country.getAllCountries()
      phoneCountries.value = allCountries
        .filter((country) => country.phonecode)
        .map((country) => ({
          name: country.name,
          phonecode: country.phonecode,
          flag: country.flag,
          isoCode: country.isoCode
        }))
        .sort((a, b) => a.name.localeCompare(b.name))

      // Ensure the initial selected value exists in the options after loading
      await nextTick()
      const defaultCode = getDefaultPhoneCountry()
      const countryExists = phoneCountries.value.find((c) => c.phonecode === defaultCode)
      if (countryExists) {
        selectedPhoneCountry.value = defaultCode
      } else if (phoneCountries.value.length > 0) {
        selectedPhoneCountry.value = phoneCountries.value[0].phonecode
      }
    } catch (error) {
      phoneCountries.value = [
        { name: 'United States', phonecode: '1', flag: '🇺🇸', isoCode: 'US' },
        { name: 'Brazil', phonecode: '55', flag: '🇧🇷', isoCode: 'BR' },
        { name: 'Mexico', phonecode: '52', flag: '🇲🇽', isoCode: 'MX' }
      ]
      selectedPhoneCountry.value = getDefaultPhoneCountry()
    }
  }

  const preventLetters = (event: KeyboardEvent) => {
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

  const sanitizePhoneNumber = (event: Event) => {
    const target = event.target as HTMLInputElement
    const value = target.value.replace(/\D/g, '')
    phone.value = value
  }

  const getPhoneCountryFlag = (phoneCode: string) => {
    if (phoneCode === '1') {
      const usCountry = phoneCountries.value.find((c) => c.isoCode === 'US')
      return usCountry?.flag ?? ''
    }
    const country = phoneCountries.value.find((c) => c.phonecode === phoneCode)
    return country?.flag ?? ''
  }

  const onSubmit = async () => {
    const requestBody = {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: email.value || ''
        },
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: name.value || ''
        },
        {
          objectTypeId: '0-1',
          name: 'message',
          value: message.value || ''
        },
        {
          objectTypeId: '0-1',
          name: 'segmento_de_neg_cio',
          value: segment.value?.value || ''
        }
      ],
      context: {
        pageUri: props.requester,
        pageName: props.requesterName
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: termsAcceptance.value,
          text: `${props.form.terms}`
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
        value: `+${selectedPhoneCountry.value}${phone.value}`
      })
    }
    const postURL = `https://api.hsforms.com/submissions/v3/integration/submit/${props.hubspot.companyId}/${props.hubspot.formId}`

    const response = await hbspPostHandler(postURL, requestBody)

    if (response.status !== 200) {
      responseStatus.value = 'error'
      return
    }

    responseStatus.value = 'success'
  }

  onMounted(() => {
    fetchCountries()
  })
</script>
