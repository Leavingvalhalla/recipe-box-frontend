function RecipeCard({
  recipe,
  user,
  userpage,
  handleDeleteRecipe,
  handleSaveRecipe,
}) {
  return (
    <div>
      {user && !userpage && (
        <button onClick={() => handleSaveRecipe(user, recipe)}>
          Save Recipe
        </button>
      )}
      {userpage && (
        <button onClick={() => handleDeleteRecipe(recipe.id)}>
          Unsave Recipe
        </button>
      )}
      {/* <a href={`http://localhost:3000/recipes/${recipe.id}`}> */}
      <h1>{recipe.name}</h1>
      {/* </a> */}
      <h2>{recipe.time_to_make} minutes to make</h2>
      <h3>{recipe.vegetarian ? '' : 'NOT '}vegetarian</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;
