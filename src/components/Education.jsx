import './Education.css';

const Education = () => {
  return (
    <section className="education-cert-section" id="education">
      <div className="left-column">
        <p className="quote">
          <span className="desktop-only">
           I FOUND MY PASSION FOR PROJECT MANAGEMENT <br /> THROUGH REAL-WORLD EXPERIENCE.
          </span>
          <span className="mobile-only">
          I FOUND MY PASSION FOR PROJECT<br />
          MANAGEMENT THROUGH<br />
          REAL-WORLD EXPERIENCE.
          </span>
        </p>

        <img
          src="/profile2.png"
          alt="Andrés Contreras"
          className="profile-image"
        />
      </div>

      <div className="right-column">
        <div className="education-content">
          <div className="block">
            <h3 className="block-title">EDUCATION</h3>
            <p>
              Business Administration Engineer, with specialization in Finance.<br />
              Instituto Profesional IPP - Santiago, Chile<br />
              Graduated: 2025
            </p>
            <p>
              Bachelor´s Degree in English Language.<br />
              Universidad Arturo Prat - Santiago, Chile<br />
              Graduated: 2013
            </p>
          </div>

          <div className="block">
            <h3 className="block-title">CERTIFICATIONS</h3>
            <p>
              Google Project Management Certificate (In Progress).<br />
              Coursera - 2025
            </p>
            <p>
              Foundations of ChatGPT - Applied Use of Generative AI.<br />
              OpenAI / Online Platform<br />
              Completed - 2025
            </p>
          </div>

          {/* Línea horizontal decorativa */}
          <div className="education-line" />
        </div>
      </div>
    </section>
  );
};

export default Education;


