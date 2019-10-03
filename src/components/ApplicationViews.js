import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import LocationEditForm from './location/LocationEditForm'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* path for home page */}
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* path for Animals List */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* path for Animal Detail */}
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        {/* path for Animal create new Form */}
        <Route path="/animal/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/* path for Animal Edit Form */}
        <Route
          exact path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        {/* path for Locations List */}
        <Route exact path="/locations" render={props => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* path for Location Details*/}
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        {/* path for Location create new Form */}
        <Route path="/location/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        {/* path for Location Edit Form */}
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
        {/* path for Owner List */}
        <Route exact path="/owner" render={props => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* path for Owner Details */}
        <Route path="/owner/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />
        {/* path for Owner create new Form */}
        <Route path="/owner/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        {/* path for Owner Edit Form */}
        <Route
          exact path="/owners/:ownerId(\d+)/edit" render={props => {
            return <OwnerEditForm {...props} />
          }}
        />
        {/* path for Employee List*/}
        <Route exact path="/employee" render={props => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* path for Employee List*/}
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        {/* path for Employee create new Form*/}
        <Route path="/employee/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        {/* path for Employee  Edit Form*/}
        <Route
          exact path="/employee/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        {/* path for Login form*/}
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews