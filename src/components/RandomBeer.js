import Axios from 'axios';
import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  
  state = {
    randomBeer: {},
    ready: false
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => {
      this.setState({randomBeer: response.data, ready:true })
    })
  }

  render() {
    if (this.state.ready) {
        const {name, tagline, image_url, first_brewed, attenuation_level, description, contributed_by} = this.state.randomBeer
      return (
        <div>
          <h2> {name} </h2>
          <h4> {tagline} </h4>
          <img style={{ width: '100px' }} src={image_url} alt='random beer' />
          <p> First Brewed: {first_brewed} </p>
          <p> Attenuation Level: {attenuation_level} </p>
          <p> Description: {description} </p>
          <p> Creator: {contributed_by} </p>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

export default RandomBeer;
