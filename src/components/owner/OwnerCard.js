import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('./owner.jpeg')} alt="Owner" />
       </picture>
          <h3>Owner Name: <span className="card-employeename">Lauren</span></h3>
          <p>Pet's Name: McGarrett</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;