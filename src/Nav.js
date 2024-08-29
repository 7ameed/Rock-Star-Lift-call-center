import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg fixed-top " id='navbar'>
  <div className="container-fluid">
    <Link className="navbar-brand w-50" id='RockStar' to="/"><img className='logo' src='./images/logo.png'></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id='navbarNav'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"to="/Service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/PrivacyTerms">Privacy Terms</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/CostCalculator">Cost Calculator</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/ContactUS">Contact US</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
 

    </div>
  )
}

export default Nav