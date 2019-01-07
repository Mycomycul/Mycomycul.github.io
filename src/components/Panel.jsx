import React, { Component } from "react";
const spanStyle = {
  color: "blue",
  backgroundColor: "grey"
};
class Panel extends Component {
  render() {
    return (
      <div className="inner-panel-container centery" style={spanStyle}>
        Content
      </div>
    );
  }
}

export default Panel;
