import React, { Component } from 'react';
import Footer from '../footer/Footer';
import PortfolioStuff from './PortfolioStuff';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioStuff />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
