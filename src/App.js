import React, { Component } from "react";
import Panel from "./components/Panel";
import Modal from "./components/Modal";
import TopArrow from "./components/TopArrow";
import symboldefs, { ReactComponent as Icons } from "./components/css/symbol-defs.svg";
// import symboldefs, { ReactComponent as Icons } from "./css/symbol-defs.svg";


import "./App.css";

export default class App extends Component {
  state = {
    projectBox: [
      {
        title: "PDF Writer",
        summary:
          "Print HTML form inputs on a pre-existing PDF document",
        skills: ["C#", "ASP.NET MVC", "JSON", "Photoshop"],
        links: [
          { link: "https://github.com/mycomycul/PDFWriter", label: "Github" },
          {
            link:
              "https://github.com/mycomycul/PDFWriter/blob/master/FormScreenShot.jpg",
            label: "Sample Form"
          },
          {
            link:
              "https://github.com/mycomycul/PDFWriter/blob/master/PrintedCatContract.pdf",
            label: "Completed Contract"
          }
        ],
        description:
          ["This is a sample version of a larger project for digitally signing large PDF contracts. The company needed a solution that didn't require an API subscription or creating a new editable PDF. \n\n This sample is for registering your feline when moving to the moon. It recalculates your pet's weight for the moon, fills in the contract with the modfied content and also issues a registration certificate from the lunar authorities. \n The project uses ASP.NET MVC and the PDFSharp Library"],
          features:["Print to multiple page documents","Maintain original PDF formatting","Stores printing locations in JSON","Works with radiobuttons for PDF checkboxes","Handles font, font-size, and font-style","Email or direct download completed documents"]
      },
      {
        title: "Strunktech.com",
        summary: "Project portfolio website built with React",
        skills: ["React.js", "HTML", "CSS", "JavaScript"],
        links:[{label:"Strunktech.com",link:"www.strunktech.com"}],
        description:
          ["This website is currently being transtioned to a React Product when I can spare time"],
          indev:"Animate Skills and About, Add projects"
      },
      {
        title: "My Trails",
        summary: "Trail Conditions Scraper and Map Visualizer",
        skills: [
          "C#",
          "ASP.NET MVC",
          "JavaScript",
          "GeoJSON",
          "SQL Server Spatial Data",
          "Google Maps"
        ],
        description:[ "Scrapes trail conditons from the Olympic National Park website so that they can viewed alongside a map of trail conditions.",
      "The current website is a static website with no long term records or visual UX.  MyTrails allows you to look at a history of conditions and the location of selected trails on a map"],
      features:["Imports GeoJSON data into SQL Server and returns it back as JSON", "Web Scraping of NPS Trails Conditions","Cleans content of excess HTML markup", "Automatic and Manual pairing of trail conditions with map data","Interface for viewing trail names, a long-term record of conditions and map data"],
      indev : "Build react interface, Oraganize pages"

      },

      {
        title: "MSDN Resize",
        summary: "Chrome MSDN restyling extension for smaller screens ",
        skills: [
          "Google Chrome Extensions", "JavaScript", "CSS", "HTML"
        ],
        image:"MSDNResize.png",
        links:[{label:"Chrome Store",link:"https://chrome.google.com/webstore/detail/msdn-resize/bdcaffgeeafpmnpeogoipgfhklbppjlc"},{label:"Github",link:"https://github.com/mycomycul/MSDNFix"}],
        description: ["Google Chrome Extension that allows the user to reduce the the width of the MSDN side bar. If you've ever tried to use the MSDN Documentaiton on half your screen and found too much screen real estate was dedicated to the sidebar?"],
        features:["Adds Vertical divider between panes for quick resizing with just a click", "Automatically resizes with window resizing"]
      }
    ],
    modalProject: {}
  };
  handleOpenModal = projectId => {
    const modalProject = this.state.projectBox[projectId];
    modalProject.display = true;
    this.setState({ modalProject: modalProject });
  };
  handleCloseModal = () => {
    const modalProject = {};
    this.setState({ modalProject: modalProject });
  };
  handleWindowClick = event => {
    if (event.target == this.modal) {
      this.handleCloseModal();
    }
  };
  componentDidMount() {
    this.modal = document.getElementById("project-modal");
    window.addEventListener("click", this.handleWindowClick);
  }
  render() {
    return (
      <React.Fragment>
      <Icons/>
        <Panel
          projectBox={this.state.projectBox}
          onClick={this.handleOpenModal}
        />
        <Modal
          project={this.state.modalProject}
          onClose={this.handleCloseModal}
        />
        <TopArrow></TopArrow>
        {/* <IconTest></IconTest> */}
      </React.Fragment>
    );
  }
}
