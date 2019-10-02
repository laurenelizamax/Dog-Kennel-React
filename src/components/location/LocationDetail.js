import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import {firstLetterCase} from '../../modules/helpers'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      loadingStatus: true
  }
  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  componentDidMount(){
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        loadingStatus: false
      });
    });
  }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            <img src={require('./location.jpeg')} alt="My Location" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span></h3>
            <p>Breed: {firstLetterCase(this.state.address)}</p>
            <button id="dischargeDetailBtn" type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
          </div>
        </div>
      );
    }
  }

export default LocationDetail;
