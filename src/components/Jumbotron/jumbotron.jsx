import React from 'react';
import './jumbotron.scss';
import illustration from '../../images/illustration-1.svg';

const jumbotron = () => (
  <div className="container jumbotron">
    <img alt="fylo" src={illustration} />
    <div className="jumbotron-info">
      <h2>All your files in one secure location, accessible anywhere.</h2>
      <div className="mw-350-sm">
        <h4>
          Fylo stores your most important files in one secure location. Access them wherever you
          need, share and collaborate with friends, family, and co-workers.
        </h4>
        <div className="jumbotron-actions">
          <input className="email-input shadow-sm" placeholder="Enter your email.." type="text" />
          <button type="button" className="button-primary shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default jumbotron;
