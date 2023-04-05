import React from "react";
import "./scss/App.css";
import HTMLFlipBook from "react-pageflip";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Project from "./Project";
const App = () => {
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref}>
        {/* <h1>Page Header</h1> */}
        {props.children}
        {/* <p>Page number: {props.number}</p> */}
      </div>
    );
  });
  const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="container">
        <HTMLFlipBook width={300} height={500}>
          <Page number="0"></Page>
          <PageCover>BOOK TITLE</PageCover>
          <Page number="1">
            <About />
          </Page>
          <Page number="2">
            <Contact />
          </Page>
          <Page number="3">
            <Skills />
          </Page>
          <Page number="4">
            <Project />
          </Page>
          <Page number="5">
            <Project />
          </Page>
          <Page number="6">
            <Project />
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default App;
