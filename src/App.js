import "./App.css";
import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App bg-app_black text-app_white font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
