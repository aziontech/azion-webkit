<template>
  <FormBlock
    :title="t.title"
    :description="t.description"
  >
    <template #content>
      <form
        id="contact-us"
        class="w-full hs-form"
        @submit.prevent="onSubmit"
      >
        <div class="flex flex-col gap-8">
          <div class="flex flex-column gap-2">
            <label
              class="text-sm"
              for="name"
              >{{ fields.name }}</label
            >
            <InputText
              type="text"
              id="name"
              v-model="name"
              v-bind="nameAttrs"
              :class="{ 'p-invalid': errors.name }"
            />
            <small
              id="username-help"
              class="p-error"
              v-if="errors.name && meta.touched"
            >
              {{ t.errors['nameRequiredError'] }}
            </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="email"
              >{{ fields.email }}</label
            >
            <InputText
              type="text"
              v-model="email"
              id="email"
              class="w-full"
              v-bind="emailAttrs"
              :class="{ 'p-invalid': errors.email }"
            />
            <small
              id="username-help"
              class="p-error"
              v-if="errors.email && meta.touched"
            >
              {{ t.errors['emailRequiredError'] }}
            </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="phone"
              >{{ fields.contactNumber }}</label
            >
            <div class="flex gap-2">
              <Dropdown
                v-model="selectedPhoneCountry"
                :options="phoneCountries"
                optionLabel="name"
                optionValue="phonecode"
                placeholder="DDI"
                class="w-48"
                filter
                appendTo="self"
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
                type="tel"
                v-model="phone"
                id="phone"
                class="flex-1"
                v-bind="phoneAttrs"
                :class="{ 'p-invalid': errors.phone }"
              />
            </div>
            <small
              id="username-help"
              class="p-error"
              v-if="errors.phone && meta.touched"
            >
              {{ t.errors['phoneRequiredError'] }}
            </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="resume"
              >{{ fields.resume.label }}</label
            >
            <div
              class="flex gap-2 items-center"
              id="resume"
            >
              <FileUpload
                mode="basic"
                customUpload
                @uploader="uploadHandler"
                :invalidFileTypeMessage="fields.resume.invalidFileTypeMessage"
                accept="application/pdf,.docx,.doc"
                :chooseLabel="fields.resume.buttonText"
                :maxFileSize="5000000"
                auto
              />
              <p v-if="fileName">{{ fileName }}</p>
            </div>
            <small
              id="username-help"
              class="p-error"
              v-if="errors.file && meta.touched"
            >
              {{ t.errors['resumeRequiredError'] }}
            </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="linkedIn"
              >{{ fields.linkedin }}</label
            >
            <InputText
              type="text"
              v-model="linkedinUsername"
              id="linkedIn"
              class="w-full"
              v-bind="linkedinUsernameAttrs"
              :class="{ 'p-invalid': errors.linkedinUsername }"
            />
            <small
              id="username-help"
              class="p-error"
              v-if="errors.linkedinUsername && meta.touched"
            >
              {{ t.errors['linkedinRequiredError'] }}
            </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="salary"
              >{{ fields.deseriredSalaray }}</label
            >
            <InputNumber
              v-model="targetSalary"
              id="salary"
              class="w-full"
              v-bind="targetSalaryAttrs"
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              :class="{ 'p-invalid': errors.targetSalary }"
            />
            <small
              id="username-help"
              class="p-error"
              v-if="errors.targetSalary && meta.touched"
            >
              {{ t.errors['targetSalaryRequiredError'] }}
            </small>
          </div>
          <div class="flex gap-4">
            <div class="flex flex-column w-full gap-2 max-w-xl">
              <label
                class="text-sm"
                for="country"
                >{{ fields.country }}</label
              >
              <Dropdown
                id="country"
                v-model="country"
                :options="countries"
                optionLabel="name"
                optionValue="isoCode"
                :placeholder="fields.countryPlaceholder || 'Select a country'"
                :loading="loadingCountries"
                filter
                appendTo="self"
                @change="onCountryChange"
                :class="{ 'p-invalid': errors.country }"
                v-bind="countryAttrs"
              />
              <small
                id="coutry-help"
                class="p-error"
                v-if="errors.country && meta.touched"
              >
                {{ t.errors['countryRequiredError'] }}
              </small>
            </div>
            <div class="flex flex-column gap-2 w-full max-w-xl">
              <label
                class="text-sm"
                for="state"
                >{{ fields.state }}</label
              >
              <Dropdown
                id="state"
                v-model="state"
                :options="states"
                optionLabel="name"
                optionValue="isoCode"
                :placeholder="fields.statePlaceholder || 'Select a state'"
                :loading="loadingStates"
                filter
                appendTo="self"
                @change="onStateChange"
                :disabled="!country || states.length === 0"
                :class="{ 'p-invalid': errors.state }"
                v-bind="stateAttrs"
              />
              <small
                id="state-help"
                class="p-error"
                v-if="errors.state && meta.touched"
              >
                {{ t.errors['stateRequiredError'] }}
              </small>
            </div>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label
              class="text-sm"
              for="city"
              >{{ fields.city }}</label
            >
            <Dropdown
              id="city"
              v-model="city"
              :options="cities"
              optionLabel="name"
              optionValue="name"
              :placeholder="fields.cityPlaceholder || 'Select a city'"
              :loading="loadingCities"
              filter
              appendTo="self"
              :disabled="!state || cities.length === 0"
              :class="{ 'p-invalid': errors.city }"
              v-bind="cityAttrs"
              @change="
                (event) => {
                  setFieldValue('city', event.value)
                }
              "
            />
            <small
              id="city-help"
              class="p-error"
              v-if="errors.city && meta.touched"
            >
              {{ t.errors['cityRequiredError'] }}
            </small>
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
          {{ feedbackMessages.success }}
        </InlineMessage>
        <InlineMessage
          v-if="responseStatus === 'error'"
          severity="error"
          class="flex justify-start"
        >
          {{ feedbackMessages.error }}
        </InlineMessage>
      </div>
    </template>
    <template #actions>
      <div class="w-full flex justify-end">
        <Button
          :disabled="isLoading || responseStatus === 'success'"
          :loading="isLoading"
          class="w-fit"
          size="small"
          @click="onSubmit()"
        >
          {{ t.button.label }}
        </Button>
      </div>
    </template>
  </FormBlock>
