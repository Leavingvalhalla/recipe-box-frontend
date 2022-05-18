import { useState } from 'react';
function NewRecipeForm({ onNewRecipe }) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [timeToMake, setTimeToMake] = useState('');
  const [vegetarian, setVegetarian] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const new_recipe = {
      name: name,
      instructions: instructions,
      time_to_make: timeToMake,
      vegetarian: vegetarian,
    };
    fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_recipe),
    });
    onNewRecipe(new_recipe);
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
      ></textarea>
      <label htmlFor="time_to_make">Time to make (in minutes):</label>
      <input
        type="text"
        id="time_to_make"
        onChange={(e) => setTimeToMake(e.target.value)}
      />
      <label htmlFor="vegetarian">Vegetarian?</label>
      <input
        type="checkbox"
        onChange={(e) => setVegetarian(e.target.checked)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default NewRecipeForm;
