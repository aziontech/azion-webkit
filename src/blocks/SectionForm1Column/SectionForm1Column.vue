<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="[bottomSpacing]"
      class="border border-neutral-800 p-6 md:p-12 flex flex-col"
    >
      <form
        data-form
        class="hbspt-form"
      >
        <p
          class="mb-6 font-medium display-2-mobile md:display-2"
          :class="{ hidden: formIsSubmitted }"
        >
          {{ props.form.title }}
        </p>
        <div class="field-wrap">
          <div
            v-if="isLoading"
            class="loader-ring"
          ></div>
        </div>
      </form>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'

  interface HubSpotForms {
    forms: {
      create: (options: {
        region: string
        portalId: string
        formId: string
        target: string
        onFormReady?: (form: HTMLElement) => void
        onFormSubmitted?: () => void
      }) => void
    }
  }

  interface SectionForm1ColumnProps {
    id?: string
    form: {
      id: string
      title: string
      action: string
      successMessage: string
      redirect: string
    }
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  const props = withDefaults(defineProps<SectionForm1ColumnProps>(), {
    id: '',
    bottomSpacing: 'mb-24'
  })

  const isLoading = ref(true)
  const formIsSubmitted = ref(false)

  const loadHubSpotScript = async () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.src = 'https://js.hsforms.net/forms/v2.js'
      script.onload = resolve
      script.onerror = reject

      document.head.appendChild(script)
    })
  }

  function appendSuccessMessage() {
    const intervalId = setInterval(() => {
      var successMessageElement = document.querySelector('.submitted-message')

      if (successMessageElement) {
        successMessageElement.innerHTML = ''

        var paragraph = document.createElement('p')
        paragraph.textContent = props.form.successMessage
        successMessageElement.appendChild(paragraph)

        clearInterval(intervalId)
      }
    }, 50)
  }

  const redirect = (destiny: string) => {
    window.location.href = destiny
  }

  const createHubSpotForm = () => {
    const hbspt = (window as Window & { hbspt?: HubSpotForms }).hbspt
    if (hbspt) {
      hbspt.forms.create({
        region: 'na1',
        portalId: '5759082',
        formId: props.form.id,
        target: '.field-wrap',
        onFormReady: function ($form) {
          const inputElement = $form.querySelector(
            'input[name="form_action"]'
          ) as HTMLInputElement | null

          if (inputElement instanceof HTMLInputElement && props.form?.action) {
            inputElement.value = props.form.action
          }
        },
        onFormSubmitted: function () {
          formIsSubmitted.value = true

          const formRedirect = props.form.redirect
          const destiny = formRedirect && formRedirect.length ? formRedirect : null

          destiny ? redirect(destiny) : appendSuccessMessage()
        }
      })
    }
  }

  onMounted(async () => {
    try {
      await loadHubSpotScript()
      createHubSpotForm()
    } catch (error) {
      console.error('Error loading HubSpot form:', error)
    } finally {
      isLoading.value = false
    }
  })
</script>
