import React, { Component } from "react";
import "./css/Modal.css";

export default class Modal extends Component {
  render() {
    //If no data is received, clear the modal and close it
    const { description = "", display = false } = this.props.project || {};
    return (
      <div id="project-modal" className={this.getDisplayClass(display)}>
        <div className="modal-content">
          <span onClick={this.props.onClose} className="modal-close">
            &times;
          </span>
          {/* Breaks apart text on newlines (\n) and puts them each in a new span */}
          {description.split("\n").map((item, key) => {
            return <p key={key}>{item}</p>;
          })}
          {/* <p>{description}</p> */}
        </div>
      </div>
    );
  }
  getDisplayClass(display) {
    let classes = "modal";
    if (display === true) {
      classes += " modal-visible";
    }
    return classes;
  }
}
