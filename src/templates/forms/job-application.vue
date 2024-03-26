<template>
  <FormBlock :title="t.title" :description="t.description">
    <template #content>
      <form id="contact-us" class="w-full hs-form" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-8">
          <div class="flex gap-8 w-ful flex flex-col lg:flex-row">
            <div class="flex flex-column gap-2  max-w-xl lg:w-1/2">
              <label class="text-sm" for="firstName">{{ fields.firstName }}</label>
              <InputText type="text" id="firstName" v-model="firstName" v-bind="firstNameAttrs" :class="{ 'p-invalid': errors.first_name }" />
              <small id="username-help" class="p-error" v-if="errors.first_name && meta.touched"> {{ t.errors['firstNameRequiredError'] }}  </small>
            </div>
            <div class="flex flex-column gap-2 max-w-xl lg:w-1/2">
              <label class="text-sm" for="lastName">{{ fields.lastName }}</label>
              <InputText type="text" id="lastName" v-model="lastName" v-bind="lastNameAttrs"  :class="{ 'p-invalid': errors.last_name }" />
              <small id="username-help" class="p-error" v-if="errors.last_name && meta.touched"> {{ t.errors['lastNameRequiredError'] }}  </small>
            </div>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="email">{{ fields.email }}</label>
            <InputText type="text" v-model="email" id="email" class="w-full" v-bind="emailAttrs" :class="{ 'p-invalid': errors.email }" />
            <small id="username-help" class="p-error" v-if="errors.email && meta.touched"> {{ t.errors['emailRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="phone">{{ fields.contactNumber }}</label>
            <InputText type="tel" v-model="phone" id="phone" class="w-full" v-bind="phoneAttrs" :class="{ 'p-invalid': errors.phone }" />
            <small id="username-help" class="p-error" v-if="errors.phone && meta.touched"> {{ t.errors['phoneRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="resume">{{ fields.resume.label }}</label>
            <div class="flex gap-2 items-center">
              <FileUpload id="resume" mode="basic" customUpload @uploader="uploadHandler"
              :invalidFileTypeMessage="fields.resume.invalidFileTypeMessage"
              accept="application/pdf,odt,txt,docx,doc,rtf" :chooseLabel="fields.resume.buttonText"
              :maxFileSize="5000000" auto />
              <p v-if="fileName"> {{ fileName }} </p>
            </div>
            <small id="username-help" class="p-error" v-if="errors.resume && meta.touched"> {{ t.errors['resumeRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="linkedIn">{{ fields.linkedin }}</label>
            <InputText type="text" v-model="linkedin" id="linkedIn" class="w-full" v-bind="linkedinAttrs" :class="{ 'p-invalid': errors.linkedin }" />
            <small id="username-help" class="p-error" v-if="errors.linkedin && meta.touched"> {{ t.errors['linkedinRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="salary">{{ fields.deseriredSalaray }}</label>
            <InputText type="number" v-model="salary" id="salary" class="w-full" v-bind="salaryAttrs" :class="{ 'p-invalid': errors.salary }" />
            <small id="username-help" class="p-error" v-if="errors.salary && meta.touched"> {{ t.errors['salaryRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="address">{{ fields.address }}</label>
            <InputText type="text" id="address" v-model="address" v-bind="addressAttrs" />
          </div>
          <div class="flex gap-8 max-w-xl flex flex-col lg:flex-row">
            <div class="flex flex-column gap-2 lg:w-1/2">
              <label class="text-sm" for="province">{{ fields.province }}</label>
              <InputText type="text" id="province" v-model="state" v-bind="stateAttrs" />
            </div>
            <div class="flex flex-column gap-2 lg:w-1/2">
              <label class="text-sm" for="city">{{ fields.city }}</label>
              <InputText type="text" id="city" v-model="city" v-bind="cityAttrs" />
            </div>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="zip">{{ fields.zip }}</label>
            <InputText type="number" id="zip" v-model="zip" v-bind="zipAttrs" />
          </div>
        </div>
      </form>
      <div class="mt-2" v-if="responseStatus !== 'default'">
        <InlineMessage v-if="responseStatus === 'success'" severity="success" class="flex justify-start">
          {{ feedbackMessages.success }}
        </InlineMessage>
        <InlineMessage v-if="responseStatus === 'error'" severity="error" class="flex justify-start">
          {{ feedbackMessages.error }}
        </InlineMessage>
      </div>
    </template>
    <template #actions>
      <div class="w-full flex justify-end">
        <Button :disabled="isSubmitting" class="w-fit" size="small" @click="onSubmit()"> {{ t.button.label }} </Button>
      </div>
    </template>
  </FormBlock>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import InlineMessage from 'primevue/inlinemessage'
import FileUpload from 'primevue/fileupload';
import FormBlock from "../form-block/index.vue";
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

const props = defineProps({
  t: {
    type: Object,
    required: true
  },
  jobId: {
    formId: String,
    companyId: String,
  }
})

const { t, jobId } = props
const { fields, feedbackMessages } = t

const schema = toTypedSchema(
  yup.object({
    first_name: yup.string().required('firstNameRequiredError'),
    last_name:  yup.string().required('lastNameRequiredError'),
    email: yup.string().required('emailRequiredError').email('emailRequiredError'),
    jobId: yup.string(),
    phone:  yup.string().required('phoneRequiredError'),
    "base64-resume": yup.string().required('resumeRequiredError'),
    linkedin:  yup.string().required('linkedinRequiredError'),
    salary:  yup.string().required('salaryRequiredError'),
    address: yup.string().default(''),
    state: yup.string(),
    city: yup.string(),
    zip: yup.string()
  })
);

const { defineField, handleSubmit, isSubmitting, meta, errors, setFieldValue } = useForm({
  validationSchema: schema,
});

const [firstName, firstNameAttrs] = defineField('first_name');
const [lastName, lastNameAttrs] = defineField('last_name');
const [email, emailAttrs] = defineField('email');
const [phone, phoneAttrs] = defineField('phone');
const [linkedin, linkedinAttrs] = defineField('linkedin');
const [salary, salaryAttrs] = defineField('salary');
const [address, addressAttrs] = defineField('address');
const [state, stateAttrs] = defineField('state');
const [city, cityAttrs] = defineField('city');
const [zip, zipAttrs] = defineField('zip');
setFieldValue("jobId", jobId)

const responseStatus = ref('default');
const fileName = ref(false);

const uploadHandler = async (event) => {
  const file = event.files[0];
  fileName.value = file.name
  const reader = new FileReader();

  reader.readAsDataURL( file );

  reader.onloadend = function () {
    const resultbase64 = reader.result.split(',');
    const value = resultbase64.length === 2 ? resultbase64[1] : '';
    setFieldValue("base64-resume", value)
  };
};

function onSuccess(values) {
  handlePOST(values)
}

const onSubmit = handleSubmit(onSuccess);

const handlePOST = async (values) => {
  const url = "https://www.azion.com/api/careers/post/applicants"

  const request = {
    method: 'POST',
    body: JSON.stringify(values),
  };

  console.log(values)

  return fetch(url, request).then(function (response) {
    if (!response.ok) {
      throw new Error({
        status: response.status,
        msg: '[!] Fetch ERRROR to API communication'
      })
    }
    responseStatus.value = "success"
    return response.json(function (data) {
      return data;
    });
  }).catch(function (error) {
    console.error(error);
    responseStatus.value = "error"
    throw new Error(error);
  });
}

</script>
