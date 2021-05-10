import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'




 class Beers extends Component {

    render() {


        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h3>Beer List</h3>


            
            </div>
        )
    }
}

export default Beers