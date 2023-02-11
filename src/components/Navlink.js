import React from 'react'
import { NavLink } from 'react-router-dom'
const Navlink = (props) => {
  return (
    <div>                  <li className="nav-item me-5">
    <NavLink exact to={props.to} style={({ isActive }) => ({ 
              color: isActive ? 'blue' : 'black' })} className="btn btn-light">{props.name}</NavLink>
    </li></div>
  )
}

export default Navlink