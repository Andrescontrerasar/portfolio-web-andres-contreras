import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';         // ✅ Sección de contacto
import Footer from './components/Footer';           // ✅ Nuevo: Footer
import FloatingTag from './components/FloatingTag';
import ScrollToTop from './components/ScrollToTop'; // ✅ Botón para volver arriba

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />           {/* ✅ Footer agregado aquí */}
      <FloatingTag />
      <ScrollToTop />
    </>
  );
}

export default App;


