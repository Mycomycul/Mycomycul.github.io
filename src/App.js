import React, { Component } from 'react';
import Panel from './components/Panel';
import './App.css';

export default class App extends Component {
  state = {
    projectBox:[
      {title:"PDF Writer"}
    ]

  }
  render() {
    return (
        <Panel projectBox={this.state.projectBox}></Panel>
    )
  }
}