import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Photography from "./pages/Photography";
import Portrait from "./pages/Portrait";
import Personal from "./pages/Personal";
import Sport from "./pages/Sport";
import Footer from "./components/Footer";

function App() {
  // URL should have YOUR HEROKU URL for your backend (will build later), make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className="app-container">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects URL={URL} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/portrait" element={<Portrait />} />
          <Route path="/photography/personal" element={<Personal />} />
          <Route path="/photography/sport" element={<Sport />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
