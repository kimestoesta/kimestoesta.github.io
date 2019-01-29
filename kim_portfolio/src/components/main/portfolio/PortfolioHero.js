import React, { Component } from 'react';
import styles from './PortfolioHero.scss';

class PortfolioHero extends Component {
  render() {
    return (
      <div className="text-dark mx-auto">
        <h4 className="m-b-50"> Hello! My Name is</h4>
        <h1 className="m-b-30"> Kim Estoesta</h1>
        <h5 className="m-6"> Love me. pls.</h5>
        <a href="#portfolio" className="btn btn-dark anim-scroll">
          View Work
        </a>
      </div>
    );
  }
}

export default PortfolioHero;
