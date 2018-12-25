import React, { Component } from 'react';
import movingLogo from './Moving-Logo.gif';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link text-dark">
              <span>Portfolio</span>
            </Link>
            <Link to="/blog" className="nav-link text-dark">
              <span>Blog</span>
            </Link>
            <Link to="/about" className="nav-link text-dark">
              <span>About</span>
            </Link>
          </li>

          <li className="nav-item logo">
            <img src={movingLogo} alt="" />
          </li>

          <li className="nav-item">
            <Link to="/sketchbook" className="nav-link text-dark">
              <span>Sketchbook</span>
            </Link>
            <a
              href="EstoestaKim_Resume.pdf"
              target="_blank"
              className="nav-link text-dark"
            >
              <span>R&Eacute;sum&Eacute;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
