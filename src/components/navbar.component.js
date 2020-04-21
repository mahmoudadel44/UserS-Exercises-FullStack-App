import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">ExercisesTracker</Link>
            <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="">Exercises</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Create Exercise Log</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user">Create User</Link>
      </li>
    </ul>
  </div>
          </nav>
        )
    }
}

export default Navbar