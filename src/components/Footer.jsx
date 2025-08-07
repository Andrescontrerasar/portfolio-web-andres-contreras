import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-row">
        <div className="footer-location montreal">Santiago, Chile</div>
        <div className="footer-role montreal">
          Project Manager – Business Administration Engineer
        </div>
      </div>

      <div className="footer-name marquee-wrapper">
        <div className="marquee">
          <span>ANDRÉS CONTRERAS&nbsp;&nbsp;&nbsp;</span>
          <span>ANDRÉS CONTRERAS&nbsp;&nbsp;&nbsp;</span>
          <span>ANDRÉS CONTRERAS&nbsp;&nbsp;&nbsp;</span>
          <span>ANDRÉS CONTRERAS&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



