import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container py-3">
    <Link className="navbar-brand title text-white" to={''} >START FRAMWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
       
        <li className="nav-item">
          <NavLink className="nav-link  " to={'about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  " to={'portofolio'}>PORTOFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'contact'}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
}
