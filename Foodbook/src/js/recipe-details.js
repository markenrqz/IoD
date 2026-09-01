// Get the recipe ID from the URL
export const getRecipeId = () => {
  const urlParameters = new URLSearchParams(window.location.search);
  return urlParameters.get("id");
};

// Find the recipe with the matching ID
export const findRecipeById = (recipes, recipeId) => {
  return recipes.find((recipe) => String(recipe.id) === String(recipeId));
};

// Convert text into an array
export const convertTextToList = (text) => {
  if (!text) {
    return [];
  }

  return text
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "");
};

// Display items inside a list
export const displayListItems = (items, listElement) => {
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
};

// Display the selected recipe
export const displayRecipeDetails = (recipe, elements) => {
  elements.title.textContent = recipe.title || "No title";
  elements.description.textContent =
    recipe.description || "No description available.";
  elements.cuisine.textContent = recipe.cuisine || "Not available";
  elements.course.textContent = recipe.course || "Not available";
  elements.mainIngredient.textContent =
    recipe.mainIngredient || "Not available";
  elements.time.textContent = `${recipe.totalTime || 0} minutes`;
  elements.servings.textContent = recipe.servings || "Not available";
  elements.calories.textContent = recipe.calories || "Not available";
  elements.fat.textContent = recipe.fat || "Not available";
  elements.carbohydrate.textContent = recipe.carbohydrate || "Not available";
  elements.fiber.textContent = recipe.fiber || "Not available";
  elements.protein.textContent = recipe.protein || "Not available";
  elements.image.src = recipe.photoUrl || "images/recipe-placeholder.png";
  elements.image.alt = recipe.title || "Recipe image";

  const ingredients = convertTextToList(recipe.ingredients);
  const directions = convertTextToList(recipe.directions);
  displayListItems(ingredients, elements.ingredientsList);
  displayListItems(directions, elements.directionsList);
};
