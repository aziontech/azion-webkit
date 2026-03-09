<script setup lang="ts">
import { ref, computed } from 'vue';

/**
 * DemoPreview Component
 * 
 * Renders component demos with optional code display.
 * Supports interactive previews and code snippets.
 */

interface Props {
  title?: string;
  showCode?: boolean;
  codeLanguage?: string;
  responsive?: boolean;
  backgroundColor?: 'white' | 'gray' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  showCode: true,
  codeLanguage: 'vue',
  responsive: false,
  backgroundColor: 'white',
});

const isCodeVisible = ref(props.showCode);

const bgClass = computed(() => {
  switch (props.backgroundColor) {
    case 'gray':
      return 'bg-gray-50';
    case 'dark':
      return 'bg-gray-800';
    default:
      return 'bg-white';
  }
});
</script>

<template>
  <div class="demo-preview my-6">
    <!-- Demo Title -->
    <div v-if="title" class="demo-preview__header mb-3">
      <h4 class="text-sm font-medium text-text-secondary">{{ title }}</h4>
    </div>
    
    <!-- Preview Area -->
    <div
      :class="[
        'demo-preview__content border border-gray-200 rounded-lg p-6',
        bgClass,
        { 'overflow-x-auto': responsive }
      ]"
    >
      <slot />
    </div>
    
    <!-- Code Toggle -->
    <div v-if="showCode" class="demo-preview__code-toggle mt-3">
      <button
        @click="isCodeVisible = !isCodeVisible"
        class="text-sm text-text-secondary hover:text-primary-600 flex items-center gap-1.5 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        {{ isCodeVisible ? 'Hide code' : 'Show code' }}
      </button>
    </div>
    
    <!-- Code Block -->
    <div v-if="isCodeVisible && $slots.code" class="demo-preview__code mt-3">
      <div class="bg-gray-900 rounded-lg overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span class="text-xs text-gray-400 font-code">{{ codeLanguage }}</span>
          <button class="text-xs text-gray-400 hover:text-white transition-colors">
            Copy
          </button>
        </div>
        <pre class="p-4 overflow-x-auto"><code class="text-sm text-gray-100"><slot name="code" /></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-preview__content {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
