import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/iamdavidhanlee/">
          <img className="icon" src="./images/linkedin.png" />
        </a>
        <a href="https://github.com/davidhlee94">
          <img className="icon" src="./images/github.png" />
        </a>
        <a href="mailto:myemailaddress@gmail.com">
          <img className="icon" src="./images/email.png" />
        </a>
      </div>
      <div>
        <h6 className="name">©DAVID LEE</h6>
      </div>
    </div>
  );
}

export default Footer;
