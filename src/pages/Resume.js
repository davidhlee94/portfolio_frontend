import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume">Resume</h1>
      <h3 className="resume-instruction">
        Please click the button below to download my resume!
      </h3>
      <div className="download-row">
        <img
          className="megaman"
          src="https://thumbs.gfycat.com/AjarBasicBergerpicard.webp"
        />
        <a href="DavidLee_Resume.pdf" download="DavidLee_Resume.pdf">
          <button className="download-button">Download</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
