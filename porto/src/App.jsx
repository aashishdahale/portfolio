import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Projects />
      <Card />
      <ContactMe />
      <Certifications />

      <Footer />
    </div>
  );
}

export default App;
