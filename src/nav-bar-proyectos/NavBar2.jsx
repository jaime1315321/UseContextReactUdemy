import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar2 = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
            <NavLink
                                
                    className={ ({estaActivo}) => `nav-link ${ estaActivo ? 'active' :'' } `} 
                    to="/" >
                    Home
            </NavLink>



            <NavLink
                    className={ ({estaActivo}) => `nav-link ${ estaActivo ? 'active' :'' } `}
                    to="/about2" >
                    About
            </NavLink>
    </ul>
  </div>
</nav>
  )
}
