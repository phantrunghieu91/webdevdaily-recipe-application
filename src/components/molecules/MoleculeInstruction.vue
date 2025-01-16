<template>
  <div class="py-6">
    <h2 class="text-3xl mb-4">Instructions</h2>
    <ol class="flex flex-col gap-2 counter-list">
      <li v-for="(item, index) in instructions" :key="index" class="counter-item flex gap-2 before:bg-primary before:text-white">{{ item }}</li>
    </ol>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  instructions: string[]
}>()
</script>
<style scoped>
.counter-list {
  counter-reset: list-counter;
}
.counter-item {
  counter-increment: list-counter;
}
.counter-item::before {
  content: counter(list-counter);
  flex: 0 0 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 100%;
}
</style>