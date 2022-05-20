import { Button, Card, Popconfirm } from 'antd';
import { useState } from 'react';

function RecipeCard({
  recipe,
  user,
  userpage,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleSaveRecipe,
}) {
  const [fullRecipe, setFullRecipe] = useState(false);

  return (
    <Card className="card">
      {/* <a href={`http://localhost:3000/recipes/${recipe.id}`}> */}
      <h1>{recipe.name}</h1>
      {/* </a> */}
      <h2>{recipe.time_to_make} minutes to make</h2>
      <h3>{recipe.vegetarian ? '' : 'NOT '}vegetarian</h3>
      {fullRecipe ? (
        <p>{recipe.instructions}</p>
      ) : (
        <p>{recipe.instructions.slice(0, 250)}...</p>
      )}
      <Button
        onClick={() => setFullRecipe((fullRecipe) => !fullRecipe)}
        type="primary"
      >
        {fullRecipe ? 'Hide Recipe' : 'See Full Recipe'}
      </Button>
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
