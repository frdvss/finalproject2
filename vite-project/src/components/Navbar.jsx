import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    
      <ul className="navbar-nav me-auto">
        <NavLink className="nav-link" to="/Home">BURSA TURİST REHBERİ</NavLink>
        <NavLink className="nav-link "to="/Places">Gezilecek Yerler</NavLink>
        <NavLink className="nav-link "to="/Vacation">Seyahat Rotası</NavLink>
        <NavLink className="nav-link" to="/Food">Lezzetler</NavLink>
      
      </ul>
      
    
  </div>
</nav>
    </div>
  )
}

export default Navbar