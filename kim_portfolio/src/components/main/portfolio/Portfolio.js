import React, { Component } from 'react';
import Footer from '../footer/Footer';
import PortfolioStuff from './PortfolioStuff';
import PortfolioHero from './PortfolioHero';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioHero />
        <PortfolioStuff />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
