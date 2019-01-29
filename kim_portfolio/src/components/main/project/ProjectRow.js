import React, { Component } from 'react';
import styles from './ProjectRow.module.scss';

class ProjectRow extends Component {
  render() {
    var totalCols = this.props.row.reduce((accumulator, node) => {
      return accumulator + (node.columns ? node.columns : 1);
    }, 0);

    var nodes = this.props.row.map((node, index) => {
      var cols = node.columns ? node.columns : 1;

      const widthStyles = {
        width: (100 * cols) / totalCols + '%'
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
