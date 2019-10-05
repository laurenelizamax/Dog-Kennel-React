import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import {firstLetterCase} from '../../modules/helpers'
import { Link } from "react-dom"
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
          <h2>Date: <span className="card-journal">{firstLetterCase(this.props.entry.date)}</span></h2>
          <p>Concepts Covered: {firstLetterCase(this.props.entry.concepts)}</p>
          <p>Entry: {firstLetterCase(this.props.entry.entry)}</p>
          <p>Mood: {firstLetterCase(this.props.entry.mood)}</p>
          <Link to={ `/entries/${this.props.entry.id}`}><button className="cardButton">Details</button></Link>
          <button type="button" className="cardButton"
        onClick={() => {this.props.history.push(`/entries/${this.props.entry.id}/edit`)}}>Edit</button>
          <button type="button" className="cardButton" onClick={() => this.handleDelete(this.props.entry.id)}>Discharge</button>
        </div>
      </div>
    );
    }}

export default AnimalDetail;
