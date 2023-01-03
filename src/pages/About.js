import { useState, useEffect } from "react";
import "./About.css";

function About(props) {
  const [about, setAbout] = useState(null);
  const [job, setJob] = useState(null);

  const getJobData = async () => {
    const response = await fetch("./jobs.json");
    const data = await response.json();
    setJob(data);
  };

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
    getJobData();
  }, []);

  const loaded = () => (
    <div className="about-container">
      <div className="pic-and-about-container">
        <div className="pic-container">
          <img className="about-pic" src={about.pic} />
        </div>
        <div className="about-section">
          <h2 className="about-about">About</h2>
          <p className="about-bio">{about.bio}</p>
        </div>
      </div>
      <div className="experience-section">
        <h2 className="experience">Experience</h2>
        {job.map((job) => {
          return (
            <div className="job-section">
              <div className="company-and-icon">
                <img className="company-icon" src={job.icon} />
                <h3 className="job-company">{job.company}</h3>
              </div>

              <h3 className="job-title">{job.title}</h3>
              <h4 className="job-date">{job.date}</h4>
              <p className="job-description">{job.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return about && job ? loaded() : <h1></h1>;
}

export default About;
