import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h1>Random Beer</h1>
            </div>
        )
    }
}
export default  RandomBeer
