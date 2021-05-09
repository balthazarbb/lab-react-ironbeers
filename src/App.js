import './App.css';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router'
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';




class App extends Component {

  stat={
    allbeer: []
  }

  componentDidMount=()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      this.setState({allbeer:response.data})
    })
    .catch((err) => {
      
    });
  }

  render() {
    return (
      <div>
        
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/new-beer' component={NewBeer} />
          <Route exact path='/random-beer' component={RandomBeer} />
        


        
      </div>
    )
  }
}
export default App;

