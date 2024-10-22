import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// @ts-expect-error AddToCart
import AddToCart from '../AddToCart/AddToCart.jsx';
import './OurFavorites.css';

const OurFavorites = () => {
  const products = [
    {
      id: 1,
      title: "Fiddle Leaf Fig",
      price: "$29.99",
      imageUrl: "src/assets/Monstera Thai Constellation.png" 
    },
    {
      id: 2,
      title: "Cactus Cereus Peruvianus",
      price: "$19.99",
      imageUrl: "src/assets/cactus cereus peruvianus.png"
    },
    {
      id: 3,
      title: "Siam Tulip",
      price: "$15.99",
      imageUrl: "src/assets/Curcuma Alismatifolia Siam Tulip.png"
    },
    {
      id: 4,
      title: "Chrysanthemum",
      price: "$22.99",
      imageUrl: "src/assets/Mums (Chrysanthemum).png"
    }
  ];

  return (
    <div>
      <h1 className="favorites-heading">Our Favorites</h1>
      <div className="favorites-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id + 1}`} className='product-link'>
              <img src={product.imageUrl} alt={product.title} className="favorite-images" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </Link>
              <AddToCart className='cart-button' product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFavorites;
