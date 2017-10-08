import React, {Component} from 'react';
import {Link} from 'react-router';
import LoginForm from '../LoginForm/LoginForm.jsx'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="header-title-link" to="/">
          <img
            alt="logo"
            src='/img/logo.jpg'
            className='header-logo'
          />
          <div className="header-titles">
            <div className="header-main-title">
              Hdgh0g.com
            </div>
            <div className="header-subtitle">
              Цифровой ёж
            </div>
          </div>
        </Link>
        <LoginForm/>
      </div>
    );
  }
}

export default Header;
