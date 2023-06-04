import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App bg-black text-white font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
