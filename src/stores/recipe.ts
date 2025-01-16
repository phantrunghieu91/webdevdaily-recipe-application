import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { RecipeType } from '@/types';

const fields = 'select=id,name,cookTimeMinutes,caloriesPerServing,rating,reviewCount,image,ingredients,instructions';

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<RecipeType[]>([]);
  const loading = ref(false);
  const error = ref('');

  const getPreviewRecipes = computed(() => recipes.value.slice(0, 12).sort((a, b) => a.id - b.id));
  const getRecipeByID = (id: number): RecipeType | undefined => recipes.value.find(recipe => recipe.id === id);

  async function fetchPreviewRecipes() {
    loading.value = true;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}?limit=12&${fields}`);
      const data = await response.json();
      recipes.value = data.recipes;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  async function fetchRecipeByID(id: number): Promise<RecipeType | null> {
    let recipe = getRecipeByID(id);
    if (recipe) {
      return recipe;
    }

    loading.value = true;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}?${fields}`);
      if (!response.ok) {
        error.value = 'Recipe not found';
        return null;
      }
      const data: RecipeType = await response.json();
      recipe = data;
      recipes.value.push(data!);
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
    return recipe ?? null;
  }

  return { getPreviewRecipes, getRecipeByID, fetchRecipeByID, fetchPreviewRecipes, loading, error };
});
