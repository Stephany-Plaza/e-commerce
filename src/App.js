import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Carrito de Compras' />
    </div>
  );
}

export default App;
