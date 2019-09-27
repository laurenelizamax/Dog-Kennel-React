import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('./employee.jpeg')} alt="employee" />
          </picture>
          <h3>Employee Name: <span className="card-employeename">Eliza</span></h3>
          <p>Speciality: Love</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;