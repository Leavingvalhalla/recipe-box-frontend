function NavBar({ user }) {
  return (
    <div>
      <h1>Recipe Box</h1>
      <p>{user && `Hello, ${user.username}!`}</p>
    </div>
  );
}
export default NavBar;
