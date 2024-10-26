import { Link } from 'react-router-dom'; 
import AddToCart from '../AddToCart/AddToCart.jsx';
import './OurFavorites.css';
import mockProducts from '../ProductPage/mockProducts.js';

  const OurFavorites = () => {
    return (
      <div>
        <h1 className="favorites-heading">Our Favorites</h1>
        <div className="favorites-container">
          {mockProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className='product-link'>
                <img src={product.images[0]} alt={product.title} className="favorite-images" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
              <AddToCart className='cart-button' product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurFavorites;
