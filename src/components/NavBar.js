import Login from './Login';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

function NavBar({ user, onLogin, handleLogout }) {
  const { Title } = Typography;
  return (
    <div>
      <Link to="/">
        <Title>Recipe Box</Title>
      </Link>
      {user ? (
        <div>
          <Link to="/">
            <button onClick={handleLogout}>Logout</button>
          </Link>
          <Title level={2}>{user && `Hello, ${user.username}!`}</Title>
          <Link to="/userpage">
            <Title level={3}>Go To Saved Recipes</Title>
          </Link>
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
