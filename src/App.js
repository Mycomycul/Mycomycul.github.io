import React, { Component } from "react";
import Panel from "./components/Panel";
import Modal from "./components/Modal";

import "./App.css";

export default class App extends Component {
  state = {
    projectBox: [

      {
        id: 0,
        title: "PDF Writer",
        summary:
          "Take HTML form inputs and print them to a pre-existing PDF document",
        skills: "C#, ASP.NET MVC, JSON,  Photoshop, ",
        links: [
          { github: "https://github.com/mycomycul/PDFWriter", label: "Github" },
          {
            pdf:
              "https://github.com/mycomycul/PDFWriter/blob/master/PrintedCatContract.pdf",
            label: "Completed Contract"
          },
          {
            screenshot:
              "https://github.com/mycomycul/PDFWriter/blob/master/FormScreenShot.jpg",
            label: "Sample"
          }
        ],
        description:
          "This is a sample version of a larger project for digitally signing large PDF contracts. The company needed a solution that didn't require an API subscription or creating a new editable PDF. \n\n This sample is for registering your feline when moving to the moon. It recalculates your pet's weight for the moon, fills in the contract with the modfied content and also issues a registration certificate from the lunar authorities"
      },
      {
        id: 1,
        title: "PDF Writer",
        summary: "",
        description: "Description. This is a description of the project"
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
    this.setState({modalProject: modalProject});
  };
  handleWindowClick = event => {
    if(event.target == this.modal){
      this.handleCloseModal();
    }
  }
  componentDidMount(){
    this.modal = document.getElementById('project-modal');
    window.addEventListener('click',this.handleWindowClick);
  }
  render() {
    return (
      <React.Fragment>
        <Panel
          projectBox={this.state.projectBox}
          onClick={this.handleOpenModal}

        />
        <Modal project={this.state.modalProject} onClose={this.handleCloseModal}/>
      </React.Fragment>
    );
  }
}
