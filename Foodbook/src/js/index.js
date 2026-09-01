import { getRecipes } from "./api.js";

import {
  getFeaturedRecipes,
  displayRecipeCards,
  filterRecipes,
  getUniqueValues,
  addFilterOptions,
} from "./recipes.js";

import {
  getRecipeId,
  findRecipeById,
  displayRecipeDetails,
} from "./recipe-details.js";

console.log("Foodbook started");

// Common elements
const currentYear = document.querySelector("#current-year");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#main-navigation");

// Recipe card template
const recipeTemplate = document.querySelector("#recipe-card-template");

// Home page
const featuredContainer = document.querySelector("#featured-recipes");

// Recipes page
const recipesContainer = document.querySelector("#all-recipes");
const searchInput = document.querySelector("#recipe-search");
const cuisineFilter = document.querySelector("#cuisine-filter");
const courseFilter = document.querySelector("#course-filter");
const clearButton = document.querySelector("#clear-filters-button");
const recipeCount = document.querySelector("#recipe-count");
const noRecipesMessage = document.querySelector("#no-recipes-message");

// Recipe details page
const recipeDetailsContainer = document.querySelector("#recipe-details");
const detailsTitle = document.querySelector("#details-title");
const detailsImage = document.querySelector("#details-image");
const detailsCuisine = document.querySelector("#details-cuisine");
const detailsCourse = document.querySelector("#details-course");
const detailsMainIngredient = document.querySelector(
  "#details-main-ingredient"
);
const detailsTime = document.querySelector("#details-time");
const detailsServings = document.querySelector("#details-servings");
const detailsDescription = document.querySelector("#details-description");
const detailsCalories = document.querySelector("#details-calories");
const detailsFat = document.querySelector("#details-fat");
const detailsCarbohydrate = document.querySelector("#details-carbohydrate");
const detailsFiber = document.querySelector("#details-fiber");
const detailsProtein = document.querySelector("#details-protein");
const ingredientsList = document.querySelector("#ingredients-list");
const directionsList = document.querySelector("#directions-list");

// Footer year
const setupCurrentYear = () => {
  currentYear.textContent = new Date().getFullYear();
};

// Mobile menu
const setupMobileMenu = () => {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
};

// Home page
const loadHomePage = async () => {
  try {
    const recipes = await getRecipes();
    const featuredRecipes = getFeaturedRecipes(recipes, 4);
    displayRecipeCards(featuredRecipes, featuredContainer, recipeTemplate);
    console.log("Home recipes displayed");
  } catch (error) {
    console.error(error);
  }
};

// Show recipe count
const showRecipeCount = (amount) => {
  recipeCount.textContent = `${amount} recipes found`;
};

// Show filtered recipes
const showFilteredRecipes = (recipes) => {
  const filteredRecipes = filterRecipes(
    recipes,
    searchInput.value,
    cuisineFilter.value,
    courseFilter.value
  );
  recipesContainer.innerHTML = "";
  showRecipeCount(filteredRecipes.length);
  if (filteredRecipes.length === 0) {
    noRecipesMessage.classList.add("show");
  } else {
    noRecipesMessage.classList.remove("show");
    displayRecipeCards(filteredRecipes, recipesContainer, recipeTemplate);
  }
};

// Set up filter events
const setupFilters = (recipes) => {
  searchInput.addEventListener("input", () => {
    showFilteredRecipes(recipes);
  });

  cuisineFilter.addEventListener("change", () => {
    showFilteredRecipes(recipes);
  });

  courseFilter.addEventListener("change", () => {
    showFilteredRecipes(recipes);
  });

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    cuisineFilter.value = "";
    courseFilter.value = "";

    showFilteredRecipes(recipes);
  });
};

// Recipes page
const loadRecipesPage = async () => {
  try {
    const recipes = await getRecipes();
    const cuisines = getUniqueValues(recipes, "cuisine");
    const courses = getUniqueValues(recipes, "course");
    addFilterOptions(cuisines, cuisineFilter);
    addFilterOptions(courses, courseFilter);
    displayRecipeCards(recipes, recipesContainer, recipeTemplate);
    showRecipeCount(recipes.length);
    setupFilters(recipes);
    console.log("Recipes page displayed");
  } catch (error) {
    console.error(error);
  }
};

// Recipe details page
const loadRecipeDetailsPage = async () => {
  try {
    const recipeId = getRecipeId();
    const recipes = await getRecipes();
    const selectedRecipe = findRecipeById(recipes, recipeId);
    if (!selectedRecipe) {
      recipeDetailsContainer.innerHTML = "<p>Recipe not found.</p>";
      return;
    }

    const recipeElements = {
      title: detailsTitle,
      image: detailsImage,
      cuisine: detailsCuisine,
      course: detailsCourse,
      mainIngredient: detailsMainIngredient,
      time: detailsTime,
      servings: detailsServings,
      description: detailsDescription,
      calories: detailsCalories,
      fat: detailsFat,
      carbohydrate: detailsCarbohydrate,
      fiber: detailsFiber,
      protein: detailsProtein,
      ingredientsList: ingredientsList,
      directionsList: directionsList,
    };

    displayRecipeDetails(selectedRecipe, recipeElements);

    console.log("Recipe details displayed");
  } catch (error) {
    console.error(error);
  }
};

// Start the application
const startApplication = () => {
  setupCurrentYear();
  setupMobileMenu();
  if (featuredContainer) {
    loadHomePage();
  }
  if (recipesContainer) {
    loadRecipesPage();
  }
  if (recipeDetailsContainer) {
    loadRecipeDetailsPage();
  }
};

startApplication();
