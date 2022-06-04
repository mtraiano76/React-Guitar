
import './App.css';
import HomePage from './Pages/HomePage'
import Contador from './Contador';
import RegistroPage from './Pages/RegistroPage'


function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a Guitar Shop</h1>
      <h2>Productos</h2>
      <HomePage />
      <Contador />
      <RegistroPage />
    </div>
  );
}

export default App;
