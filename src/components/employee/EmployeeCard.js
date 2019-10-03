import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('../../Images/vet.jpg')} alt="employee" />
          </picture>
          <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
          <p>Job: {this.props.employee.job}</p>
          <button className="cardButton" type="button"
        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
          <button type="button" className="cardButton"
          onClick={() => {this.props.history.push(`/employee/${this.props.employee.id}/edit`)}}>Edit </button>
          <button type="button"className="cardButton" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Let Employee Go</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;