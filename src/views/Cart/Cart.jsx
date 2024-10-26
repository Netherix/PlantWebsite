import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import "./Cart.css";
import NewsletterSignup from "../../components/NewsletterSignup/NewsletterSignup";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    // Recalculate total price whenever cart items are updated
    const newTotalPrice = cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Function to delete an item from the cart
  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update localStorage
  };

  return (
    <>
      <Nav cartItemCount={cartItemCount} />
      {/* Cart Items */}
      <div className="cart-container">
        <h2>View Your Cart:</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item-box">
                  <img
                    src={
                      item.images && item.images.length > 0
                        ? item.images[0]
                        : "path/to/default_image.jpg"
                    }
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <p>Price: ${item.price}</p>
                    <p>
                      Quantity:
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        className="dropdown"
                      >
                        <option disabled value="Quantity">
                          Quantity
                        </option>
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Divider */}
      <hr style={{ margin: "20px 0", border: "0.5px solid #ccc" }} />

      {/* Checkout Section */}
      <div className="checkout-container">
        <div className="subtotal">
          <h1>Subtotal: ${totalPrice}</h1>
        </div>
        <button className="checkout-button">Check Out Now</button>
      </div>

      {/* Footer */}
      <NewsletterSignup />
    </>
  );
};

export default Cart;
