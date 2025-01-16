<template>
  <div class="mb-4 flex flex-wrap gap-4 lg:gap-8">
    <MoleculeRecipeMetaItem v-for="(item, index) in props.metaItems" :key="index" :icon="item.icon" :text="item.text" />
  </div>
</template>
<script setup lang="ts">
import MoleculeRecipeMetaItem from '@/components/molecules/MoleculeRecipeMetaItem.vue';
import type { RecipeMetaIconType } from '@/types';

const props = defineProps<{
  metaItems: { icon: RecipeMetaIconType; text: string }[]
}>()
</script>