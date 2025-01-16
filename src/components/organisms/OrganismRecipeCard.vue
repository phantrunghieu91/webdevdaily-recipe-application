<script setup lang="ts">
import type { RecipeMetaIconType, RecipeType } from '@/types';
import OrganismRecipeMeta from './OrganismRecipeMeta.vue';
import AtomButton from '../atoms/AtomButton.vue';

const props = defineProps<{
  recipe: RecipeType;
}>();

const { recipe } = props;
const recipeMetaItems : {icon: RecipeMetaIconType, text: string}[] = [
  { icon: 'clock', text: `${recipe.cookTimeMinutes}` },
  { icon: 'fire', text: `${recipe.caloriesPerServing}` },
  { icon: 'star', text: `${recipe.rating} (${recipe.reviewCount})` },
];
</script>
<template>
  <article class="rounded-lg overflow-hidden border shadow-md">
    <img :src="recipe.image" :alt="recipe.name" class="w-full aspect-square" />
    <div class="px-4 py-6">
      <h3 class="mb-2">{{ recipe.name }}</h3>
      <OrganismRecipeMeta :meta-items="recipeMetaItems"/>
      <AtomButton :buttonLink="`/recipe/${recipe.id}`">View</AtomButton>
    </div>
  </article>
</template>