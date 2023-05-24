import React from "react";

const Projects = () => {
  return (
    <div>
      <div>
        <h1>Projects</h1>
        <div class="container">
          <div class="side">
            <img className="App-picture" src="Friendo.png" alt="Friendo App" />
            <br />
            <a
              href="https://friendo.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Friendo</button>
            </a>{" "}
            <p>
              A web application that allows users to add their dogs to a
              database where they can search through other user's added dogs to
              schedule play dates to make friends and become more social.
            </p>
            <ul>
              <li>React.js</li>
              <li>useContext</li>
              <li>Acitve Storage</li>
              <li>Ruby on Rails</li>
              <li>Google Cloud Storage</li>
            </ul>
            <p>Demo account sign in information</p>
            <p>Username: Demo</p>
            <p>Password: Demo</p>
          </div>
          <br />
          <br />
          <div class="side">
            <img
              className="App-picture"
              src="BetterCo-opper.png"
              alt="Co-opper App"
            />
            <br />
            <a
              href="https://co-opper.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Co-opper</button>
            </a>{" "}
            <p>
              A web application that allows users to add strictly co-op video
              games. The users are then allowed to create, edit and delete
              reviews for video games they have played.
            </p>
            <ul>
              <li>React.js</li>
              <li>Ruby on Rails</li>
              <li>Active Storage</li>
            </ul>
            <p>Demo account sign in information</p>
            <p>Username: Demo</p>
            <p>Password: Demo</p>
          </div>
          <br />
          <br />
          <div class="side">
            <img className="App-picture" src="Ghibli.png" alt="Ghibli App" />
            <br />
            <a
              href="https://zander618.github.io/GhibliRepo/"
              target="_blank"
              rel="noreferrer"
            >
              <button>GhibliRepo</button>
            </a>{" "}
            <p>
              A web application that pulls from an external api to diplay the
              complete collection of a famous Japanese animated production
              company, Studio Ghibli.
            </p>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <p>Please allow time website to load. It may take a while. Also you may need to hit this API ,             
          <a
              href="https://ghibliapi-hxye.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              GhibliAPI
            </a>{" "}
            , in order for the GhibliRepo to work.</p>
      </div>
    </div>
  );
};

export default Projects;
