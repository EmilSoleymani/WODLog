import React from 'react'

// Font Awesome
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import menuLinks from '../Data/menuLinks.json'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <h1 className='header-title'>WODLOG <FontAwesomeIcon className="header-icon" icon={faDumbbell} /></h1>
        <div className="nav-wrapper">
          {
            menuLinks.map((link, key) => {
                return (
                  <div key={key} className="nav-item">
                    <Link className="nav-item-link" to={link.href}>{link.label}</Link>
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