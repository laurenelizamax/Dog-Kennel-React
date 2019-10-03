import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">McGarrett's Lodge<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
        <ul className="container">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link"  to="/locations">Locations</Link></li>
        {(this.props.user) ?
        <>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
        <li><Link className="nav-link"  to="/locations">Locations</Link></li>
        <li><Link className="nav-link"  to="/employee">Employees</Link></li>
        <li><Link className="nav-link"  to="/owner">Owners</Link></li>
        </>
        : null }
       <li><Link className="nav-link" to="/login">Login</Link></li>
       </ul>
       </nav>
      </header>
    )
  }
}

export default NavBar;