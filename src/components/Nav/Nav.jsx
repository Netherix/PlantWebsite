import './Nav.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Nav() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const totalQuantity = storedCartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalQuantity);
    }, 1000); // Callback function runs every 1 second
  
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  
  return (
    <nav className="nav">
      <div onClick={() => navigate('/')}>
        <img src={logo} alt="Serene Greens" className="logo" />
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/')}>Shop Now</li>
        <li onClick={() => navigate('/')}>Contact Us</li>
        <li onClick={() => navigate('/')}>Track Your Order</li>
        <li onClick={() => navigate('/')}>About</li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="cart" onClick={() => navigate('/cart')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
          className="cart-icon"
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>
        {cartCount > 0 && ( // Display circle if cartCount is more than 0
          <div className="cart-count">
            {cartCount}
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="popup-menu">
          <div className="popup-close" onClick={toggleMenu}>×</div>
          <ul className="popup-links">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/')}>Shop Now</li>
            <li onClick={() => navigate('/')}>Contact Us</li>
            <li onClick={() => navigate('/')}>Track Your Order</li>
            <li onClick={() => navigate('/')}>About</li>
            <li onClick={toggleMenu}>Close</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
