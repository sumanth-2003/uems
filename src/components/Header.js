import React from 'react';
import {NavLink} from 'react-router-dom'
import { useEffect } from 'react';
const Header = ({test, setTest}) => {

  return (
    <div>
        <section className="row1 bg-lg mb-2"
        >
          <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
            <NavLink exact to="/"  style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}  ><h4>Navbar</h4></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="{classes.left_navlinks} navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item me-5">
                  <NavLink exact to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light">Home</NavLink>
                  </li>
                  <li className="nav-item me-5">
                  <NavLink exact to="/events" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light">Events</NavLink>
                  </li>
                 { (test===1||test===2) && <li className="nav-item me-5">
                  <NavLink exact to="/schedule_event" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light">Shedule Event</NavLink>
                  </li>}
                 { test===2 && <li className="nav-item me-5">
                  <NavLink exact to="/approvals" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light">approvals</NavLink>
                  </li>}
                { test===2 && <li className="nav-item me-5">
                  <NavLink exact to="/report" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light">Report</NavLink>
                  </li> }
                  <li className="nav-item me-5">
                  <NavLink exact to="/login" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} className="btn btn-light" >Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
    </div>
  )
}

export default Header
