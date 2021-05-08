import './App.css';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router'
import Home from './components/Home';




class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello  at HOME</h1>
        <Home />
      </div>
    )
  }
}
export default App

