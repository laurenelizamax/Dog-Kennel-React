import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import {firstLetterCase} from '../../modules/helpers'
// import { Redirect } from "react-router-dom";
import './AnimalDetail.css'

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      photo: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        photo: animal.photo,
        loadingStatus: false
      });
    });
  }

  render() {
    if (this.state.loadingStatus)  return <p>Loading...</p>
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../Images/${this.state.photo}`)} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-animal">{firstLetterCase(this.state.name)}</span></h2>
          <p>Breed: {firstLetterCase(this.state.breed)}</p>
          <button type="button" className="cardButton"
        onClick={() => {this.props.history.push(`/animals/${this.props.animalId}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.handleDelete(this.state.animal.id)}>Discharge</button>
        </div>
      </div>
    );
    }}

    export default AnimalDetail;
