import React, { Component } from 'react';
import aboutMeImage from './kimprofile.png';
import Footer from '../footer/Footer';
import styles from './About.scss';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid aboutpage">
          <div className="profilepic">
            <img src={aboutMeImage} alt="picture of kim" className="mypic" />
          </div>
          <div className="" id="about-me">
            <h1>About me!</h1>
            <h4>thing 1 Lorem ipsum dolor sit amet</h4>
            <h4>thing 2 super Ut suscipit nulla sit amet dui convallis luctus</h4>
            <h4>thing 3 rad Proin hendrerit non augue maximus consequat</h4>
            <h4>thing 4 awesome Aliquam dictum orci ut arcu</h4>
            <h4>thing 5 sweet Integer ac tortor vitae nunc pharetra facilisis</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet neque a justo lobortis pretium. Ut suscipit nulla sit amet dui convallis luctus. Nam tempus ultricies consequat. Nam condimentum lectus et urna tempor mollis. Proin hendrerit non augue maximus consequat. Sed laoreet mattis ipsum ut euismod. Integer ac tortor vitae nunc pharetra facilisis quis a risus. Duis pellentesque nec enim sed consequat. Donec turpis magna, dictum maximus libero ac, aliquam tincidunt magna. Etiam placerat venenatis convallis. Maecenas convallis purus id tristique tincidunt. Aliquam dictum orci ut arcu elementum feugiat.</p>
            <p>Read my resume.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
