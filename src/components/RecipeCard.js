function RecipeCard({
  recipe,
  user,
  userpage,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleSaveRecipe,
}) {
  return (
    <div>
      {/* if logged in, on the homepage, but not admin */}
      {user && !userpage && user.id !== 1 && (
        <button onClick={() => handleSaveRecipe(user, recipe)}>
          Save Recipe
        </button>
      )}
      {/* if on the user page */}
      {userpage && (
        <button onClick={() => handleUnsaveRecipe(recipe.id)}>
          Unsave Recipe
        </button>
      )}
      {/* if admin */}
      {user && user.id === 1 && (
        <button onClick={() => handleDeleteRecipe(recipe.id)}>DELETE</button>
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
