import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to delete an item from the cart
  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
  };

  console.log(cartItems)

  return (
    <>
      <Nav cartItemCount={cartItemCount} /> {/* Pass cart item count as a prop */}
      <div>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>{item.title}</p>
                <img
                  src={item.images[0]}               
                />
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleDelete(index)}>Delete</button> {/* Delete button */}
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
