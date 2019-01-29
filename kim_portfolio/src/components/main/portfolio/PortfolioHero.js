import React, { Component } from 'react';
import styles from './PortfolioHero.scss';

class PortfolioHero extends Component {
  render() {
    return (
      <div className="heroheight col-lg-8 mx-auto text-center">
        <h4 className="mb-2">under construction</h4>
        <p className="mb-5">Don't look on mobile. it's ugly.</p>
        <a href="#portfolio" className="btn btn-dark anim-scroll">
          View Work
        </a>
      </div>
    );
  }
}

export default PortfolioHero;
