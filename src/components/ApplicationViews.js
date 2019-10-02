import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'




class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
    <Route exact path="/animals" render={(props) => {
      return <AnimalList {...props} />
      }} />
    <Route path="/animals/:animalId(\d+)" render={(props) => {
       return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/animal/new" render={(props) => {
      return <AnimalForm {...props} />
      }} />
        <Route exact path="/locations" render={(props) => {
      return <LocationList {...props}/>
      }} />
    <Route path="/locations/:locationId(\d+)" render={(props) => {
       return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
        <Route path="/location/new" render={(props) => {
       return <LocationForm {...props} />
       }} />
        <Route exact path="/owner" render={(props) => {
      return <OwnerList {...props}/>
      }} />
    <Route path="/owner/:ownerId(\d+)" render={(props) => {
       return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
        }} />
        <Route path="/owner/new" render={(props) => {
       return <OwnerForm {...props} />
       }} />
          <Route exact path="/employee" render={(props) => {
      return <EmployeeList {...props} />
      }} />
    <Route path="/employee/:employeeId(\d+)" render={(props) => {
       return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
        }} />
      <Route path="/employee/new" render={(props) => {
       return <EmployeeForm {...props} />
       }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews