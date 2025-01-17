<template>
  <div class="py-6">
    <h2 class="text-3xl mb-4">Ingredients</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
      <li v-for="(item, index) in ingredients" :key="index">
        <AtomCheckbox>{{ item }}</AtomCheckbox>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import AtomCheckbox from '../atoms/AtomCheckbox.vue';

const props = defineProps<{
  ingredients: string[]
}>()
</script>