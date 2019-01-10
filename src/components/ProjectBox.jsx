import React, { Component } from "react";
import "./css/ProjectBox.css";

class ProjectBox extends Component {
  state = {};
  render() {
    return (
      <div className=" col-4">
        <div className="project-box">
          <title className="griditem project-title">
            {this.props.project.title}
          </title>
          <section class="project-links grid-item">Links</section>
          <section class="project-description grid-item">
            Description. This is a description of the project
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
