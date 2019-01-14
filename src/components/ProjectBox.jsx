import React, { Component } from "react";
import "./css/ProjectBox.css";

class ProjectBox extends Component {
  render() {
    return (
      <div className="col-4">
        <div
          className="project-box"
          onClick={() => this.props.onClick(this.props.project.id)}
        >
          <title className="griditem project-title">
            {this.props.project.title}
          </title>
          <section className="project-links grid-item">Links</section>
          <section className="project-description grid-item">
            <span className="project-summary">
              {this.props.project.summary}
            </span>
            <br />
            <strong>Skills:</strong> {this.props.project.skills}
            <br />
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
