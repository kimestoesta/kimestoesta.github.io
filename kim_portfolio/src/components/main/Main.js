import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import About from './about/About';
import Blog from './blog/Blog';
import Portfolio from './portfolio/Portfolio';
import Sketchbook from './sketchbook/Sketchbook';
import Project from './project/Project';
import styles from './Main.module.scss';

class Main extends Component {
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      padding: '16px',
      position: 'absolute',
      transform: `scale(${styles.scale})`,
      width: '100%',
    };
  }

  // wrap the `spring` helper to use a bouncy config
  bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22
    });
  }

  bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: this.bounce(0),
      scale: this.bounce(0.8)
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: this.bounce(1),
      scale: this.bounce(1)
    }
  };

  render() {
    return (
      <div>
        <AnimatedSwitch
          atEnter={this.bounceTransition.atEnter}
          atLeave={this.bounceTransition.atLeave}
          atActive={this.bounceTransition.atActive}
          mapStyles={this.mapStyles}
          className={styles.routeWrapper}
        >
          <Route exact path="/" component={Portfolio} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/sketchbook" component={Sketchbook} />
          <Route path="/about" component={About} />
          <Route path="/project/:id" component={Project} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default Main;
