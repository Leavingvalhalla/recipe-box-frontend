import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ user, userpage }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  function handleSaveRecipe(user, recipe) {
    fetch('http://localhost:3000/save_recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id }),
    });
    setRecipes(...recipes, recipe);
  }

  function handleDeleteRecipe(recipe_id) {
    fetch(`http://localhost:3000/recipes/${recipe_id}`, {
      method: 'DELETE',
    });
    setRecipes(recipes.filter((recipe) => recipe.id !== recipe_id));
  }

  function handleUnsaveRecipe(recipe_id) {
    fetch(`http://localhost:3000/user_recipes/${recipe_id}`, {
      method: 'DELETE',
    });
  }

  return recipes.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      user={user}
      recipe={recipe}
      userpage={userpage}
      handleSaveRecipe={handleSaveRecipe}
      handleUnsaveRecipe={handleUnsaveRecipe}
      handleDeleteRecipe={handleDeleteRecipe}
    />
  ));
}

export default RecipeList;
