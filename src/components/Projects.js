import React from "react";
import "../scss/Project.css";
import Flip from "react-reveal/Flip";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="textContainer">
        <h1>Projects</h1>
      </div>
      <ul className="Container">
        <Flip left>
          <a href="https://alvs-todoapp.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/todoapp.png" alt="Project 1" />
              <div className="hover">
                <span className="sub_tit">Todo App</span>
                <div className="desc">
                  Simple app that allows the user to record the task with auto
                  saving feature.
                </div>
              </div>
            </li>
          </a>
        </Flip>
        <Flip top>
          <a href="https://alvs-memorygame.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/memorygame.png" h alt="Project 2" />
              <div className="hover">
                <span className="sub_tit">Memory Game</span>
                <div className="desc">
                  A matching game that will sharpen your brain and focus.
                </div>
              </div>
            </li>
          </a>
        </Flip>
        <Flip right>
          <a href="https://alvs-itravel.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/itravel.png" alt="Project 3" />
              <div className="hover">
                <span className="sub_tit">iTravel</span>
                <div className="desc">A Responsive Travel Website</div>
              </div>
            </li>
          </a>
        </Flip>
        <Flip left>
          <a href="https://alvs-blogapp.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/blog.png" alt="Project 4" />
              <div className="hover">
                <span className="sub_tit">Blog App</span>
                <div className="desc">A Responsive Blog App</div>
              </div>
            </li>
          </a>
        </Flip>
        <Flip bottom>
          <a href="https://alvs-netflix-clone.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/netflix-clone.png" alt="Project 5" />
              <div className="hover">
                <span className="sub_tit">Netflix Clone</span>
                <div className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates.
                </div>
              </div>
            </li>
          </a>
        </Flip>
        <Flip right>
          <a href="https://alvs-todoapp.netlify.app">
            <li className="box actionImg4" id="imgType4">
              <img src="/todoapp.png" alt="Project 1" />
              <div className="hover">
                <span className="sub_tit">Todo App</span>
                <div className="desc">
                  Simple app that allows the user to record the task with auto
                  saving feature.
                </div>
              </div>
            </li>
          </a>
        </Flip>
      </ul>
    </div>
  );
};

export default Projects;
