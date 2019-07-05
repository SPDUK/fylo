import React from 'react';
import './navbar.scss';
import logo from '../../images/logo.svg';

const navbar = () => (
  <nav className="container">
    <a href="#">
      <img alt="fylo" src={logo} />
    </a>
    <aside>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </aside>
  </nav>
);

export default navbar;
