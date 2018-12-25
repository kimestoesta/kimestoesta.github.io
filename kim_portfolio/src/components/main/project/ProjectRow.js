import React, { Component } from 'react';
import './Project.css';

class ProjectRow extends Component {

  render() {
    var totalCols = this.props.row.reduce(
      (accumulator, node) => { 
        return accumulator + (node.columns ? node.columns : 1); 
      }, 0  
    );

    var nodes = this.props.row.map(
      (node, index) => {
        var cols = node.columns ? node.columns : 1;

        const styles = {
          width: (100 * cols / totalCols) + "%"
        }
        return (
          <div key={index} className="project-node" style={styles}>
            {node.render()}
          </div>
        );
      }
    );

    return (
      <div className="project-row">
        { nodes }
      </div>
    );
  }
}

export default ProjectRow;