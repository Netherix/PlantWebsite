import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>
      <Nav />
      <div>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
