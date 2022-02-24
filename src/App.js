import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element= {<ItemListContainer greeting='Carrito de Compras' />}/>
      <Route path='/category/:categoryId' element= {<ItemListContainer greeting='Carrito de Compras' />}/>
      <Route path='/detail/:productId' element = {<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
