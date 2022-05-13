import { useEffect } from 'react';

function RecipeList() {
  useEffect(() => {
    fetch('http://127.0.0.1:3000/recipes')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return;
}

export default RecipeList;
