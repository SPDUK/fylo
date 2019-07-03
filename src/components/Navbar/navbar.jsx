import React from 'react';
import './navbar.scss';
import logo from '../../images/logo.svg';

const navbar = () => (
  <nav className="container">
    <img alt="fylo" src={logo} />
    <aside>
      <ul>
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </aside>
  </nav>
);

export default navbar;
