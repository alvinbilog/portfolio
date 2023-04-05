import { React, useState } from "react";
import "../scss/Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div className="Nav">
      <div className="logo-container">
        <h1>Portfolio</h1>
      </div>
      <nav className={click ? "active" : "inactive"}>
        <button>About</button>

        <a href="#skills">
          <button>Skills</button>
        </a>
        <a href="#projects">
          <button>Projects</button>
        </a>
        <a href="#contact">
          <button>Contact</button>
        </a>
      </nav>
      <div className="icon">
        <i
          className={click ? "fas fa-times" : "fas fa-bars"}
          onClick={clickHandler}
        ></i>
      </div>
    </div>
  );
};

export default Nav;
