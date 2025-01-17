import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-intro">
        We'd love to hear from you! Whether you have questions, need assistance, or want to share your thoughts, our team is here to help.
      </p>
      <div className="contact-section">
        <h2>General Inquiries</h2>
        <p>Email: info@joven.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Joven Street, Innovation City, USA</p>
      </div>
      <div className="contact-section">
        <h2>Media Inquiries</h2>
        <p>Email: press@joven.com</p>
        <p>Phone: +1 (555) 987-6543</p>
        <p>Address: 456 Media Avenue, Creativity Town, USA</p>
      </div>
      <div className="contact-section">
        <h2>Customer Support</h2>
        <p>Email: support@joven.com</p>
        <p>Phone: +1 (555) 321-0987</p>
        <p>Address: 789 Support Road, Serviceville, USA</p>
      </div>
      <div className="contact-section">
        <h2>Social Media</h2>
        <p>Facebook: <a href="https://facebook.com/joven" target="_blank" rel="noopener noreferrer">facebook.com/joven</a></p>
        <p>Twitter: <a href="https://twitter.com/joven" target="_blank" rel="noopener noreferrer">@joven</a></p>
        <p>Instagram: <a href="https://instagram.com/joven" target="_blank" rel="noopener noreferrer">@joven</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/company/joven" target="_blank" rel="noopener noreferrer">linkedin.com/company/joven</a></p>
      </div>
    </div>
  );
};

export default Contact;
