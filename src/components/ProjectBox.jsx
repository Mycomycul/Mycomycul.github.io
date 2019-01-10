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
          <section className="project-links grid-item">Links</section>
          <section className="project-description grid-item">
            <span className="project-summary">
              {this.props.project.summary}
            </span>
            <br />
            <strong>Skills:</strong> {this.props.project.skills}
            {/* Breaks apart text on newlines (\n) and puts them each in a new span */}
            {this.props.project.description.split("\n").map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
