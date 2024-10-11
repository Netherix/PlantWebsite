import React from "react";

const AddToCart = ({ product, className }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  return (
    <button onClick={addToCart} className={className}>
      Add to Cart
    </button>
  );
};

export default AddToCart;
