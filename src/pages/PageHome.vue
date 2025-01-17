<script setup lang="ts">
import OrganismHeroBanner from '@/components/organisms/OrganismHeroBanner.vue';
import TemplateRecipeList from '@/components/templates/TemplateRecipeList.vue';
import { useTemplateRef } from 'vue';
type RecipeListRef = InstanceType<typeof TemplateRecipeList>;
const recipeListEl = useTemplateRef<RecipeListRef>('recipeList');

const handleScrollToRecipeList = () : void => {
  if(recipeListEl.value) {
    recipeListEl.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
<template>
  <OrganismHeroBanner :button-text="'Browse Recipes'" :button-click-handler="handleScrollToRecipeList"
    :banner-class="'py-16 bg-gray-200'" 
    :banner-inner-class="'grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16'"
    :banner-title="'Master the Kitchen with Ease: Unleash Your Inner Chef Today!'"
    :banner-description="'Discover recipes helping you to find the easiest way to cook.'"
    :banner-image-url="'https://cdn.dummyjson.com/recipe-images/1.webp'" />
  <TemplateRecipeList ref="recipeList" />
</template>