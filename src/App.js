import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import { NotificationServicesProvider } from './services/notification/NotificationServices'





function App() {

  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Carrito de Compras' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Carrito de Compras' />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              {<Route path='/cart' element={<Cart />} />}
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>

  );
}

export default App;
