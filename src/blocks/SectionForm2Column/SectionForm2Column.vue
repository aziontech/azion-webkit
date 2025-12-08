<template>
  <LayoutContainer>
    <div
      :class="[bottomSpacing, typeClasses.container]"
      class="grid m-0"
    >
      <div
        :class="typeClasses.form"
        class="border border-neutral-800 p-6 md:p-12"
      >
        <template v-if="$slots.form">
          <slot name="form" />
        </template>
        <template v-else>
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
            <div class="field-wrap !font-sora">
              <div
                v-if="isLoading"
                class="loader-ring"
              ></div>
            </div>
          </form>
        </template>
      </div>
      <div
        :class="typeClasses.content"
        class="border border-l-0 border-neutral-800"
      >
        <template v-if="$slots.content">
          <slot name="content" />
        </template>
        <template v-else>
          <div
            v-if="title || descriptionRawMarkdown"
            class="flex flex-col gap-5 shrink-0 w-full p-6 md:p-12 md:min-h-full"
          >
            <h2
              v-if="title"
              class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 w-full"
            >
              {{ title }}
            </h2>

            <div
              v-if="descriptionRawMarkdown"
              class="flex flex-col gap-3 w-full py-3 pr-3"
            >
              <div
                class="text-base font-sora font-normal leading-[1.4] tracking-tight text-neutral-400"
                v-html="parseMarkdown(descriptionRawMarkdown)"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import { computed, onMounted, ref } from 'vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'

  interface SectionForm2ColumnProps {
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    form?: {
      id: string
      title: string
      action: string
      successMessage: string
      redirect: string
    }
    type?: '70x30' | '50x50'
    title?: string
    descriptionRawMarkdown?: string
  }

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

  const props = withDefaults(defineProps<SectionForm2ColumnProps>(), {
    id: '',
    bottomSpacing: 'mb-24',
    type: '50x50'
  })

  const typeClasses = computed(() => {
    const sizeMap: Record<'70x30' | '50x50', { container: string; form: string; content: string }> =
      {
        '70x30': {
          container: 'grid-cols-10',
          form: 'col-span-7',
          content: 'col-span-3'
        },
        '50x50': {
          container: 'grid-cols-2',
          form: 'col-span-1',
          content: 'col-span-1'
        }
      }
    return sizeMap[props.type]
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
        paragraph.textContent = props.form?.successMessage || ''
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
        formId: props.form?.id || '',
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

          const formRedirect = props.form?.redirect || ''
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
