import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
//import Home from './components/Home';




 class Beers extends Component {
    render() {
        const {allbeer}= this.props;

        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h3>Beer List</h3>

            
            </div>
        )
    }
}

export default Beers