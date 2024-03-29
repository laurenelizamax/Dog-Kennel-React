import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          {/* <i className="fas fa-home fa-5x"></i> */}
          <img src={require('../../Images/location.jpg')} alt="employee" />
          </picture>
          <h2>Name: <span className="card-locationname">{firstLetterCase(this.props.kennelLocation.name)}</span></h2>
          <p>Address: {firstLetterCase(this.props.kennelLocation.address)}</p>
          <Link to={`/locations/${this.props.kennelLocation.id}`}><button className="cardButton">Details</button></Link>
          <button type="button" className="cardButton"
        onClick={() => {this.props.history.push(`/locations/${this.props.kennelLocation.id}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.props.deleteLocation(this.props.kennelLocation.id)}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;