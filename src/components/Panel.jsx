import React, { Component } from "react";
import ProjectBox from "./ProjectBox";
import "./css/Panel.css";

class Panel extends Component {
  render() {
    return (
      <div className="inner-panel-container centery">
        <div className="project-holder row">
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </div>
    );
  }
}

export default Panel;
