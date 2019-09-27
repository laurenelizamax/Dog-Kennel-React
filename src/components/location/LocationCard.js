import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          {/* <i className="fas fa-home fa-5x"></i> */}
          <img src={require('./location.jpeg')} alt="My Location" />
          </picture>
          <h3>Location Name: <span className="card-locationname">Oodles of Poodles</span></h3>
          <p>Address: 500 Puppy Way</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;