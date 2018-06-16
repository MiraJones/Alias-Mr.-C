import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Chris Jones, Alias Mr. C</h1>
        <div className="classes-block">
          <h3 className="home-subtitle">
            Classes Mr. C is Teaching:
            <hr className="sub-underline"/>
          </h3>
          
            <Link to="/defenseAgainstTheDarkArts">
              <div className="home-first">Defense Against the Dark Arts</div>
            </Link>
            <Link to="/ELO">
              <div className="home-first">ELO</div>
            </Link>
            <Link to="/Empires">
              <div className="home-first">Empires</div>
            </Link>
        </div>
        <div className="why block">
          <h3 className="why">Why Mr. C?</h3>
          <Link to="/testimonials">
          <div className="to-testimonials">Check out the Testimonials</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
