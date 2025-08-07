import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-text">
        <h2>
          LET’S CONNECT TODAY<br />
          BUILD SOMETHING<br />
          REMARKABLE TOGETHER
        </h2>
        <div className="contact-links">
          <a
            className="contact-email"
            href="mailto:contact@andrescontreras.com"
          >
            contact@andrescontreras.com
          </a>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/andrescontrerasar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
