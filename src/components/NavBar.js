import Login from './Login';
import { Link } from 'react-router-dom';

function NavBar({ user, onLogin }) {
  function handleLogout() {
    return;
  }

  return (
    <div>
      <Link to="/">
        <h1>Recipe Box</h1>
      </Link>
      {user ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/userpage">
            <h2>Go To Saved Recipes</h2>
          </Link>
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
