import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <NavBar user={user} onLogin={onLogin} />
      {user ? (
        <Routes>
          <Route path="/" element={<RecipeList user={user} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/login" element={<Login onLogin={onLogin} />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
