import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faHtml5, faCss3Alt, faJsSquare);

// import "./icon.css";

const icons = {
  HTML: { icon: ["fab", "html5"], color: "orange" },
  "React.js": { icon: ["fab", "react"] },
  CSS: { icon: ["fab", "css3"] },
  JS: { icon: ["fab", "js"], color: "yellow" }
};

export default class icon extends Component {
  render() {
    const { icon } = this.props;
    return icons[icon] ? (
      <FontAwesomeIcon
        color={icons[icon].color || ""}
        icon={icons[icon].icon}
      />
    ) : (
      <span>{icon}</span>
    );
  }
}
