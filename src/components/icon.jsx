import React, { Component } from "react";
import symboldefs from "./css/symbol-defs.svg";
import "./css/icon.css";

const icons = {
  HTML: { icon: "html5" },
  "React.js": { icon: "react" },
  CSS: { icon: "css3" },
  JS: { icon: "javascript" },
  "ASP.NET MVC": { icon: "MVC" },
  Python: { icon: "python" },
  "Raspberry Pi": { icon: "raspberrpi" },
  Photoshop: { icon: "adobephotoshop" },
  "Google Chrome Extensions": { icon: "chrome" },
  "C#": { icon: "c-sharp" },
  "SQL Server Spatial Data": { icon: "SQL" },
  "Google Maps": { icon: "google-maps" },
  GeoJSON: { icon: "geo-json" }
};

export default class icon extends Component {
  render() {
    const { icon, displayType } = this.props;

    if (displayType != "text" && icons[icon]) {
      return renderIcon(icon);
    } else if (displayType != "icon") {
      return renderText(icon);
    }
    return null;
  }
}
function renderIcon(icon) {
  return (
    <i className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <use xlinkHref={`${symboldefs}#${"icon-" + icons[icon].icon}`} />
      </svg>
    </i>
  );
}

function renderText(icon) {
  return <span>{icon}</span>;
}
