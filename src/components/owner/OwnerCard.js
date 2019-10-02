import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('../../Images/owner.jpeg')} alt="owner" />
       </picture>
       <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
          <p>Pet's Name: {this.props.owner.dog}</p>
          <Link to={`/owner/${this.props.owner.id}`}><button className="cardButton">Details</button></Link>
          <button type="button" className="cardButton"
        onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Leave Service</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;