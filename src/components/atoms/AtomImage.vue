<template>
  <div :class="classes">
    <img 
      v-if="isLoading || hasError" 
      :src="placeholder" 
      alt="placeholder" 
      class="w-full h-full object-cover animate-pulse" 
    />

    <img
      v-show="!isLoading && !hasError" 
      :src="src"
      :alt="alt || 'image'" 
      @load="onLoad"
      @error="onError"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  class?: string;
  src: string;
  alt?: string; // Optional alt text
  placeholder?: string; // Optional placeholder image
}>();
const classes = [
  "w-full",
  props.class || "",
];

// State to track loading and error
const isLoading = ref(true);
const hasError = ref(false);

// Default placeholder image
const defaultPlaceholder = "https://placehold.co/300x300";

// Use the provided placeholder or fallback to the default one
const placeholder = props.placeholder || defaultPlaceholder;

// Event handlers
const onLoad = () => {
  isLoading.value = false;
};

const onError = () => {
  hasError.value = true;
  isLoading.value = false;
};

// Watch for changes to `src` prop and reset state
watch(
  () => props.src,
  () => {
    isLoading.value = true;
    hasError.value = false;
  }
);
</script>