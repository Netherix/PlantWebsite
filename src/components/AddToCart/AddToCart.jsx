import React, { useState } from "react";
import './AddToCart.css'

const AddToCart = ({ product, className }) => {
  const [loading, setLoading] = useState(false); // State for loading

  const addToCart = () => {
    setLoading(true); // Set loading to true
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    // Simulate a network request with setTimeout
    setTimeout(() => {
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));
      setLoading(false); // Reset loading state after adding to cart
    }, 1000); // Simulate a delay (e.g., 1 second)
  };

  return (
    <button onClick={addToCart} className={className} disabled={loading}>
      {loading ? (
        <span className="loader"></span> // Spinner will be here
      ) : (
        "Add to Cart"
      )}
    </button>
  );
};

export default AddToCart;
