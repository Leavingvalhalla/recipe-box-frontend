import Login from './Login';
import { Link } from 'react-router-dom';

function NavBar({ user, onLogin }) {
  function handleLogout() {
    return;
  }

  return (
    <div>
      <h1>Recipe Box</h1>
      {user ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <p>{user && `Hello, ${user.username}!`}</p>
        </div>
      ) : (
        <div>
          <label htmlFor="Login">Login here!</label>
          <Login id="Login" onLogin={onLogin} />
          <Link to="/signup">Sign Up Here</Link>
        </div>
      )}
    </div>
  );
}
export default NavBar;
