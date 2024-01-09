// Navigation.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/FullStackPage">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/DataSciencePage">Data Science</Link>
        </li>
        <li>
          <Link to="/CyberSecurityPage">Cyber Security</Link>
        </li>
        <li>
          <Link to="/CareerPage">Career</Link>
        </li>
      </ul>
      </nav>
        
  );
}

export default Navigation;
