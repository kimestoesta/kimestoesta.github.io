import React, { Component } from 'react';
import ImageLoader from 'react-load-image';
import { ClipLoader } from 'react-spinners';
import styles from './ImageNode.module.scss';

class ImageNode extends Component {
  constructor(options) {
    super();
    this.options = options;
    this.columns = options.columns
  }

  render() {
    return (
      <div class={this.options.nodeStyles}>
        {this.options.header ? (
          <h3 class={this.options.headerStyles+' projectheader'}>{this.options.header}</h3>
        ) : null}
        <ImageLoader src={this.options.url} >
          <img alt="" className={styles.projectImage} />
          <div>Error!</div>
          <ClipLoader />
        </ImageLoader>
      </div>
    );
  }
}

export default ImageNode;
