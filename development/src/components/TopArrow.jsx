import React, { Component } from "react";
import "./css/TopArrow.css";

export default class TopArrow extends Component {
  render() {
    return (
      <div id="top-arrow-box" onClick={goToTop}>
        <i className="up-arrow" />
      </div>
    );
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-arrow-box").style.display = "block";
  } else {
    document.getElementById("top-arrow-box").style.display = "none";
  }
}
