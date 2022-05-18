import { useState } from 'react';
function NewRecipeForm() {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [timeToMake, setTimeToMake] = useState('');
  const [vegetarian, setVegetarian] = useState(false);

  function onSubmit() {
    const new_recipe = {
      name: name,
      instructions: instructions,
      time_to_make: timeToMake,
      vegetarian: vegetarian,
    };
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="recipe_name">Recipe name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        id="recipe_name"
      />
      <textarea
        name="instructions"
        onChange={(e) => setInstructions(e.target.value)}
        id="instructions"
        cols="30"
        rows="10"
      >
        Put your recipe here...
      </textarea>
      <label htmlFor="time_to_make">Time to make (in minutes):</label>
      <input
        type="text"
        id="time_to_make"
        onChange={(e) => setTimeToMake(e.target.value)}
      />
      <label htmlFor="vegetarian">Vegetarian?</label>
      <input
        type="checkbox"
        onChange={(vegetarian) => setVegetarian(!vegetarian)}
      />
    </form>
  );
}
export default NewRecipeForm;
