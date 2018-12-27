import React, { Component } from 'react';

class TextNode extends Component {
  constructor(text, header) {
    super();
    this.text = text;
    if (!text) {
      this.text = 
        'Lorem ipsum dolor sit amet, consectetur '+
        'adipiscing elit, sed do eiusmod tempor incididunt ut '+
        'labore et dolore magna aliqua. Ut enim ad minim veniam, '+
        'quis nostrud exercitation ullamco laboris nisi ut aliquip '+
        'ex ea commodo consequat. Duis aute irure dolor in reprehenderit '+
        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '+
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa '+
        'qui officia deserunt mollit anim id est laborum.';
    }
    this.header = header;
  }

  render() {
    return (
      <div>
        {this.header ? <h3>{this.header}</h3> : null}
        <div dangerouslySetInnerHTML={{__html: this.text}} />
      </div>
    );
  }
}

export default TextNode;