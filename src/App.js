import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState('');

  function onLogin(user) {
    setUser(user);
  }

  return (
    <div className="App">
      <SignUp />
      <NavBar user={user} />
      <Login onLogin={onLogin} />
      <RecipeList />
    </div>
  );
}

export default App;
