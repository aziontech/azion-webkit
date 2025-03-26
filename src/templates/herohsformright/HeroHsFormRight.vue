<template>
  <HeroBase
    :overline="props.overline"
    :title="props.title"
    :description="props.description"
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
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    list: {
      type: Array, // title, description, icon
      required: false
    },
    form: {
      type: Object,
      required: false // id, title
    }
  })

  const isLoading = ref(true)
  const formIsSubmitted = ref(false)

  const loadHubSpotScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://js.hsforms.net/forms/v2.js'
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  const createHubSpotForm = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '5759082',
        formId: props.form.id,
        target: '.field-wrap',
        onFormSubmit: function () {
          formIsSubmitted.value = true
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

    // Check for form every second for up to 10 attempts
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
