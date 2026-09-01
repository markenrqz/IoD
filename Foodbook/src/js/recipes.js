// Get random recipes for the Home page
export const getFeaturedRecipes = (recipes, amount = 4) => {
  const copiedRecipes = [...recipes];
  copiedRecipes.sort(() => Math.random() - 0.5);
  return copiedRecipes.slice(0, amount);
};

// Display recipe cards
export const displayRecipeCards = (recipes, container, template) => {
  recipes.forEach((recipe) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".recipe-title").textContent =
      recipe.title || "No title";
    card.querySelector(".recipe-cuisine").textContent =
      recipe.cuisine || "Not available";
    card.querySelector(".recipe-ingredient").textContent =
      recipe.mainIngredient || "Not available";
    card.querySelector(".recipe-time").textContent = `${
      recipe.totalTime || 0
    } minutes`;

    const image = card.querySelector(".recipe-image");
    image.src = recipe.photoUrl || "images/recipe-placeholder.png";
    image.alt = recipe.title || "Recipe image";
    const recipeLink = card.querySelector(".recipe-link");
    recipeLink.href = `recipe.html?id=${recipe.id}`;
    container.appendChild(card);
  });
};

// Filter recipes
export const filterRecipes = (
  recipes,
  searchText,
  cuisineValue,
  courseValue
) => {
  const search = searchText.toLowerCase();
  return recipes.filter((recipe) => {
    const title = (recipe.title || "").toLowerCase();
    const ingredient = (recipe.mainIngredient || "").toLowerCase();
    const matchesSearch = title.includes(search) || ingredient.includes(search);
    const matchesCuisine =
      cuisineValue === "" || recipe.cuisine === cuisineValue;
    const matchesCourse = courseValue === "" || recipe.course === courseValue;
    return matchesSearch && matchesCuisine && matchesCourse;
  });
};

// Get unique cuisine or course values
export const getUniqueValues = (recipes, property) => {
  const values = recipes.map((recipe) => recipe[property]);
  const availableValues = values.filter((value) => value);
  const uniqueValues = [...new Set(availableValues)];
  return uniqueValues.sort();
};

// Add values to dropdowns
export const addFilterOptions = (values, selectElement) => {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
};
