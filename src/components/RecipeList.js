import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import EditRecipe from './EditRecipe';

function RecipeList({ user, userpage }) {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState('');

  useEffect(() => {
    if (userpage) {
      fetch(`/users/${user.id}/recipes`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    } else {
      fetch('/recipes')
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  }, [user, userpage]);

  function handleSaveRecipe(user, recipe) {
    fetch('/save_recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id }),
    });
  }

  function handleDeleteRecipe(recipe_id) {
    fetch(`/recipes/${recipe_id}`, {
      method: 'DELETE',
    });
    setRecipes(recipes.filter((recipe) => recipe.id !== recipe_id));
  }

  function handleUnsaveRecipe(recipe_id) {
    fetch(`/users/${user.id}/recipes/${recipe_id}`, {
      method: 'DELETE',
    });
    setRecipes(recipes.filter((recipe) => recipe.id !== recipe_id));
  }

  function handleEditRecipe(recipe) {
    setEditRecipe(true);
    setRecipeToEdit(recipe);
  }

  function handleEditSubmit(id, new_recipe) {
    fetch(`/recipes/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_recipe),
    });
    setRecipes(
      recipes.map((recipe) => (recipe.id === id ? new_recipe : recipe))
    );
  }

  return (
    <div className="recipe-div">
      {editRecipe && <EditRecipe recipeToEdit={recipeToEdit} />}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          user={user}
          recipe={recipe}
          userpage={userpage}
          handleSaveRecipe={handleSaveRecipe}
          handleUnsaveRecipe={handleUnsaveRecipe}
          handleDeleteRecipe={handleDeleteRecipe}
          handleEditRecipe={handleEditRecipe}
          handleEditSubmit={handleEditSubmit}
        />
      ))}
    </div>
  );
}

export default RecipeList;
