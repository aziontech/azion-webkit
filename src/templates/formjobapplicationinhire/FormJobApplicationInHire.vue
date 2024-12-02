<template>
  <FormBlock :title="t.title" :description="t.description">
    <template #content>
      <form id="contact-us" class="w-full hs-form" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-8">
            <div class="flex flex-column gap-2  ">
              <label class="text-sm" for="name">{{ fields.name }}</label>
              <InputText type="text" id="name" v-model="name" v-bind="nameAttrs" :class="{ 'p-invalid': errors.name }" />
              <small id="username-help" class="p-error" v-if="errors.first_name && meta.touched"> {{ t.errors['nameRequiredError'] }}  </small>
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
            <div class="flex gap-2 items-center" id="resume">
              <FileUpload mode="basic" customUpload @uploader="uploadHandler"
              :invalidFileTypeMessage="fields.resume.invalidFileTypeMessage"
              accept="application/pdf,odt,txt,docx,doc,rtf" :chooseLabel="fields.resume.buttonText"
              :maxFileSize="5000000" auto />
              <p v-if="fileName"> {{ fileName }} </p>
            </div>
            <small id="username-help" class="p-error" v-if="errors.resume && meta.touched"> {{ t.errors['resumeRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="linkedIn">{{ fields.linkedin }}</label>
            <InputText type="text" v-model="linkedinUsername" id="linkedIn" class="w-full" v-bind="linkedinUsernameAttrs" :class="{ 'p-invalid': errors.linkedin }" />
            <small id="username-help" class="p-error" v-if="errors.linkedin && meta.touched"> {{ t.errors['linkedinRequiredError'] }}  </small>
          </div>
          <div class="flex flex-column gap-2 max-w-xl">
            <label class="text-sm" for="salary">{{ fields.deseriredSalaray }}</label>
            <InputText type="number" v-model="targetSalary" id="salary" class="w-full" v-bind="targetSalaryAttrs" :class="{ 'p-invalid': errors.salary }" />
            <small id="username-help" class="p-error" v-if="errors.salary && meta.touched"> {{ t.errors['targetSalaryRequiredError'] }}  </small>
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
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import FormBlock from "../formblock/FormBlock.vue";

const props = defineProps({
  t: {
    type: Object,
    required: true
  },
  jobId: {
    type: String,
    required: true
  }
})

const { t } = props
const { fields, feedbackMessages } = t

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required('nameRequiredError'),
    email: yup.string().required('emailRequiredError').email('emailRequiredError'),
    phone:  yup.string().required('phoneRequiredError'),
    targetSalary:  yup.string().required('targetSalaryRequiredError'),
    linkedinUsername:  yup.string().required('linkedinRequiredError'),
    file: yup.boolean().required('resumeRequiredError')
  })
);

const { defineField, handleSubmit, isSubmitting, meta, errors, setFieldValue } = useForm({
  validationSchema: schema,
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [phone, phoneAttrs] = defineField('phone');
const [linkedinUsername, linkedinUsernameAttrs] = defineField('linkedinUsername');
const [targetSalary, targetSalaryAttrs] = defineField('targetSalary');

const responseStatus = ref('default');
const fileName = ref(false);
const formData = new FormData();

const uploadHandler = async (event) => {
  const file = event.files[0];
  fileName.value = file.name
  setFieldValue("file", true)
  formData.append("file", file)
};

function onSuccess(values) {
  handlePOST(values)
}

const onSubmit = handleSubmit(onSuccess);

const handlePOST = async (values) => {
  const transformedValues = {
    ...values,
    fileName: fileName.value,
    targetSalary: {
      currency: "BRL",
      type: "CLT",
      value: Number(values.targetSalary)
    }
  };

  delete transformedValues["file"];

  const url = `https://www.azion.com/api/careers/inhire/post?id=${props.jobId}`

  const request = {
    method: 'POST',
    body: formData,
    headers: {
      "X-Extra-Data": JSON.stringify(transformedValues)
    }
  };

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
    responseStatus.value = "error"
    throw new Error(error);
  });
}
</script>
