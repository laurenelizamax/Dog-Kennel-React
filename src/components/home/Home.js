import React, { Component } from 'react';
import  './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="homeBody">
                          <img className="homePhoto" src={require('../../Images/MG.jpg')} alt="McGarrett" />

                <h2>Welcome to McGarrett's Lodge<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
            </div>
        )
    }
}

export default Home