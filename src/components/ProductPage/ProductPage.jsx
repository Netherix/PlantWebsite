import React, { useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import mockProducts from "./mockProducts"; // Import mock data

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);
  
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>

      <div className="review-section">
        <h2>Leave a Review</h2>
        <textarea
          className="review-input"
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
        />
        <button className="submit-review-button" onClick={handleReviewSubmit}>
          Submit Review
        </button>

        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((r, index) => (
              <div key={index} className="review">
                <p>{r}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave a review!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
