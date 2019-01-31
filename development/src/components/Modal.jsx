import React, { Component } from "react";
import "./css/Modal.css";
import Icon from "./Icon";
function intersperse(arr, sep) {
  if (arr.length !== 0) {
    return arr.slice(1).reduce(
      function(xs, x, i) {
        return xs.concat([sep, x]);
      },
      [arr[0]]
    );
  }
  return [];
}
export default class Modal extends Component {
  render() {
    //If no data is received, clear the modal and close it
    const {
      skills = [],
      description = [],
      display = false,
      links = [],
      title = "",
      image = "",
      summary = "",
      features = [],
      indev = ""
    } = this.props.project || {};
    var sepskills = intersperse(skills, ",");

    return (
      <div id="project-modal" className={this.getDisplayClass(display)}>
        <div className="modal-content">
          <span onClick={this.props.onClose} className="modal-close">
            &times;
          </span>
          {image != "" && (
            <img className="project-pic" src={"./images/projects/" + image} />
          )}
          <h3 className="modal-project-title">{title}</h3>
          {/* DESCRIPTIONS Breaks apart text on newlines (\n) and puts them each in a new span */}
          {description.map((line, index) => (
            <section key={index}>
              {" "}
              {line.split("\n").map((item, key) => {
                return <p key={key}>{item}</p>;
              })}
            </section>
          ))}
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature} </li>
            ))}
          </ul>
          {indev && (
            <p className="">
              <h4 className="in-dev">In DEV:</h4> <span>{indev}</span>
            </p>
          )}

          <section id="skills">
            {skills.map((skill, index) => (
              <Icon key={index} icon={skill} size="30" displayType="icon">
                {skill}{" "}
              </Icon>
            ))}
          </section>
          <hr />
          <section className="modal-links">
            {links.map((link, key) => {
              return (
                <a href={link.link} key={key[0]}>
                  {link.label}
                </a>
              );
            })}
          </section>
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
