import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

class NewBeer extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h1>Create new Beer</h1>
            </div>
        )
    }
}

export default NewBeer
