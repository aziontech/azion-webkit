import { computed, ComputedRef, Ref } from 'vue'

/**
 * Splits an object path into its main path and suffix parts.
 * 
 * @param objectPath - Reactive reference to the object path string
 * @returns Object containing reactive path and suffix computed properties
 * 
 * @example
 * // For "colors.primary.500"
 * // Returns: { path: "colors.primary", suffix: ".500" }
 * 
 * // For "simple"
 * // Returns: { path: "simple", suffix: "" }
 */
export function splitStringColor(objectPath: Ref<string>): {
  path: ComputedRef<string>
  suffix: ComputedRef<string>
} {
  const lastDotIndex = computed(() => objectPath.value.lastIndexOf('.'))
  const hasNoSuffix = computed(() => lastDotIndex.value === -1)

  const path = computed(() => 
    hasNoSuffix.value 
      ? objectPath.value 
      : objectPath.value.slice(0, lastDotIndex.value)
  )

  const suffix = computed(() => 
    hasNoSuffix.value 
      ? '' 
      : objectPath.value.slice(lastDotIndex.value)
  )

  return { path, suffix }
}