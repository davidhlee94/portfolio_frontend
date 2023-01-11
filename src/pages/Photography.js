import React from "react";
import "./Photography.css";
import { Link } from "react-router-dom";

const Photography = () => {
  return (
    <div className="photography-container">
      <div className="photography-title-container">
        <h1 className="photography">PHOTOGRAPHY</h1>
      </div>
      <div className="divider">
        <hr class="rounded" />
      </div>
      <div className="photography-card-container">
        <div className="photography-card">
          <Link to="/photography/portrait">
            <img className="card-image" src="../photography/portraits/4.JPG" />
            <h2 className="card-text">Portrait</h2>
          </Link>
        </div>
        <div className="photography-card">
          <Link to="/photography/personal">
            <div className="street-photography">
              <img className="card-image" src="../photography/personal/8.JPG" />
              <h2 className="card-text">Personal</h2>
            </div>
          </Link>
        </div>
        <div className="photography-card">
          <Link to="/photography/sport">
            <div className="sport-photography">
              <img className="card-image" src="../photography/sport/1.JPG" />
              <h2 className="card-text">Sport</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photography;
