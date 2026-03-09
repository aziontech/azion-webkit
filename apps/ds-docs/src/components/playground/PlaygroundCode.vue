<script setup lang="ts">
import { ref, computed } from 'vue';
import type { GeneratedCode } from './types';

/**
 * PlaygroundCode
 * 
 * Displays the generated code snippet with syntax highlighting
 * and copy-to-clipboard functionality.
 */

interface Props {
  code: GeneratedCode;
  showCopy?: boolean;
  initiallyExpanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showCopy: true,
  initiallyExpanded: true,
});

const emit = defineEmits<{
  copy: [code: string];
}>();

const isExpanded = ref(props.initiallyExpanded);
const isCopied = ref(false);

// Format code for display
const formattedCode = computed(() => props.code.code);

// Copy to clipboard
async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code.code);
    isCopied.value = true;
    emit('copy', props.code.code);
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
  }
}

// Toggle code visibility
function toggleCode() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div class="playground-code">
    <!-- Header -->
    <div class="playground-code__header">
      <button
        class="playground-code__toggle"
        @click="toggleCode"
      >
        <svg
          :class="['w-4 h-4 transition-transform', { 'rotate-90': isExpanded }]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-sm font-medium">Code</span>
      </button>

      <button
        v-if="showCopy && isExpanded"
        class="playground-code__copy"
        @click="copyCode"
      >
        <svg
          v-if="!isCopied"
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg
          v-else
          class="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-xs">{{ isCopied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>

    <!-- Code content -->
    <div
      v-show="isExpanded"
      class="playground-code__content"
    >
      <pre class="playground-code__pre"><code class="playground-code__code">{{ formattedCode }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.playground-code {
  border-top: 1px solid #e5e7eb;
  overflow: hidden;
}

.playground-code__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: #f9fafb;
}

.playground-code__toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: #374151;
  background: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.playground-code__toggle:hover {
  background-color: #e5e7eb;
}

.playground-code__copy {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.playground-code__copy:hover {
  color: #111827;
  background-color: #e5e7eb;
}

.playground-code__content {
  background-color: #1f2937;
  overflow-x: auto;
}

.playground-code__pre {
  margin: 0;
  padding: 1rem;
}

.playground-code__code {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: #e5e7eb;
  white-space: pre;
}
</style>
