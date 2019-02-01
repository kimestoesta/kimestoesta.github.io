import React, { Component } from 'react';
import aboutMeImage from './kimprofile.png';
import KimResume from './EstoestaKim_Resume.pdf';
import Footer from '../footer/Footer';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid aboutpage">
          <div className="profilepic">
            <img src={aboutMeImage} alt="kim" className="mypic" />
          </div>
          <div className="mb-4" id="about-me">
            <h1 className="biggo">Hi, I'm Kim!</h1>
            <p className="mb-4">also known as kimeillo, kimestoesta, queenkimba, kimmer_swimmer, amazing designer, awesome person, and a clever girl.</p>
            <h2><span className="emoji" role="img" aria-label="keyboard">⌨️</span>I <a href="https://github.com/kimestoesta">code</a> a little but like it a lot and want to do more</h2>
            <h2><span className="emoji" role="img" aria-label="plant">🌿</span>I like to draw plants and girls and I think people <a href="https://www.instagram.com/kimeillo/">like</a> it</h2>
            <h2><span className="emoji" role="img" aria-label="basketball">🏀</span>I design things and I am not throwing away my <a href="https://dribbble.com/KimEstoesta">shot</a></h2>
            <h2><span className="emoji" role="img" aria-label="bird">🐦</span>I share my <a href="https://twitter.com/KimEstoesta">thoughts</a> and try to keep up with the kids </h2>
            <h2><span className="emoji" role="img" aria-label="controller">🎮</span>I can beat you in Splatoon just watch <a href="https://www.twitch.tv/kimeillo">(coming soon)</a></h2>
            <p className="mt-4">I am currently designing site illustrations, defining brand guidelines, branding & shipping conferences, and vectoring octocats at GitHub.</p>
            <p className="mt-4"><a href={KimResume}>Read my Resume</a></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
