import React from "react";

const Projects = () => {
  return (
    <div class="container">
      <div class="side">
        <h1>Projects</h1>
        <div class="side">
        <img
            className="Logo-picture"
            src="Friendo.png"
            alt="dev blog logo"
          />
        <a
          href="https://friendo.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Friendo
        </a>{" "}
        </div>
        <br />
        <br />
        <div class="side">
        <img
            className="Logo-picture"
            src="C.png"
            alt="dev blog logo"
          />
        <a
          href="https://co-opper.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          Co-opper
        </a>{" "}
        </div>
        <br />
        <br />
        <div class="side">
        <img
            className="Logo-picture"
            src="Ghibli.png"
            alt="dev blog logo"
          />
        <a
          href="https://zander618.github.io/GhibliRepo/"
          target="_blank"
          rel="noreferrer"
        >
          GhibliRepo
        </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;
