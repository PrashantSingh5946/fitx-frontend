import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Recipe from "../../../pages/recipe/Recipe";

// Define a type for the slice state
export interface Recipe {
  name: string;
  ingredients: string[];
  description: string;
  instructions: string[];
  macros_per_100g: MacroPer100g;
  calories: number;
  dietary_restrictions: DietaryRestriction;
  allergy_warning: string;
}

export interface MacroPer100g {
  carbs: number;
  protein: number;
  fats: number;
  fibre: number;
}

const initialState: { currentRecipe: Recipe | null } = {
  currentRecipe: null,
};

export type DietaryRestriction =
  | "vegetarian"
  | "non-vegetarian"
  | "vegan"
  | "gluten-free"
  | "other";

export const recipeSlice = createSlice({
  name: "recipe",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentRecipe: (state, action: PayloadAction<Recipe>) => {
      console.log(action.payload);

      return { ...state, currentRecipe: action.payload };
    },
  },
});

export const { setCurrentRecipe } = recipeSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default recipeSlice.reducer;
