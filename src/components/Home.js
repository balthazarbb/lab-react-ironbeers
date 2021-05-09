import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div> 
            <ul>
            <div>
                IRON BEERS
            </div>
            <span>
                <Link to={'/beers'}>All Beers</Link>
            </span>    
            <span>
                <Link to={'random-beer'}>Random Beer</Link>
            </span>
            <span>
                <Link to={'new-beer'}>Add a new beer</Link>
            </span>  
            </ul>  
            </div>
            
        )
    }
}
export default Home
