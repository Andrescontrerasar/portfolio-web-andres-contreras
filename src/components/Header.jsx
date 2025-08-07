import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="header-text">
        <a href="/" style={styles.name}>ANDRÉS CONTRERAS</a>
        <div style={styles.subtext}>
          I GUIDE PROJECTS FROM STRUCTURE TO RESULTS — THROUGH PLANNING, ORGANIZING, TASK MANAGEMENT, AND COST CONTROL.
        </div>
      </div>

      {/* Botón MENU visible solo en mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : 'MENU'}
      </div>

      {/* Menú móvil fullscreen */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </nav>

      {/* Menú escritorio */}
      <nav>
        <ul style={styles.nav}>
          <li><a href="#about" className="nav-link">ABOUT</a></li>
          <li><a href="#portfolio" className="nav-link">PORTFOLIO</a></li>
          <li><a href="#education" className="nav-link">EDUCATION</a></li>
          <li><a href="#contact" className="nav-link">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '30px 40px',
    backgroundColor: '#fff',
    zIndex: 1000,
    position: 'relative', // ✅ Corregido: antes estaba en 'static'
    width: '100%',
    boxSizing: 'border-box'
  },
  name: {
    fontFamily: 'PPNeueMontreal-Medium, sans-serif',
    fontWeight: 'normal',
    fontSize: '16px',
    letterSpacing: '-0.01em',
    lineHeight: '1',
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block'
  },
  subtext: {
    fontFamily: 'PPNeueMontreal-Medium, sans-serif',
    fontWeight: 'normal',
    fontSize: '17px',
    color: '#000',
    letterSpacing: '-0.01em',
    marginTop: '50px',
    maxWidth: '410px',
    lineHeight: '1.2'
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0,
    padding: 0
  }
};

export default Header;


