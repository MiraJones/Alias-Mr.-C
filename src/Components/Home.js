import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
      <div className="home-pic"></div>
        <div className="classes-block">
          <h3 className="home-subtitle">
            Classes Mr. C is Teaching:
            <hr className="sub-underline"/>
          </h3>
            <Link to="/defenseAgainstTheDarkArts">
              <p className="home-first">Defense Against the Dark Arts (summer)</p>
            </Link>
            <Link to="/ELO">
              <p className="home-first">Ex Libris Optimis (ELO)</p>
            </Link>
            <Link to="/Empires">
              <p className="home-first">Three Empires (Egypt, Greece, Rome)</p>
            </Link>
          <hr className="sub-underline"/>
        </div>
        <div className="why-block">
          <Link to="/testimonials">
          <h3 className="home-subtitle" id="why">Why Mr. C?
          </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
