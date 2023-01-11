import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-title-container">
        <h1 className="resume">Resume</h1>
      </div>
      <div className="divider">
        <hr class="rounded" />
      </div>
      <h3 className="resume-instruction">
        View my resume below or click button below to download!
      </h3>
      <div className="download-row">
        <a href="DavidLee_Resume.pdf" download="DavidLee_Resume.pdf">
          <button className="download-button">Download</button>
        </a>
      </div>
      <iframe
        src="https://drive.google.com/file/d/1835ZlLAUaunZwHsznCR3s6gDLPLGBSQv/preview"
        allow="autoplay"
        className="iframe"
      ></iframe>
    </div>
  );
};

export default Resume;
