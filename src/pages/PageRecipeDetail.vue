<template>
  <section v-if="loading" class="py-10">
    <AtomContainer>Loading...</AtomContainer>
  </section>
  <section v-else class="py-10">
    <div v-if="recipe === null">No recipe</div>
    <AtomContainer v-else class="max-w-[768px]">
      <header class="mb-4 border-b border-gray-200">
        <h1 class="text-6xl mb-4">{{ recipe.name }}</h1>
        <OrganismRecipeMeta :meta-items="recipeMetaItems" />
      </header>
      <AtomImage :src="recipe.image" :alt="recipe.name" class="w-full aspect-video" />
      <MoleculeIngredientsList :ingredients="recipe.ingredients" />
      <MoleculeInstruction :instructions="recipe.instructions" />
    </AtomContainer>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRecipeStore } from '@/stores/recipe';
import { useRoute } from 'vue-router';
import type { RecipeMetaIconType, RecipeType } from '@/types';
import AtomContainer from '@/components/atoms/AtomContainer.vue';
import AtomImage from '@/components/atoms/AtomImage.vue';
import MoleculeIngredientsList from '@/components/molecules/MoleculeIngredientsList.vue';
import OrganismRecipeMeta from '@/components/organisms/OrganismRecipeMeta.vue';
import MoleculeInstruction from '@/components/molecules/MoleculeInstruction.vue';

const route = useRoute();
const id = Number(route.params.id as unknown);

const recipeStore = useRecipeStore();
const recipe = ref<RecipeType | null>(null)
const loading = computed(() => recipeStore.loading);
let recipeMetaItems: { icon: RecipeMetaIconType, text: string }[] = [];

onMounted(async () => {
  try {
    const response = await recipeStore.fetchRecipeByID(id);
    recipe.value = response;
    if (recipe.value !== null) {
      recipeMetaItems = [
        { icon: 'clock', text: `${recipe.value.cookTimeMinutes}` },
        { icon: 'fire', text: `${recipe.value.caloriesPerServing}` },
        { icon: 'star', text: `${recipe.value.rating} (${recipe.value.reviewCount})` },
      ]
    }
  } catch (error) {
    console.error(error);
  }
});
</script>