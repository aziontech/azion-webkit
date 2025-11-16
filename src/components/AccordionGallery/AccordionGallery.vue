<template>
  <div
    class="accordion-gallery w-full"
    style="padding: 64px 30px"
  >
    <div class="hidden lg:flex gap-8">
      <div class="w-1/2 space-y-4 flex-shrink-0">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="cursor-pointer transition-all duration-300 font-sora p-1 border border-neutral-800 relative before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 will-change-[transform,opacity]"
          :class="isActive(index) ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
          @click="setActiveIndex(index)"
        >
          <div
            class="flex flex-col p-6 before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:top-0 after:right-0"
          >
            <div
              v-if="isActive(index) && showProgress"
              class="relative h-[2px] bg-white/20 mb-6"
            >
              <div
                class="h-full bg-violet-300 transition-all duration-100 will-change-[width]"
                :style="{ width: `${progress}%` }"
              />
            </div>

            <div class="step-content">
              <h2
                class="font-normal mb-4"
                :class="isActive(index) ? 'display-3 text-violet-300' : 'text-xl text-white'"
              >
                {{ item.title }}
              </h2>
              <ul class="text-white/70 text-base leading-[1.6em] font-sora">
                <li
                  v-for="(point, idx) in item.points"
                  :key="idx"
                  class="font-sora text-sm"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-1/2 images-gallery relative rounded-xl overflow-hidden bg-neutral-900 min-h-[600px]"
      >
        <img
          v-for="(item, index) in items"
          :key="index"
          :src="item.backgroundImage"
          :alt="item.title"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-xl"
          :style="{ opacity: isActive(index) ? 1 : 0 }"
        />
      </div>
    </div>

    <div class="lg:hidden space-y-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer transition-all duration-300 font-sora p-1 border border-neutral-800 relative before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 will-change-[transform,opacity]"
        :class="isActive(index) ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
        @click="setActiveIndex(index)"
      >
        <div
          class="flex p-6 before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:top-0 after:right-0"
          :class="isActive(index) ? 'flex-col' : 'flex-row items-center justify-between'"
        >
          <div
            class="step-content"
            :class="isActive(index) ? 'w-full' : 'flex-1'"
          >
            <div
              v-if="isActive(index) && showProgress"
              class="relative h-[2px] bg-white/20 mb-6"
            >
              <div
                class="h-full bg-violet-300 transition-all duration-100 will-change-[width]"
                :style="{ width: `${progress}%` }"
              />
            </div>

            <h2
              class="font-normal mb-4"
              :class="isActive(index) ? 'display-3 text-violet-300' : 'text-xl text-white'"
            >
              {{ item.title }}
            </h2>
            <ul class="text-white/70 text-base leading-[1.6em] font-sora">
              <li
                v-for="(point, idx) in item.points"
                :key="idx"
                class="font-sora text-sm"
              >
                {{ point }}
              </li>
            </ul>
          </div>

          <div
            v-if="isActive(index)"
            class="images-gallery relative rounded-xl overflow-hidden bg-neutral-900 mt-6 h-[600px]"
          >
            <img
              :src="item.backgroundImage"
              :alt="item.title"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const props = defineProps({
    items: { type: Array, required: true },
    autoPlay: { type: Boolean, default: true },
    autoPlayInterval: { type: Number, default: 5000 },
    showProgress: { type: Boolean, default: true }
  })

  const activeIndex = ref(0)
  const progress = ref(0)
  let autoPlayTimer = null
  let progressTimer = null

  const isActive = (index) => activeIndex.value === index
  const formatNumber = (index) => String(index + 1).padStart(2, '0')

  const setActiveIndex = (index) => {
    activeIndex.value = index
    progress.value = 0
    if (props.autoPlay) resetAutoPlay()
  }

  const clearTimers = () => {
    if (autoPlayTimer) clearInterval(autoPlayTimer)
    if (progressTimer) clearInterval(progressTimer)
  }

  const startProgress = () => {
    if (!props.showProgress) return
    if (progressTimer) clearInterval(progressTimer)

    progress.value = 0
    const increment = 100 / (props.autoPlayInterval / 100)

    progressTimer = setInterval(() => {
      progress.value = Math.min(progress.value + increment, 100)
    }, 100)
  }

  const startAutoPlay = () => {
    if (!props.autoPlay) return

    clearTimers()
    startProgress()

    autoPlayTimer = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % props.items.length
      startProgress()
    }, props.autoPlayInterval)
  }

  const resetAutoPlay = () => {
    clearTimers()
    startAutoPlay()
  }

  onMounted(() => props.autoPlay && startAutoPlay())
  onUnmounted(clearTimers)
</script>
