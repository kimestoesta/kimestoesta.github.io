import React, { Component } from 'react';
import styles from './VideoNode.module.css';

class VideoNode extends Component {
  constructor(url, title, columns) {
    super();
    this.url = url;
    this.title = title;
    this.columns = columns;
  }

  render() {
    return (
      <div className={styles.projectVideo}>
        <iframe src={this.url} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title={this.title} />
      </div>
    );
  }
}

export default VideoNode;