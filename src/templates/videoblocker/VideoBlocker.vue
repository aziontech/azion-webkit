<template>
  <BaseModal
    backgroundColor="outlined"
    :disableVisibilityToggle="disableVisibilityToggle"
    @update:visible="onModalVisibilityChange"
  >
    <template #action>
      <div class="relative flex items-center justify-center group">
        <img
          class="hide-on-light"
          width="auto"
          height="340"
          fetchpriority="high"
          :alt="video.image.alt"
          :src="video.image.dark.src"
        />

        <img
          class="hide-on-dark"
          width="auto"
          height="340"
          fetchpriority="high"
          :alt="video.image.alt"
          :src="video.image.light.src"
        />

        <div class="absolute z-10 opacity-50 transition-all ease group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            viewBox="0 0 45 45"
          >
            <g id="play button">
              <g id="Subtract">
                <mask id="path-1-inside-1_8160_2062">
                  <path
                    fill-rule="evenodd"
                    d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z"
                    clip-rule="evenodd"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z"
                  clip-rule="evenodd"
                />
                <path
                  d="m19 33.3 2 2.3-2-2.3ZM31 23l2 2.3-2-2.3Zm0-1.5-1.9 2.3 2-2.3ZM19 11.3 21 9l-2 2.3Zm22.8 11.1c0 10.8-8.6 19.4-19.4 19.4v6c14 0 25.4-11.3 25.4-25.4h-6ZM22.4 3c10.8 0 19.4 8.7 19.4 19.4h6C47.8 8.4 36.5-3 22.4-3v6ZM3 22.4C3 11.7 11.7 3 22.4 3v-6C8.4-3-3 8.4-3 22.4h6Zm19.4 19.4A19.4 19.4 0 0 1 3 22.4h-6c0 14 11.4 25.4 25.4 25.4v-6Zm-2-9.2V12h-6v20.5h6ZM17 31a2 2 0 0 1 3.4 1.5h-6a4 4 0 0 0 6.6 3L17 31Zm12.1-10.4L17.1 31l3.9 4.5 12-10.3-3.9-4.6Zm0 3a2 2 0 0 1 0-3l4 4.6a4 4 0 0 0-.1-6.1l-4 4.7Zm-12-10 12 10 3.9-4.5L21 9l-4 4.6Zm3.3-1.6a2 2 0 0 1-3.3 1.5L20.9 9a4 4 0 0 0-6.5 3h6Z"
                  mask="url(#path-1-inside-1_8160_2062)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </template>

    <template #content>
      <div
        v-show="!showForm"
        class="md:aspect-video lg:h-[480px] md:h-[400px] h-[220px] rounded relative"
      >
        <iframe
          ref="youtubeIframe"
          :src="computedSrc"
          :title="video.title"
          class="h-full w-full rounded"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          @load="onIframeLoad"
        />
        <div
          v-if="!formIsSubmitted"
          class="absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-20 transition-all duration-300 cursor-pointer z-10"
          @click="loadForm"
          @mouseenter="showOverlay = true"
          @mouseleave="showOverlay = false"
        ></div>
      </div>
      <div
        v-if="showForm"
        class="form border surface-border rounded-md p-4 md:p-8 flex flex-col gap-8"
      >
        <form
          data-form
          class="hbspt-form"
        >
          <p
            class="mb-6 font-medium text-xl"
            :class="{ hidden: formIsSubmitted }"
          >
            {{ form.title }}
          </p>
          <div class="field-wrap"></div>
        </form>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import BaseModal from '../basemodal'

  const props = defineProps({
    video: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          ['id', 'title', 'image'].every((key) => key in value) &&
          ['alt', 'dark', 'light'].every((key) => key in value.image) &&
          ['src'].every((key) => key in value.image.dark && key in value.image.light)
        )
      }
    },
    form: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          ['hubspot', 'title'].every((key) => key in value) &&
          ['formId', 'companyId'].every((key) => key in value.hubspot)
        )
      }
    },
    disableVisibilityToggle: {
      type: Boolean,
      required: false,
      default: false
    },
    timerDuration: {
      type: Number,
      required: false,
      default: 10000,
      validator: (value) => value >= 0
    }
  })

  const youtubeIframe = ref(null)
  const showForm = ref(false)
  const timerStarted = ref(false)
  const timer = ref(null)
  const formSubmitted = ref(false)
  const showOverlay = ref(false)
  const formIsSubmitted = ref(false)

  const computedSrc = computed(() => {
    return `https://www.youtube.com/embed/${props.video.id}?t=${transformMillisecondsToSeconds(formIsSubmitted) ? props.timerDuration : 0}&autoplay=1&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`
  })

  let player = null

  function onIframeLoad() {
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(youtubeIframe.value, {
        events: {
          onStateChange: onPlayerStateChange
        }
      })
    }

    if (window.YT && window.YT.Player) {
      player = new window.YT.Player(youtubeIframe.value, {
        events: {
          onStateChange: onPlayerStateChange
        }
      })
    }
  }

  function transformMillisecondsToSeconds(milliseconds) {
    return milliseconds / 1000
  }
  function onPlayerStateChange(event) {
    if (event.data === 1 && !timerStarted.value) {
      timerStarted.value = true
      timer.value = setTimeout(() => {
        if (player && player.pauseVideo) {
          player.pauseVideo()
        }
        showForm.value = true
        loadHubSpotScript()
          .then(() => {
            createHubSpotForm()
          })
          .catch((error) => {
            console.error('Error loading HubSpot form:', error)
          })
      }, props.timerDuration)
    }
  }

  function onModalVisibilityChange(isVisible) {
    if (isVisible && showForm.value) {
      loadHubSpotScript().then(() => {
        createHubSpotForm()
      })
    }
  }

  function loadForm() {
    loadHubSpotScript().then(() => {
      createHubSpotForm()
    })
  }

  function playVideo() {
    if (!player && !player.playVideo) return;
    player.playVideo()

    if (formSubmitted.value) {
        player.seekTo(transformMillisecondsToSeconds(props.timerDuration), true)
    }
  }

  const loadHubSpotScript = async () => {
    showForm.value = true
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
        portalId: props.form.hubspot.companyId,
        formId: props.form.hubspot.formId,
        target: '.field-wrap',
        onFormSubmitted: function () {
          formIsSubmitted.value = true
          formSubmitted.value = true
          showForm.value = false
          playVideo()
        }
      })
    }
  }
</script>
