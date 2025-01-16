<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  class?: string
  isFullWidth?: boolean
  disabledDefaultPadding?: boolean
}

const props = defineProps<Props>()
const classProp = props.class ?? ''
const isFullWidth = props.isFullWidth ?? false
const disabledDefaultPadding = props.disabledDefaultPadding ?? false
const classes = computed(() => {
  return [
    classProp,
    isFullWidth ? 'w-full' : 'max-w-[1440px] mx-auto',
    disabledDefaultPadding ? '' : 'px-[.625rem] lg:px-0'
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>