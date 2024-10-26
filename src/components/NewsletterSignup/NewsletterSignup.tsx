import { useState, FormEvent } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail(''); 
  };

  return (
    <div className="newsletter-signup-container">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest updates, straight from our garden! 🥰</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
      <div className="newsletter-image-container">
        <img 
          src="../src/assets/CardBadges.png" // Replace with the path to your credit card badges image
          alt="Payment Options" 
          className="newsletter-image"
        />
      </div>
    </div>
  );
};

export default NewsletterSignup;
