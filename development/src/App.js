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
          indev:"Overflow on tooltips, Add projects"
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
      },
      {
        title: "Temp Compare",
        summary: "Arduino Program for displaying multiple thermometer values and alerting if one becomes greater than the other",
        skills: [
          "C", "Arduino", "Electronics"
        ],
        links:[{label:"Github",link:"https://github.com/mycomycul/ArduinoTempCompare/"},{label:"TinkerCAD",link:"https://www.tinkercad.com/things/heJVZbuhrdK"},{label:"Wiring Diagram",link:"https://github.com/mycomycul/ArduinoTempCompare/blob/master/ArduinoTempCompare.png"}],
        description: ["In the heat of the summer, I would check the thermometer outside all morning for when it started to be hotter outside and I needed to turn off the box fan and close the windows and blinds to preserve the cool indoor temperature and then repeat the process in reverse each evening.\n Wiring two thermometers to an arduino with this little program, I can see both temperatures in one spot and get a visual cue of a fading in and out light when the temperature has swapped so I don't miss it and spend more time in a baking apartment than necessary"],
        features:["Displays values for two thermometers", "Switch between \u00B0F and \u00B0C", "Fades LCD LED in and out when temperature difference between either values swaps from negative to positive"]
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
