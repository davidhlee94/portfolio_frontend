import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="home-container">
      <h1 className="home-name">{about.name}</h1>
      <div className="home-brief">
        <p>Full Stack Software Developer.</p>
        <p>Marketer & Project Manager.</p>
        <p>Brazilian Jiu-jitsu student.</p>
        <p>Photographer.</p>
      </div>
    </div>
  );

  return (
    <div>
      <div>{about ? loaded() : <h1></h1>}</div>
    </div>
  );
}

export default Home;
