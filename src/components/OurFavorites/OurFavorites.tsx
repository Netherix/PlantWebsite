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
      imageUrl: "src/assets/Curcuma Alismatifolia 'Siam Tulip.png" // Replace with the actual path of the image
    },
    {
      id: 4,
      title: "Chrysanthemum",
      price: "$22.99",
      imageUrl: "src/assets/Mums (Chrysanthemum).png" // Replace with the actual path of the image
    }
  ];

  return (
    <div>
      <h1 className="favorites-heading">Our Favorites</h1> {/* Add this line */}
      <div className="favorites-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFavorites;
