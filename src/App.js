import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

function App() {
  const [user, setUser] = useState('');

  function onLogin(user) {
    setUser(user);
  }

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} onLogin={onLogin} />
      {user ? (
        <Routes>
          <Route path="/" element={<RecipeList user={user} />} />
          <Route path="/userpage" element={<UserPage user={user} />} />
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
