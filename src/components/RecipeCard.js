function RecipeCard({ recipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>{recipe.time_to_make} minutes to make</h2>
      <h3>{recipe.vegetarian ? '' : 'NOT '}vegetarian</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;
