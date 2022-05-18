import { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';

function UserPage({ user }) {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.id}/recipes`)
      .then((res) => res.json())
      .then((data) => setUserRecipes(data));
  }, [user.id]);

  function onNewRecipe(new_recipe) {
    setUserRecipes([...userRecipes, new_recipe]);
  }

  return (
    <div>
      <h1>User Page</h1>
      <NewRecipeForm onNewRecipe={onNewRecipe} />
      <RecipeList user={user} recipes={userRecipes} userpage="true" />
    </div>
  );
}

export default UserPage;
