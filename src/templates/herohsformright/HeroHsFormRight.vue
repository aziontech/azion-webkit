<template>
  <HeroBase
    :overline="props.overline"
    :title="props.title"
    :description="props.description"
    :descriptionRawHtml="props.descriptionRawHtml"
    :position="props.position"
  >
    <template #content>
      <div class="flex flex-col gap-10 w-full">
        <UnorderedList :data="props.list" />
      </div>
    </template>
    <template #main>
      <div class="form border surface-border rounded-md p-4 md:p-8 flex flex-col gap-8">
        <form
          data-form
          class="hbspt-form"
        >
          <p
            class="mb-6 font-medium text-xl"
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
    </template>
  </HeroBase>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import HeroBase from '../herobase'
  import UnorderedList from '../listunordered'

  const props = defineProps({
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      required: true,
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    list: {
      type: Array, // title, description, icon
      default: () => []
    },
    form: {
      type: Object // id, title, action, successMessage
    },
    position: {
      type: String,
      options: ['left', 'right'],
      default: () => 'left'
    }
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

  const redirect = (destiny) => {
    window.location.href = destiny
  }

  const createHubSpotForm = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '5759082',
        formId: props.form.id,
        target: '.field-wrap',
        onFormReady: function ($form) {
          let inputElement = $form.querySelector('input[name="form_action"]')

          if (inputElement && props.form?.action) {
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

  const setupFormTrackingAnalytics = () => {
    const trackFormFilling = (form) => {
      if (!form) return

      const inputElements = form.querySelectorAll('input')
      let eventTriggered = false

      inputElements.forEach((input) => {
        input.addEventListener(
          'keyup',
          () => {
            if (eventTriggered) return

            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              event: 'form_filling_started',
              formLocation: 'hero'
            })

            eventTriggered = true
          },
          { once: true }
        )
      })
    }

    let attempts = 0
    const checkForm = setInterval(() => {
      const form = document.querySelector('form')

      if (form || attempts >= 10) {
        clearInterval(checkForm)
        if (form) trackFormFilling(form)
      }

      attempts++
    }, 1000)
  }

  onMounted(async () => {
    try {
      await loadHubSpotScript()
      createHubSpotForm()
      // Uncomment the following line if you want to enable form tracking
      // setupFormTrackingAnalytics()
    } catch (error) {
      console.error('Error loading HubSpot form:', error)
    } finally {
      isLoading.value = false
    }
  })
</script>
