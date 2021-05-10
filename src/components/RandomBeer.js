import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'

class RandomBeer extends Component {
    state = {
        randomBeer:[]
    }

    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            this.setState({randomBeer: Response.data})
        })
        .catch((err) => {
            
        });
    }
    render() {
        const{
            image_url,
            name,
            tagline,
            first_brewed,
            attenuation_level,
            description,
            contributed_by,
        } = this.state.randomBeer;

        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h1>Random Beer</h1>
               
            </div>
        )
    }
}
export default  RandomBeer
