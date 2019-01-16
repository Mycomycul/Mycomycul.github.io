import React, { Component } from "react";
import "./css/ProjectBox.css";

class ProjectBox extends Component {
  render() {
    const { id, project, onClick } = this.props;
    return (
      <div className="col-4 col-sm-6">
        <div className="project-box" onClick={() => onClick(id)}>
          <title className="griditem project-title">{project.title}</title>
          <section className="project-links grid-item">Links</section>
          <section className="project-description grid-item">
            <span className="project-summary">{project.summary}</span>
            <br />
            <strong>Skills: </strong>
            {project.skills.map((skill, index) => (
              <span key={index}>{skill} </span>
            ))}
            <br />
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
