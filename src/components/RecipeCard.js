import { Button, Card, Popconfirm } from 'antd';
function RecipeCard({
  recipe,
  user,
  userpage,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleSaveRecipe,
}) {
  return (
    <Card>
      {/* <a href={`http://localhost:3000/recipes/${recipe.id}`}> */}
      <h1>{recipe.name}</h1>
      {/* </a> */}
      <h2>{recipe.time_to_make} minutes to make</h2>
      <h3>{recipe.vegetarian ? '' : 'NOT '}vegetarian</h3>
      <p>{recipe.instructions}</p>
      {/* if logged in, on the homepage, but not admin */}
      {user && !userpage && user.id !== 1 && (
        <Button onClick={() => handleSaveRecipe(user, recipe)}>
          Save Recipe
        </Button>
      )}
      {/* if on the user page */}
      {userpage && (
        <Button onClick={() => handleUnsaveRecipe(recipe.id)}>
          Unsave Recipe
        </Button>
      )}
      {/* if admin */}
      {user && user.id === 1 && (
        <Popconfirm
          title="Permanently delete this recipe?"
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" onClick={() => handleDeleteRecipe(recipe.id)}>
            DELETE
          </Button>
        </Popconfirm>
      )}
    </Card>
  );
}

export default RecipeCard;
