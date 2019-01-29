import React, { Component } from 'react';
import Footer from '../footer/Footer';

class Sketchbook extends Component {
  render() {
    const blurb =
      'So what I want to do with this sketchbook is show you other ' +
      'creative things I like to do. I love working on involved ' +
      'developed projects but I also believe that everyone needs to ' +
      'take a break from long projects and make work for fun even if ' +
      "it's something small. These projects vary from doodles to 3D " +
      "paper sculptures and more. They're not perfect but I'm proud of " +
      'them. We should never be afraid to share what we love and my ' +
      'sketchbook is where I can unapologetically share with the world ' +
      'the silly things that I love to do.';
    return (
      <div id="blog-page">
        <section class="hero">
          <div class="hero-caption">
            <div class="hero-text">
              <h3 class="m-b-50">What is this Sketchbook thing?</h3>
              <h6>{blurb}</h6>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Sketchbook;
