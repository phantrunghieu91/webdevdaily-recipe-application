<script setup lang="ts">
import { RouterLink } from 'vue-router'
interface Props {
  buttonText?: string,
  buttonLink?: string,
  handleClick?: () => void
}
const props = defineProps<Props>()
const classes = 'py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-color duration-300 w-fit'
</script>

<template>
  <button :class="classes" v-if="!props.buttonLink" @click="props.handleClick">
    <slot />
  </button>
  <RouterLink :to="props.buttonLink" :class="classes" v-else>
    <slot />
  </RouterLink>
</template>