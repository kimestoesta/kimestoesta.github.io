import React, { Component } from 'react';
import '../Project.css';

class VideoNode extends Component {
  constructor(url, title, columns) {
    super();
    this.url = url;
    this.title = title;
    this.columns = columns;
  }

  render() {
    return (
      <div className="project-video">
        <iframe src={this.url} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title={this.title} />
      </div>
    );
  }
}

export default VideoNode;