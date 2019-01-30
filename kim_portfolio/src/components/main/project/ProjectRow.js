import React, { Component } from 'react';
import styles from './ProjectRow.module.scss';

class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth});
  }

  render() {
    var totalCols = this.props.row.reduce((accumulator, node) => {
      return accumulator + (node.columns ? node.columns : 1);
    }, 0);

    var nodes = this.props.row.map((node, index) => {
      var cols = node.columns ? node.columns : 1;

      console.log(this.state.width);
      const widthStyles = {
        width: (this.state.width < 768 ? 100 : (100 * cols) / totalCols) + '%'
      };

      return (
        <div key={index} className={styles.projectNode} style={widthStyles}>
          {node.render()}
        </div>
      );
    });

    return <div className={styles.projectRow}>{nodes}</div>;
  }
}

export default ProjectRow;
