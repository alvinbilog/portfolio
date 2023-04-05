import React from "react";
import HTMLFlipBook from "react-pageflip";
import Typewriter from "typewriter-effect";
import Cover from "./magazine/Cover";
import PageOne from "./magazine/PageOne";
import PageTwo from "./magazine/PageTwo";
import PageThree from "./magazine/PageThree";

import "../scss/Book.css";
const Book = (props) => {
  const Page = React.forwardRef((props, ref) => {
    return (
      <div
        className="demoPage"
        ref={ref}
        // data-density="hard"
      >
        {/* <h1>Page Header</h1> */}
        <>{props.children}</>
        {/* <p>Page number: {props.number}</p> */}
      </div>
    );
  });
  return (
    <div className="Book">
      <HTMLFlipBook
        width={600}
        height={778}
        className="container"
        mobileScrollSupport={true}
      >
        <Page number="1">
          <div className="greeting">
            <h2>Hello</h2>
            <h1>I'm Alvin</h1>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Graphic Designer",
                    "UX/UI Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </Page>
        <Page number="2">
          <Cover />
        </Page>
        <Page number="3">
          <PageOne />
        </Page>
        <Page number="4">
          <PageTwo />
        </Page>
        <Page number="5">
          <PageThree />
        </Page>
        <Page number="6">
          <PageThree />
        </Page>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
