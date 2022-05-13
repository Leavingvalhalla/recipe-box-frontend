import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({ username: name, password: password }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username: </label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
