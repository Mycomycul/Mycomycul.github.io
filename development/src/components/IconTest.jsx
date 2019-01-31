import React, { Component } from "react";
import symboldefs, { ReactComponent as Icons } from "./css/symbol-defs.svg";

export default class IconTest extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Icons /> */}
        <use href="#icon-react" width="20px" height="20px" />
      </React.Fragment>
    );
  }
}
