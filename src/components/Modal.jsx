import React, { Component } from "react";
import "./css/Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div id="project-modal" className={this.getDisplayClass()}>
        <div className="modal-content">
          <span className="modal-close">&times;</span>
          <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }
  getDisplayClass() {
    let classes = "modal";
    if (this.props.project.display === true) {
      classes += " modal-visible";
    }
    return classes;
  }
}
