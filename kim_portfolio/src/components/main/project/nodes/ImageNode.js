import React, { Component } from 'react';
import ImageLoader from 'react-load-image';
import { ClipLoader } from 'react-spinners';
import styles from './ImageNode.module.scss';

class ImageNode extends Component {
  constructor(image, columns) {
    super();
    this.image = image;
    this.columns = columns;
  }

  render() {
    return (
      <div>
        <ImageLoader src={this.image}>
          <img alt="" className={styles.projectImage} />
          <div>Error!</div>
          <ClipLoader />
        </ImageLoader>
      </div>
    );
  }
}

export default ImageNode;