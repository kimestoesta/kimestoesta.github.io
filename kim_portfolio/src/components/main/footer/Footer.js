import React, { Component } from 'react';
import styles from './Footer.scss';
import Octicon, {ChevronUp} from '@githubprimer/octicons-react';
import ScrollUpButton from "react-scroll-up-button";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center col-sm-12 footerstyle">
        <div>kimestoesta@gmail.com</div>
        <div>© 2019 All Rights Reserved.</div>
        <div>
          <ScrollUpButton ContainerClassName="scrollup" AnimationDuration={600}>
          <Octicon icon={ChevronUp} />
          </ScrollUpButton>
        </div>
      </footer>
    );
  }
}

export default Footer;
