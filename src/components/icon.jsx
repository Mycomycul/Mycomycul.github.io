import React, { Component } from "react";
import symboldefs from "./css/symbol-defs.svg";

const icons = {
  HTML: { icon: "icon-html-five" },
  "React.js": { icon: "icon-react" },
  CSS: { icon: "icon-css3" },
  JS: { icon: "icon-javascript" }
};

export default class icon extends Component {
  render() {
    const { icon } = this.props;
    return icons[icon] ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <use xlinkHref={`${symboldefs}#${icons[icon].icon}`} />
      </svg>
    ) : (
      <span>{icon}</span>
    );
  }
}
