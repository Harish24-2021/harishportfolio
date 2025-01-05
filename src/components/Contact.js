import React from "react";
import "../presentations/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-text">Feel free to reach out via email or LinkedIn:</p>
      <ul className="contact-list">
        <li className="contact-item">
          <strong>Email:</strong> harish242021@gmail.com
        </li>
        <li className="contact-item">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/harish-muddasani/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>

    </section>
  );
}

export default Contact;
