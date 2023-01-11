import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [about, setAbout] = useState(null);
  const [job, setJob] = useState(null);
  const [education, setEducation] = useState(null);

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
          <h2 className="about-about">ABOUT</h2>
          <p className="about-bio">{about.bio}</p>
        </div>
      </div>
      <div className="divider">
        <hr class="rounded" />
      </div>
      <div className="education-section">
        <h3 className="education">EDUCATION</h3>
        <div className="school-section">
          <div className="school-icon-name">
            <img
              className="school-icon"
              src="https://www.nicepng.com/png/full/205-2057070_general-assembly-icon.png"
            />
            <h3 className="school-name">
              General Assembly Software Engineering Immersive
            </h3>
          </div>
          <h3 className="school-degree">
            Expected Certification of Completion | 420 hours
          </h3>
          <h4 className="school-date">Expected February 2023</h4>
        </div>
        <div className="school-section">
          <div className="school-icon-name">
            <img
              className="school-icon"
              src="https://brand.ucsd.edu/_images/logos-and-brand-elements/additional-campus-logos/ucsd-seal.svg"
            />
            <h3 className="school-name">University of California, San Diego</h3>
          </div>
          <h3 className="school-degree">
            B.A. International Studies - International Business
          </h3>
          <h4 className="school-date">June 2017</h4>
        </div>
        <div className="school-section">
          <div className="school-icon-name">
            <img
              className="school-icon"
              src="https://www.ohlone.edu/sites/default/files/documents/imported/ohlonelogo-symboll-emailsignature.jpg"
            />
            <h3 className="school-name">Ohlone College</h3>
          </div>
          <h3 className="school-degree">A.A. Business</h3>
          <h4 className="school-date">June 2014</h4>
        </div>
      </div>
      <div className="divider">
        <hr class="rounded" />
      </div>
      <div className="experience-section">
        <h2 className="experience">EXPERIENCE</h2>
        {job.map((job) => {
          return (
            <div className="job-section">
              <div className="company-and-icon">
                <img className="company-icon" src={job.icon} />
                <h3 className="job-company">{job.company}</h3>
              </div>
              <h3 className="job-title">{job.title}</h3>
              <h4 className="job-date">{job.date}</h4>
              <div>
                <p>{job.res1}</p>
                <p>{job.res2}</p>
                <p>{job.res3}</p>
                <p>{job.res4}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return about && job ? loaded() : <h1></h1>;
}

export default About;
