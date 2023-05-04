import React from "react";

const Projects = () => {
  return (
    <div >
      <div >
        <h1>Projects</h1>
        <div class="container">
        <div class="side">
        <img
            className="App-picture"
            src="Friendo.png"
            alt="Friendo App"
          />
          <br />
        <a
          href="https://friendo.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Friendo
        </a>{" "}
        <p>about this app</p>
        </div>
        <br />
        <br />
        <div class="side">
        <img
            className="App-picture"
            src="Co-opper.png"
            alt="Co-opper App"
          />
          <br />
        <a
          href="https://co-opper.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Co-opper
        </a>{" "}
        <p>about this app</p>
        </div>
        <br />
        <br />
        <div class="side">
        <img
            className="App-picture"
            src="Ghibli.png"
            alt="Ghibli App"
          />
          <br />
        <a
          href="https://zander618.github.io/GhibliRepo/"
          target="_blank"
          rel="noreferrer"
        >
          GhibliRepo
        </a>{" "}
        <p>about this app</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
