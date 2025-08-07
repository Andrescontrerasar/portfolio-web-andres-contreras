import React, { useState } from 'react';
import './Portfolio.css';
import projectData from '../data/projectData';

const Portfolio = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">PORTFOLIO</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleProject(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleProject(index);
              }}
            >
              <div>
                <div className="accordion-title-text">{project.title}</div>
                <div className="accordion-sub">{project.years}</div>
                <div className="accordion-sub">{project.role}</div>
              </div>
              <span className={`accordion-icon ${openIndex === index ? 'open' : ''}`}>
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {openIndex === index && (
              <div className="accordion-content-row">
                <div className="accordion-text">
                  <p className="project-description">{project.description}</p>

                  {/* My role */}
                  {project.bullets && (
                    <>
                      <p className="project-role-title"><strong>My role:</strong></p>
                      <ul className="project-bullets">
                        {project.bullets.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Impact (si existe) */}
                  {project.impact && (
                    <p className="project-description">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  )}

                  {/* Stack (si existe) */}
                  {project.tech && project.tech.trim() !== '' && (
                    <p className="project-tech">
                      <strong>Stack:</strong> {project.tech}
                    </p>
                  )}

                  {/* Botón si aplica */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      {project.linkLabel}
                    </a>
                  )}
                </div>

                <div className="accordion-image">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;




