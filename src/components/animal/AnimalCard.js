import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import './Animal.css'
import AnimalManager from '../../modules/AnimalManager';


class AnimalCard extends Component {
  handleDelete = (id) =>  {
    AnimalManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`../../Images/${this.props.animal.photo}`)} alt="My Dog" />
          </picture>
                    <h2>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h2>
          <p>Breed: {firstLetterCase(this.props.animal.breed)}</p>
          <Link to={ `/animals/${this.props.animal.id}`}><button className="cardButton">Details</button></Link>
          <button type="button" className="cardButton"
        onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.handleDelete(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;