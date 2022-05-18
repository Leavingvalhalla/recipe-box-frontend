import { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';

function UserPage({ user }) {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(
    () =>
      fetch(`http://localhost:3000/users/${user.id}/recipes`)
        .then((res) => res.json())
        .then((data) => setUserRecipes(data)),
    []
  );

  return (
    <div>
      <h1>User Page</h1>
      <NewRecipeForm />
      <RecipeList user={user} recipes={userRecipes} />
    </div>
  );
}

export default UserPage;
