import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Basic.css"

export default function Lumen() {
  return (
    <div className="Defense">
      <div className="defense-content">
        <h1 className="defense-title">Lumen Scholar Institute</h1>
        <div className="defense-p1">
          Lumen Scholar is an online charter school located in Orem. <br />
          Mr. C teaches 9th grade World Civilizations, 10th Grade US History,
          and 11/12 Ancient History. <br />
          <br />
          More info at:
          <a href="https://LumenScholar.org">LumenScholar.org</a>
        </div>
      </div>
    </div>
  );
}
