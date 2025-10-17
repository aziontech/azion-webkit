<template>
  <section
    :id="id"
    class="text-white relative overflow-hidden max-w-xl xxxl:max-w-xxl mx-auto"
    :class="padding[spacing ?? 'default']"
  >
    <canvas
      v-if="animatedBackground"
      ref="canvasRef"
      class="absolute inset-0 w-full h-full"
    />

    <div class="mx-auto flex flex-col text-center gap-2 md:gap-3 relative z-10">
      <p
        v-if="overline"
        class="text-orange-500 font-proto-mono text-base tracking-tight uppercase mb-1"
      >
        {{ overline }}
      </p>
      <h1 class="mx-auto max-w-sm md:max-w-7xl md:display-1 display-2 font-sora leading-tight text-pretty">
        {{ title }}
      </h1>
      <p class="text-xs lg:text-base max-w-sm md:max-w-7xl mb-3 text-neutral-200 font-sora mx-auto">
        {{ subtitle }}
      </p>
      <template v-if="limitedButtons.length > 0">
        <div class="flex justify-center gap-2 md:gap-5 mt-4 md:mt-0 flex-col items-center md:flex-row">
          <Button
            v-for="button in limitedButtons"
            :size="button.size || 'small'"
            :icon="button.icon"
            :type="button.type || 'primary'"
            :theme="button.theme || 'light'"
            v-bind="button"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref, onMounted, onUnmounted } from 'vue'
  import Button from '../../components/Button/Button.vue'

  export interface HeroButtonProps {
    label: string
    size?: 'small' | 'large'
    type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
    href: string
    icon?: string
    theme?: string
    customClass?: string
  }

  interface HeroProps {
    overline?: string
    title?: string
    subtitle?: string
    buttons?: HeroButtonProps[]
    spacing?: 'none' | 'small' | 'default' | 'large'
    id?: string
    animatedBackground?: boolean
  }

  const props = withDefaults(defineProps<HeroProps>(), {
    title: '',
    subtitle: '',
    buttons: () => [],
    animatedBackground: false
  })

  const limitedButtons = computed(() => {
    return props.buttons?.slice(0, 2) || []
  })

  const padding = {
    none: 'py-0',
    small: 'py-5 lg:py-10 xl:py-16 2xl:py-20',
    default: 'py-10 lg:py-20 xl:py-30 2xl:py-40',
    large: 'py-14 lg:py-30 xl:py-40 2xl:py-48'
  }

  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let animationFrameId: number | null = null

  interface Line {
    startX: number
    startY: number
    endX: number
    endY: number
    progress: number
    direction: 'horizontal' | 'vertical'
    opacity: number
  }

  const lines: Line[] = []

  const initAnimatedBackground = () => {
    if (!props.animatedBackground || !canvasRef.value) return

    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSpacing = 38
    const dotSize = 2
    const lineOpacity = 0.6
    const lineSpeed = 0.008

    const createRandomLine = () => {
      const cols = Math.floor(canvas.width / gridSpacing)
      const rows = Math.floor(canvas.height / gridSpacing)

      const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical'

      if (direction === 'horizontal') {
        const row = Math.floor(Math.random() * rows)
        const startCol = Math.floor(Math.random() * (cols - 3))
        const length = Math.floor(Math.random() * 5) + 3

        lines.push({
          startX: startCol * gridSpacing,
          startY: row * gridSpacing,
          endX: (startCol + length) * gridSpacing,
          endY: row * gridSpacing,
          progress: 0,
          direction: 'horizontal',
          opacity: 0
        })
      } else {
        const col = Math.floor(Math.random() * cols)
        const startRow = Math.floor(Math.random() * (rows - 3))
        const length = Math.floor(Math.random() * 5) + 3

        lines.push({
          startX: col * gridSpacing,
          startY: startRow * gridSpacing,
          endX: col * gridSpacing,
          endY: (startRow + length) * gridSpacing,
          progress: 0,
          direction: 'vertical',
          opacity: 0
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid dots as squares
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          ctx.fillStyle = '#404040'
          ctx.fillRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize)
        }
      }

      ctx.lineWidth = 2
      ctx.lineCap = 'round'

      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i]
        line.progress += lineSpeed

        if (line.progress < 0.25) {
          line.opacity = Math.pow(line.progress / 0.25, 2)
        } else if (line.progress > 0.75) {
          line.opacity = Math.pow((1 - line.progress) / 0.25, 2)
        } else {
          line.opacity = 1
        }

        // Remove completed lines
        if (line.progress > 1.1) {
          lines.splice(i, 1)
          continue
        }

        const totalLength = Math.sqrt(
          Math.pow(line.endX - line.startX, 2) +
          Math.pow(line.endY - line.startY, 2)
        )

        const currentLength = totalLength * Math.min(line.progress, 1)
        const angle = Math.atan2(line.endY - line.startY, line.endX - line.startX)

        const currentEndX = line.startX + Math.cos(angle) * currentLength
        const currentEndY = line.startY + Math.sin(angle) * currentLength

        ctx.strokeStyle = `rgba(100, 100, 100, ${lineOpacity * line.opacity})`
        ctx.beginPath()
        ctx.moveTo(line.startX, line.startY)
        ctx.lineTo(currentEndX, currentEndY)
        ctx.stroke()
      }

      if (Math.random() < 0.1 && lines.length < 5) {
        createRandomLine()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }

  onMounted(() => {
    if (props.animatedBackground) {
      initAnimatedBackground()
    }
  })

  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    lines.length = 0
  })
</script>
