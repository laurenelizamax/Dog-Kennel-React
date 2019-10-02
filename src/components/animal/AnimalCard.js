import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import './Animal.css'


class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`../../Images/${this.props.animal.photo}`)} alt="My Dog" />
          </picture>
                    <h2>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h2>
          <p>Breed: {firstLetterCase(this.props.animal.breed)}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;