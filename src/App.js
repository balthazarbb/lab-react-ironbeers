import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Navbar from './components/Navbar';

import axios from 'axios';

class App extends Component {
  state = {
    theBeers: [],
    ready: false,
    query: ""
  };

  fetchAllBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          // get just the latest created 20 beers. Modify to get different selection of beers (or all)
          theBeers: response.data.slice(-20),
          ready: true,
        });
      })
      .catch((err) => console.log(err));
  };

  fetchQueryBeers = () => {
    console.log(this.state.query)
    console.log("running")
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`)
      .then((response) => {
        this.setState({
          // get just the latest created 20 beers. Modify to get different selection of beers (or all)
          theBeers: response.data,
          ready: true
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchAllBeers();
  }

  handleChange = (e) => {
    const query = e.target.value
    this.setState({ query })
    query ? this.fetchQueryBeers() : this.fetchAllBeers()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <label>Search for Beers</label>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>

        <Switch>
          <Route
            exact
            path="/all-beers"
            render={(props) => (
              <AllBeers
                {...props}
                beers={this.state.theBeers}
                ready={this.state.ready}
                beersCount={this.state.theBeers.length}
              />
            )}
          />

          <Route exact path="/single-beer/:id" component={SingleBeer} />

          <Route exact path="/random" component={RandomBeer} />

          <Route exact path="/new" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;


