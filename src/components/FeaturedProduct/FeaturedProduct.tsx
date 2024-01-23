import './FeaturedProduct.css';

const FeaturedProduct = () => {
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
          <p className="product-price">$29.99</p>
          <p className="product-description">
          The Ruby Voodoo Rose stands as a symbol of enchanting beauty and mystery in the world of floriculture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
