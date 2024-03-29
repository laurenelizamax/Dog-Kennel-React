import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'
    import "./Employee.css";

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
        deleteEmployee = id => {
            EmployeeManager.delete(id)
            .then(() => {
              EmployeeManager.getAll()
              .then((newEmployees) => {
                this.setState({
                    employees: newEmployees
                })
              })
            })
          }

    componentDidMount(){
        // console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
               employees: employees
            })
        })
    }

    render(){
        // console.log("EMPLOYEE LIST: Render");

        return(
            <>
            <section className="section-content">
           <button type="button"
                   className="formButton"
                   onClick={() => {this.props.history.push("/employee/new")}}>
                   Hire New Employee
          </button>
         </section>
            <div className="container-cards">
        {this.state.employees.map(employee =>
        <EmployeeCard key={employee.id} 
                                              employee={employee} 
                                              deleteEmployee={this.deleteEmployee}
                                              {...this.props}
                                              />
      )}
            </div>
            </>
        )
    }
}

export default EmployeeList