const API_URL = "https://api.sampleapis.com/recipes/recipes";

export const getRecipes = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch recipes");
  }

  const recipes = await response.json();

  return recipes;
};
