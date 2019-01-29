import React, { Component } from "react";
import "./css/ProjectBox.css";
import Icon from "./Icon";
import intersperse from "./function.js";

class ProjectBox extends Component {
  render() {
    const { id, project, onClick } = this.props || {};
    const sepskills = intersperse(this.props.project.skills, ", ");
    return (
      <div className="col-4 col-sm-6">
        <div className="project-box" onClick={() => onClick(id)}>
          <title className="griditem project-title">{project.title}</title>
          {/* <section className="project-links grid-item">Links</section> */}
          <section className="project-description grid-item">
            <span className="project-summary">{project.summary}</span>
            <br />
            <div className="icon-container">
              {project.skills.map((skill, index) => (
                <Icon key={index} icon={skill} size="30" displayType="icon" />
              ))}
            </div>
            <br />
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
