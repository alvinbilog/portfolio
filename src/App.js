import React from "react";
import Nav from "./components/Nav";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Applications from "./components/Applications";
import Projects from "./components/Projects";
import About from "./components/About";
// import ScrollSpy from 'react-scrollspy-navigation';
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Book />
      <Footer />
      <section id="skills">
        <Skills />
      </section>
      <Applications />
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <About />
      </section>
    </div>
  );
};

export default App;
