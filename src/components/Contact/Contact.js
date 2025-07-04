import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputFocus = (e) => {
    e.target.parentElement.classList.add('ws-contact-focused');
  };

  const handleInputBlur = (e) => {
    if (!e.target.value) {
      e.target.parentElement.classList.remove('ws-contact-focused');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  return (
    <section className="ws-contact-section" id="contact">
      <div className="ws-contact-container">
        <div className="ws-contact-content">
          {/* Header Section */}
          <div className="ws-contact-header">
            <span className="ws-contact-section-subtitle">Contact Us</span>
            <h2 className="ws-contact-section-title">
              Let's Create Something
              <span className="ws-contact-highlight"> Amazing Together</span>
            </h2>
          </div>

          {/* Main Content - Cards and Form */}
          <div className="ws-contact-main-content">
            {/* Contact Cards Section */}
            <div className="ws-contact-cards-section">
              <div className="ws-contact-cards">
                <div className="ws-contact-card">
                  <div className="ws-contact-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ws-contact-card-content">
                    <h3>Visit Us</h3>
                    <p>123 Innovation Hub</p>
                    <p>Silicon Valley, CA 94025</p>
                  </div>
                </div>

                <div className="ws-contact-card">
                  <div className="ws-contact-card-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ws-contact-card-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="ws-contact-card">
                  <div className="ws-contact-card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ws-contact-card-content">
                    <h3>Email Us</h3>
                    <p>hello@worksuite.com</p>
                    <p>support@worksuite.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="ws-contact-form-section">
              <div className="ws-contact-form-wrapper">
                <form className="ws-contact-form" onSubmit={handleSubmit}>
                  <div className="ws-contact-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                      required
                    />
                    <label>Your Name</label>
                  </div>

                  <div className="ws-contact-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                      required
                    />
                    <label>Your Email</label>
                  </div>

                  <div className="ws-contact-form-group">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder=" "
                      rows="4"
                      required
                    ></textarea>
                    <label>Your Message</label>
                  </div>

                  <button type="submit" className="ws-contact-submit-button">
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
