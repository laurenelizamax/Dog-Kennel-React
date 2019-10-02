import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import {firstLetterCase} from '../../modules/helpers'

class OwnerDetail extends Component {

  state = {
      name: "",
      dog: "",
      loadingStatus: true
  }
  handleDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the owner list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owner"))
}

  componentDidMount(){
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        dog: owner.dog,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('../../Images/owner.jpeg')} alt="owner" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span></h3>
            <p>Pet Name:{firstLetterCase(this.state.dog)}</p>
            <button id="ownerBtn" type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;