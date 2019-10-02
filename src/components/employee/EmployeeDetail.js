import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import {firstLetterCase} from '../../modules/helpers'
// import './AnimalDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      job: "",
      loadingStatus: true
  }
  handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employee"))
}

  componentDidMount(){
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        breed: employee.job,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('../../Images/vet.jpg')} alt="employee" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span></h3>
            <p>Job: {firstLetterCase(this.state.job)}</p>
            <button id="dischargeDetailBtn" type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Time to say Goodbye</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
