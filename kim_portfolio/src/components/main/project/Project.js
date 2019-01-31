import React, { Component } from 'react';
import Data from '../Data';
import ProjectRow from './ProjectRow';
import Footer from '../footer/Footer';
import styles from './Project.module.scss';

class Project extends Component {
  render() {
    const id = this.props.match.params.id;
    const project = Data.projects[id];
    if (!project.rows) {
      return null;
    }

    return (
      <div className={styles.projectContainer}>
        <h1 className={styles.projecttitle}>{project.title}</h1>
        <h6 className={styles.projecttags}>{project.tags.join(' / ')}</h6>
        {project.rows.map((row, index) => (
          <ProjectRow key={index} row={row} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Project;
