import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('./employee.jpeg')} alt="employee" />
          </picture>
          <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
          <p>Job: {this.props.employee.job}</p>
          <Link to={`/employee/${this.props.employee.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Time to say Goodbye</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;