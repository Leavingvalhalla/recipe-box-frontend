import { useState, useEffect } from 'react';
import { Button } from 'antd';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';

function UserPage({ user }) {
  const [userRecipes, setUserRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/users/${user.id}/recipes`)
      .then((res) => res.json())
      .then((data) => setUserRecipes(data));
  }, [user.id]);

  function onNewRecipe(new_recipe) {
    console.log(userRecipes);
    const recipe_array = [...userRecipes, new_recipe];
    setUserRecipes(recipe_array);
    console.log(recipe_array);
  }

  function onShowFormClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div>
      <h1>User Page</h1>
      <Button onClick={onShowFormClick}>
        {showForm ? 'Hide Form' : 'Add Recipe'}
      </Button>
      {showForm && <NewRecipeForm onNewRecipe={onNewRecipe} />}
      <RecipeList user={user} recipes={userRecipes} userpage="true" />
    </div>
  );
}

export default UserPage;
