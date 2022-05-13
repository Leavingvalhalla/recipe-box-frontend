import './App.css';
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <RecipeList />
    </div>
  );
}

export default App;
