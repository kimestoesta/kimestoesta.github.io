import React, { Component } from 'react';
import bgpNamelogo from './bgp-moving.gif';
import { Link } from 'react-router-dom';
import './sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <ul className="nav navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <Link to="/portfolio" className="nav-link">
              <span>Portfolio</span>
            </Link>
            <Link to="/about" className="nav-link">
              <span>About</span>
            </Link>
          </li>

          <li className="nav-item logo mx-auto">
            <img src={bgpNamelogo} alt="" />
          </li>

          <li className="nav-item-right">
            <a
              href="https://www.instagram.com/kimeillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <span>@kimeillo</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
