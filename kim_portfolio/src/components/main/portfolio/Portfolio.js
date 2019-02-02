import React, { Component } from 'react';
import Footer from '../footer/Footer';
import PortfolioStuff from './PortfolioStuff';
import PortfolioHero from './PortfolioHero';
import './Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className="projectbg">
        <PortfolioHero />
        <PortfolioStuff />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
