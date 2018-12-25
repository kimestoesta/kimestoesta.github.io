import React, { Component } from 'react';
import aboutMeImage from './kimprofile.png';
import Footer from '../footer/Footer';

class About extends Component {
  render() {
    return (
      <div id="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-4 col-md-push-7" id="about-me">
              <h2>About me!</h2>
              Hi I'm Kim Estoesta, a visual designer at GitHub.
              <br />
              <br />
              Think I'm really cool? Feel free to contact me. <br />
              <br />
              <br />
              <a
                href="mailto:kimestoesta@gmail.com?subject=Let's be friends!"
                className="btn btn-dark anim-scroll"
              >
                Message Me
              </a>
            </div>

            <div className="col-xs-12 col-md-6 col-md-pull-4" id="mypic">
              <img src={aboutMeImage} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
