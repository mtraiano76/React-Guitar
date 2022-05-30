import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Contador from './Contador';
import Registro from './Registro';


function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a Guitar Shop</h1>
      <h2>Productos</h2>
      <Home />
      <Contador />
      <Registro />
    </div>
  );
}

export default App;
