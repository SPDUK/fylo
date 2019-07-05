import React from 'react';
import './early-access.scss';

const earlyAccess = () => (
  <div className="earlyaccess">
    <h3>Get Early access today</h3>
    <h4>
      It only takes a minute to sign up and our free starter tier is extremely generous. If you have
      any questions, our support team would be happy to help you.
    </h4>
    <input
      id="earlyInput"
      className="email-input shadow-sm"
      placeholder="email@example.com"
      type="text"
    />
    <button id="earlyBtn" type="button" className="button-primary shadow-md earlyaccess-button">
      Get Started For Free
    </button>
  </div>
);

export default earlyAccess;
