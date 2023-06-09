import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div class="container">
        <div class="side">
          <img
            className="App-picture"
            src="Second Temporary Headshot.PNG"
            alt="me"
          />
        </div>
        <div class="side-content-center">
          <p>
            I am an experienced Full Stack Developer with a strong background in
            frontend and backend languages such as Ruby, Ruby on Rails,
            JavaScript, React.js, and TypeScript. After gaining my software engineering certificate from Flatiron School
            I have continued practicing and learning. As a musician with a passion for audio
            production, I transitioned to a career as a lead AV Technician,
            bringing over 7 years of experience in problem-solving and
            collaboration to each project. My unique perspective allows me to
            approach challenges with innovative ideas and creativity, resulting
            in robust and high-quality solutions. As a proactive and motivated
            worker, I am committed to exceeding expectations and delivering
            exceptional results.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="side">
        <img
            className="Logo-picture"
            src="LinkedIn_logo_initials.png"
            alt="linkedin logo"
          />
          <br />
          <a
            href="https://www.linkedin.com/in/zachary-sirna/"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>{" "}
        </div>
        <br />
        <br />
        <div class="side">
        <img
            className="Logo-picture"
            src="resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="dev blog logo"
          />
          <br />
          <a
            href="https://dev.to/zander618"
            target="_blank"
            rel="noreferrer"
          >
            <button>Dev Blog</button>
          </a>{" "}
        </div>
        <br />
        <br />
        <div class="side">
        <img
          className="Logo-picture"
            src="GitHub-Mark.png"
            alt="octocat"
          />
          <br />
          <a
            href="https://github.com/Zander618"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
