function RecipeCard({ recipe, user }) {
  function handleSaveRecipe() {
    fetch('http://localhost:3000/save_recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      {user && <button onClick={handleSaveRecipe}>Save Recipe</button>}
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
