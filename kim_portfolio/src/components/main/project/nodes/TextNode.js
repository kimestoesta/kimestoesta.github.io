import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './TextNode.scss';

class TextNode extends Component {
  constructor(options) {
    super();
    this.options = options;
  }

  render() {
    return (
      <div className={this.options.nodeStyles+' whitebg'}>
        {this.options.header ? (
          <h3 className={this.options.headerStyles+' projectheader'}>{this.options.header}</h3>
        ) : null}
        <ReactMarkdown source={this.options.text} />
      </div>
    );
  }
}

export default TextNode;
