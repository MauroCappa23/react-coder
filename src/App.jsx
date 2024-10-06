import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartContextProvider } from './context/cartContext';
import Games from './components/Pages/Games'
import BaseLayout from './components/layout/BaseLayout';
import CardList from './components/ItemList';
import Detail from './components/Pages/Detail';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import './App.css';
import Cart from './components/Pages/Cart';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/games' element={<Games/>}/>
            <Route exact path='/games/category/:id' element={<Games/>}/>
            <Route exact path='/detail/:id' element={<Detail/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
