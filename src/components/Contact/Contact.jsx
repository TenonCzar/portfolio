import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p>
        Feel free to reach out to me via the form or through my social media
        channels.
      </p>

      <div className="contact-details">
        <div className="details-right">
          <p>
            Email:{" "}
            <a href="mailto:philipsamueladiele@gmail.com">
              philipsamueladiele@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+2349031234567">+234 903 123 4567</a>
          </p>
          <p>Location: Port Harcourt, Nigeria</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://twitter.com/tenonczar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
        <div className="fa fa-arrow-right"></div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