</template>

<script setup>
  import InputText from 'primevue/inputtext'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'
  import InlineMessage from 'primevue/inlinemessage'
  import FileUpload from 'primevue/fileupload'
  import Dropdown from 'primevue/dropdown'

  import { ref, onMounted, watch } from 'vue'
  import { useForm } from 'vee-validate'
  import * as yup from 'yup'
  import { toTypedSchema } from '@vee-validate/yup'
  import { Country, State, City } from 'country-state-city'

  import FormBlock from '../formblock/FormBlock.vue'

  const props = defineProps({
    t: {
      type: Object,
      required: true
    },
    jobId: {
      type: String,
      required: true
    },
    referrerId: {
      type: String,
      required: false,
      default: null
    },
    isLinkedinRefferer: {
      type: Boolean,
      required: false,
      default: false
    },
    lang: {
      type: String,
      required: false,
      default: 'en'
    }
  })

  const { t } = props
  const { fields, feedbackMessages } = t

  const schema = toTypedSchema(
    yup.object({
      name: yup.string().required('nameRequiredError'),
      email: yup.string().required('emailRequiredError').email('emailRequiredError'),
      phone: yup.string().required('phoneRequiredError'),
      targetSalary: yup
        .number()
        .required('targetSalaryRequiredError')
        .positive('targetSalaryRequiredError')
        .min(1000, 'targetSalaryRequiredError'),
      linkedinUsername: yup
        .string()
        .required('linkedinRequiredError')
        .transform((value) => {
          if (!value) return value

          const match = value.match(/linkedin\.com\/in\/([^\/]+)/)

          return match ? match[1] : value
        }),
      file: yup.boolean().required('resumeRequiredError'),
      state: yup.string().required('stateRequiredError'),
      city: yup.string().required('cityRequiredError'),
      country: yup.string().required('countryRequiredError')
    })
  )

  const { defineField, handleSubmit, meta, errors, setFieldValue, resetForm } = useForm({
    validationSchema: schema
  })

  const [name, nameAttrs] = defineField('name')
  const [email, emailAttrs] = defineField('email')
  const [phone, phoneAttrs] = defineField('phone')
  const [city, cityAttrs] = defineField('city')
  const [state, stateAttrs] = defineField('state')
  const [country, countryAttrs] = defineField('country')
  const [linkedinUsername, linkedinUsernameAttrs] = defineField('linkedinUsername')
  const [targetSalary, targetSalaryAttrs] = defineField('targetSalary')

  const responseStatus = ref('default')
  const isLoading = ref(false)
  const fileName = ref(false)
  const formData = new FormData()

  const getDefaultPhoneCountry = () => {
    if (props.lang === 'pt-br') return '55'
    if (props.lang === 'es') return '52'
    return '1' // US phone code
  }

  const selectedPhoneCountry = ref(getDefaultPhoneCountry())
  const phoneCountries = ref([])

  const countries = ref([])
  const states = ref([])
  const cities = ref([])
  const loadingCountries = ref(false)
  const loadingStates = ref(false)
  const loadingCities = ref(false)

  const fetchCountries = async () => {
    loadingCountries.value = true
    try {
      const allCountries = Country.getAllCountries()
      countries.value = allCountries.sort((a, b) => a.name.localeCompare(b.name))

      phoneCountries.value = countries.value
        .filter((country) => country.phonecode)
        .map((country) => ({
          name: country.name,
          phonecode: country.phonecode,
          flag: country.flag,
          isoCode: country.isoCode
        }))
    } catch (error) {
      countries.value = [
        { name: 'United States', isoCode: 'US' },
        { name: 'Mexico', isoCode: 'MX' },
        { name: 'Brazil', isoCode: 'BR' }
      ]

      phoneCountries.value = [
        { name: 'United States', phonecode: '1', flag: '🇺🇸', isoCode: 'US' },
        { name: 'Brazil', phonecode: '55', flag: '🇧🇷', isoCode: 'BR' },
        { name: 'Mexico', phonecode: '52', flag: '🇲🇽', isoCode: 'MX' }
      ]
    } finally {
      loadingCountries.value = false
    }
  }

  const fetchStates = async (countryCode) => {
    if (!countryCode) return

    loadingStates.value = true
    try {
      const countryStates = State.getStatesOfCountry(countryCode)
      states.value = countryStates.sort((a, b) => a.name.localeCompare(b.name))
    } catch (error) {
      states.value = []
    } finally {
      loadingStates.value = false
    }
  }

  const fetchCities = async (countryCode, stateCode) => {
    if (!countryCode || !stateCode) return

    loadingCities.value = true
    try {
      const stateCities = City.getCitiesOfState(countryCode, stateCode)
      cities.value = stateCities.sort((a, b) => a.name.localeCompare(b.name))
    } catch (error) {
      cities.value = []
    } finally {
      loadingCities.value = false
    }
  }

  const removeStateAndCity = (removeState = false, removeCity = false) => {
    if (removeState && state.value && states.value.length) {
      state.value = ''
      states.value = []
    }
    if (removeCity && city.value && cities.value.length) {
      city.value = ''
      cities.value = []
    }
  }

  const getPhoneCountryFlag = (phoneCode) => {
    // For phone code '1', prioritize US over Canada
    if (phoneCode === '1') {
      const usCountry = phoneCountries.value.find((c) => c.isoCode === 'US')
      return usCountry?.flag ?? ''
    }

    const country = phoneCountries.value.find((c) => c.phonecode === phoneCode)
    return country?.flag ?? ''
  }

  const onCountryChange = () => {
    removeStateAndCity(true, true)

    if (country.value) {
      fetchStates(country.value)
    }
  }

  const onStateChange = () => {
    removeStateAndCity(false, true)

    if (state.value && country.value) {
      fetchCities(country.value, state.value)
    }
  }

  const uploadHandler = async (event) => {
    const file = event.files[0]

    fileName.value = file.name
    setFieldValue('file', true)
    formData.append('file', file)
  }

  function onSuccess(values) {
    handlePOST(values)
  }

  const onSubmit = handleSubmit(onSuccess)

  const handlePOST = async (values) => {
    isLoading.value = true

    const selectedCountry =
      countries.value.find((c) => c.isoCode === values.country)?.name ?? values.country
    const selectedState = states.value.find((s) => s.isoCode === values.state)?.name ?? values.state

    const location = `${values.city}, ${selectedState}, ${selectedCountry}`
    const transformedValues = {
      ...values,
      phone: `+${selectedPhoneCountry.value}${values.phone}`,
      location,
      fileName: fileName.value,
      targetSalary: {
        currency: 'BRL',
        type: 'CLT',
        value: values.targetSalary
      }
    }

    delete transformedValues['file']
    delete transformedValues['city']
    delete transformedValues['state']
    delete transformedValues['country']

    if (props.referrerId) transformedValues['referralCode'] = props.referrerId
    if (props.isLinkedinRefferer) transformedValues['source'] = 'linkedin'

    formData.append('data', JSON.stringify(transformedValues))

    const url = `https://www.azion.com/api/careers/inhire/post?id=${props.jobId}`

    const request = {
      method: 'POST',
      body: formData
    }

    return fetch(url, request)
      .then(function (response) {
        if (!response.ok) {
          throw new Error({
            status: response.status,
            msg: '[!] Fetch ERRROR to API communication'
          })
        }
        responseStatus.value = 'success'
        resetForm()
        fileName.value = false
        isLoading.value = false
        return response.json(function (data) {
          return data
        })
      })
      .catch(() => {
        isLoading.value = false
        responseStatus.value = 'error'
      })
  }

  onMounted(() => {
    fetchCountries()
  })
</script>
