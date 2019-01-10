import React, { Component } from "react";
import ProjectBox from "./ProjectBox";
import "./css/Panel.css";

class Panel extends Component {
  render() {
    const { projectBox } = this.props;
    return (
      <div className="inner-panel-container centery">
        <div className="project-holder row">
          {projectBox.map(project => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Panel;
