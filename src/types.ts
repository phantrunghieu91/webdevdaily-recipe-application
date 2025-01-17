export type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
  image: string;
}

export type RecipeMetaIconType = 'clock' | 'fire' | 'star';