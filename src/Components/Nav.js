import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">Alias Mr.C</div>
      </Link>
      <div className="links">
        <div className="dropdown">
          <button className="dropbtn">Classes</button>
          <div className="drop-content">
            <a href="/#/defenseAgainstTheDarkArts">
              Defense Against The Dark Arts
            </a>
            <a href="/#/ELO">Ex Libris Optimis</a>
            <a href="/#/Empires">Three Empires</a>
          </div>
        </div>
        <div className="others">
          <Link to="/Testimonials">
            <div className="testimonials">Testimonials</div>
          </Link>
          <Link to="/About">
            <div className="about">About</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
