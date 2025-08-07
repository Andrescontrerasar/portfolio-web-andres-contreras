import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h3 className="hero-subtitle">
            Project Manager - Business Administration Engineer
          </h3>

          <div className="hero-name">
            {"ANDRÉS CONTRERAS".split("").map((char, index) => {
              if (index === 17) {
                // Justo antes de la "A" (índice 17), inserta un espacio visual
                return (
                  <React.Fragment key={index}>
                    <span className="letter-space" />
                    <span
                      className="letter-fall"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {char}
                    </span>
                  </React.Fragment>
                );
              }

              return (
                <span
                  key={index}
                  className="letter-fall"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/profile.png"
            alt="Andrés Contreras"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;





