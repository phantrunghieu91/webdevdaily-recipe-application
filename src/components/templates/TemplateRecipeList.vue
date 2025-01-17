<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import type { RecipeType } from '@/types';
import { ref, onMounted, computed, useTemplateRef } from 'vue';
import OrganismRecipeCard from '../organisms/OrganismRecipeCard.vue';
import AtomContainer from '../atoms/AtomContainer.vue';
import MoleculeSectionHeader from '../molecules/MoleculeSectionHeader.vue';

const recipeStore = useRecipeStore();
const recipes = ref<RecipeType[]>([])
const loading = computed(() => recipeStore.loading);
const recipeListEl = useTemplateRef<HTMLElement>('recipeList');

onMounted(async () => {
  if(recipeStore.getPreviewRecipes.length === 0 || recipeStore.getPreviewRecipes.length < 12) {
    await recipeStore.fetchPreviewRecipes();
  }
  recipes.value = recipeStore.getPreviewRecipes;
})

defineExpose({
  recipeListEl
})
</script>

<template>
  <section class="py-10" ref="recipeList">
    <AtomContainer>
      <MoleculeSectionHeader :title="'Discover, create, share'" :desc="'Check out our most popular recipes!'" />
      <template v-if="loading">
        <div>Loading...</div>
      </template>
      <template v-else>
        <div v-if="recipes.length == 0">No recipe.</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          <OrganismRecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </template>
    </AtomContainer>
  </section>
</template>