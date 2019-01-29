import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class TextNode extends Component {
  constructor(options) {
    super();
    this.options = options;
  }

  render() {
    return (
      <div class={this.options.nodeStyles}>
        {this.options.header ? (
          <h3 class={this.options.headerStyles}>{this.options.header}</h3>
        ) : null}
        <ReactMarkdown source={this.options.text} />
      </div>
    );
  }
}

export default TextNode;
