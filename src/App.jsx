import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Games from './components/Pages/Games'
import BaseLayout from './components/layout/BaseLayout';
import CardList from './components/ItemList';
import Detail from './components/Pages/Detail';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route exact path='/' element={<CardList/>}/>
        <Route exact path='/games' element={<Games/>}/>
        <Route exact path='/games/category/:id' element={<Games/>}/>
        <Route exact path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </BaseLayout>
    </BrowserRouter>
    </>
  )
}

export default App;
