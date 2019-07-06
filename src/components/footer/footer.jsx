import React from 'react';
import './footer.scss';
import logo from '../../images/logo.svg';
import phoneIcon from '../../images/icon-phone.svg';
import emailIcon from '../../images/icon-email.svg';

const navLinks = ['About Us', 'Jobs', 'Press', 'Blog'];
const contactLinks = ['Contact Us', 'Terms', 'Privacy'];

/* eslint-disable */
const createLink = title => (
  <div key={title}>
    <a href="#">{title}</a>
  </div>
);
/* eslint-enable */

const footer = () => (
  <div className="footer-wrapper">
    <footer className="footer">
      <div className="container">
        <img className="footer-logo" src={logo} alt="Fylo logo" />
        <div className="footer-links">
          <div className="footer-contact">
            <div>
              <img src={phoneIcon} alt="phone" />
              Phone: +1-543-123-4567
            </div>
            <div>
              <img src={emailIcon} alt="phone" />
              example@fylo.com
            </div>
          </div>
          <div className="footer-navigation">{navLinks.map(createLink)}</div>
          <div className="footer-contactlinks">{contactLinks.map(createLink)}</div>
          <div className="footer-social">
            <ion-icon name="logo-facebook" />
            <ion-icon name="logo-twitter" />
            <ion-icon name="logo-instagram" />
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default footer;
