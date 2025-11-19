<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
      class="grid grid-cols-1 md:grid-cols-10 m-0 font-sora border border-neutral-900"
    >
      <div
        class="md:col-span-3 border-r border-neutral-900 relative"
        :class="[
          `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0`,
          `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0`
        ]"
      >
        <div
          class="relative p-6 md:p-12"
          :class="[
            `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0`,
            `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:block`
          ]"
        >
          <h2 class="display-3-mobile md:display-3 text-balance font-sora text-neutral-50">
            {{ title }}
          </h2>
        </div>
      </div>
      <div class="md:col-span-7">
        <div
          class="flex flex-col w-full relative md:py-12"
          :class="[
            `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0`,
            `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute md:before:top-0 md:before:right-0 before:bottom-0 before:left-0 md:before:bottom-auto md:before:left-auto`
          ]"
        >
          <div
            class="border-t border-neutral-900"
            aria-hidden="true"
          ></div>
          <div
            v-for="(faq, index) in localFaqs"
            :key="index"
            @click="toggleFaq(index)"
            class="border-b border-neutral-900 px-6 md:px-12 pt-6 pb-2 flex flex-col gap-3 hover:bg-neutral-900 transition-colors group cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <h3 class="display-6-mobile md:display-6 font-sora text-white">
                {{ faq.question }}
              </h3>
              <span class="text-white group-hover:text-orange-500 transition-colors duration-300">
                <i
                  class="pi pi-chevron-down transition-transform duration-300 ease-in-out"
                  :class="faq.isOpen ? 'rotate-180' : 'rotate-0'"
                ></i>
              </span>
            </div>
            <div
              class="grid transition-all duration-300 ease-in-out overflow-hidden"
              :class="
                faq.isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
              "
            >
              <div class="min-h-0">
                <div
                  class="text-sm font-sora text-neutral-400"
                  v-html="parseMarkdown(faq.answer)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'

  interface FaqProps {
    id?: string | number
    question: string
    answer: string
    isOpen?: boolean
  }

  interface SectionFaqProps {
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    title: string
    faqs: FaqProps[]
  }

  const props = withDefaults(defineProps<SectionFaqProps>(), {
    id: '',
    bottomSpacing: 'mb-24',
    title: '',
    faqs: () => []
  })

  const localFaqs = ref<FaqProps[]>(
    props.faqs.map((faq) => ({ ...faq, isOpen: faq.isOpen ?? false }))
  )

  watch(
    () => props.faqs,
    (newFaqs) => {
      localFaqs.value = newFaqs.map((faq) => ({ ...faq, isOpen: faq.isOpen ?? false }))
    },
    { deep: true }
  )

  const toggleFaq = (index: number) => {
    const faq = localFaqs.value[index]
    if (faq) {
      faq.isOpen = !faq.isOpen
    }
  }
</script>
