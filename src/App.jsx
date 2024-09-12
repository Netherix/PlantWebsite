import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
