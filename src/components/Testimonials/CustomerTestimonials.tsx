import './CustomerTestimonials.css'; // Ensure this CSS file is linked

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      comment: "The Fiddle Leaf Fig is absolutely gorgeous! It brightens up my living room.",
      location: "New York, NY",
      imageUrl: "src/assets/CustomerImage1.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "John Smith",
      comment: "Fantastic customer service and the plants are always in great condition.",
      location: "Los Angeles, CA",
      imageUrl: "src/assets/CustomerImage2.jpg" // Replace with actual image path
    },
    // ... more testimonials
  ];

  return (
    <div className="testimonials-container">
      <h1>What Our Customers Say</h1>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.imageUrl} alt={`Testimonial by ${testimonial.name}`} className="testimonial-image" />
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <p className="testimonial-author">- {testimonial.name}, {testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
