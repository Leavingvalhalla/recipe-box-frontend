import { useState } from 'react';
import { Form, Checkbox, Input, Button } from 'antd';

function EditRecipe({ recipeToEdit, onEditSubmit }) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [timeToMake, setTimeToMake] = useState('');
  const [vegetarian, setVegetarian] = useState(false);

  function handleSubmit() {
    const recipe = { name, instructions, timeToMake, vegetarian };
    onEditSubmit(recipeToEdit.id, recipe);
  }

  return (
    <Form
      className="navbar-div"
      initialValues={{
        name: recipeToEdit.name,
        instructions: recipeToEdit.instructions,
        time_to_make: recipeToEdit.time_to_make,
        vegetarian: recipeToEdit.vegetarian,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item name="name" label="Name">
        <Input
          className="recipe-name"
          size="small"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="recipe_name"
          value={name}
        />
      </Form.Item>
      <Form.Item name="instructions" label="Instructions">
        <textarea
          name="instructions"
          onChange={(e) => setInstructions(e.target.value)}
          id="instructions"
          cols="30"
          rows="10"
          value={instructions}
        ></textarea>
      </Form.Item>
      <Form.Item name="time_to_make" label="Time To Make (in minutes)">
        <Input
          className="recipe-time"
          size="small"
          type="text"
          id="time_to_make"
          value={timeToMake}
          onChange={(e) => setTimeToMake(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="vegetarian" label="Vegetarian?">
        <Checkbox
          checked={vegetarian}
          onChange={(e) => setVegetarian(e.target.checked)}
        />
      </Form.Item>
      <Form.Item name="submit">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditRecipe;
