import React, { Component } from 'react';
import Data from '../Data';
import ProjectRow from './ProjectRow';
import './Project.css';

class Project extends Component {
  render() {
    const id = this.props.match.params.id;
    const project = Data.projects[id];
    if (!project.rows) {
      return null;
    }

    return <div className="project-container">
      {project.rows.map((row, index) => <ProjectRow key={index} row={row} />)}
    </div>;
  }
}

export default Project;
