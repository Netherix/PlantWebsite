import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Link to={`/product/${index + 2}`} className='product-link'>
              <img src={product.imageUrl} alt={product.title} className="favorite-images" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </Link>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFavorites;
