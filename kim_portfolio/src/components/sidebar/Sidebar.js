import React, { Component } from 'react';
import movingLogo from './Moving-Logo.gif';
import { Link } from 'react-router-dom';
import './sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <ul className="nav navbar-nav col-sm-11 mx-auto">
          <li className="nav-item mx-auto">
            <Link to="/portfolio" className="nav-link text-dark mr-5">
              <span>Portfolio</span>
            </Link>
            {/*<Link to="/blog" className="nav-link text-dark">
              <span>Blog</span>
            </Link> */}
            <Link to="/about" className="nav-link text-dark">
              <span>About</span>
            </Link>
          </li>

          <li className="nav-item logo mx-auto">
            <img src={movingLogo} alt="" />
          </li>

          <li className="nav-item-right">
            <a
              href="https://www.instagram.com/kimeillo/"
              target="_blank"
              className="nav-link text-dark"
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
