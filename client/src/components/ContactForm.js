import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:prathamesh.bhosale.dev@gmail.com?subject=Message from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${
      formData.name
    }%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };
    
const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
    onClose();
    }, 500); // Match the duration of the fade-out animation
};

  return (
    <div className="contact-form-overlay">
      <div className={`contact-form-container ${isClosing ? "fade-out" : ""}`}>
        <button className="form-close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Let's get in touch!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
