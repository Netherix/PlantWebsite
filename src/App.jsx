import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/:' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
