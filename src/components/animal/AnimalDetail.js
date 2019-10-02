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
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
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
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span></h3>
            <p>Breed: {firstLetterCase(this.state.breed)}</p>
            <button id="dischargeDetailBtn" type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
    }}

export default AnimalDetail;
      // if (!this.state.loadingStatus && this.state.isAnimalValid) {

//   } else {
//     return <Redirect to="/"/>
//     }
//   }
// }