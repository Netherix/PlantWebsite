import { useNavigate } from "react-router-dom";
import "./FeaturedProduct.css";
import AddToCart from "../AddToCart/AddToCart";
import mockProducts from "../ProductPage/mockProducts";

const FeaturedProduct = () => {
  const navigate = useNavigate();
  const rubyRose = mockProducts[0];

  return (
    <div className="featured-product-section">
      <h1 className="featured-title">Featured Product</h1>
      <div className="featured-product-container">
        <img
          src="src/assets/Ruby Voodoo Rose.webp"
          alt="Featured Product"
          className="featured-product-image"
        />
        <div className="product-details">
          <h2>Ruby Voodoo Rose</h2>
          <div className="featured-buttons">
            <AddToCart className="cart-button" product={rubyRose} />
            <button className="view-product-button" onClick={() => navigate(`/product/${rubyRose.id}`)}>
              View Product
            </button>
          </div>
          <p className="product-price">$29.99</p>
          <p className="featured-product-description">
            The Ruby Voodoo Rose stands as a symbol of enchanting beauty and
            mystery in the world of floriculture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
