import React from 'react'

// Font Awesome
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuLinks from '../Data/menuLinks.json'

// Add this back when we are reimplementing React router
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <h1 className='header-title'>WODLOG <FontAwesomeIcon className="header-icon" icon={faDumbbell} /></h1>
        <div className="nav-wrapper">
          {
          
          /*
          Old React Router code - Replace with new routing after styling

          <Link className="nav-item" to="/">Welcome</Link>
          <Link className="nav-item" to="/log">Log</Link>
          <Link className="nav-item" to="/programs">Programs</Link>
          */
          
          menuLinks.map((link, key) => {
              return (
                <div className="nav-item">
                  <p key={key}>{link.label}</p>
                  <div className="nav-line"></div>
                </div>
              )
          })

          }
        </div>
        <div className="login-signup-wrapper">
          <button className="login-btn">Login</button>
          <button className='signup-btn'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header