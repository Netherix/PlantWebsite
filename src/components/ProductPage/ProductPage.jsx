import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import mockProducts from "./mockProducts"; // Import mock data

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for current image index

  // Use useMemo to memoize images based on the product
  const images = useMemo(() => ( 
    product && product.images ? product.images : []
  ), [product]); 

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = () => {
    if (review.trim() && rating > 0) {
      const newReview = { text: review, rating: rating };
      setReviews([...reviews, newReview]);
      setReview("");
      setRating(0);
    }
  };

  const handleMouseOver = (newHoverRating) => {
    setHoverRating(newHoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const nextImage = useCallback(() => {
    if (images.length > 0 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentImageIndex, images]);

  const prevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentImageIndex]);

  const handleKeyDown = useCallback((e) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    },
    [nextImage, prevImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return product ? (
    <div className="product-page">
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>

        {/* Image Slider */}
        <div className="image-slider">
          <button className="arrow-button" onClick={prevImage}>&lt;</button>
          {/* Ensure images array is not empty before accessing */}
          {images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt={product.title}
              className="product-image"
            />
          ) : (
            <p>No images available</p>
          )}
          <button className="arrow-button" onClick={nextImage}>&gt;</button>
        </div>

        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="product-buttons">Add to Cart</button>
        <button className="product-buttons">Back to Home</button>
      </div>

      <div className="review-section">
        <h2>Leave a Review</h2>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < (hoverRating || rating) ? "selected" : ""}`}
              onClick={() => handleRatingChange(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </span>
          ))}
        </div>

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
                <p>Rating: {Array(r.rating).fill("★").join("")}</p>
                <p>{r.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave a review!</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductPage;