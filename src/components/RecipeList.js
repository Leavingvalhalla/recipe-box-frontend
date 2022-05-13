import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
}

export default RecipeList;
