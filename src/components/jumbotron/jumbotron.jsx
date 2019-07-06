import React from 'react';
import './jumbotron.scss';
import illustration from '../../images/illustration-1.svg';
import handleSubmit from '../lib/handleSubmit';

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
        <form onSubmit={handleSubmit} className="jumbotron-actions">
          <input
            aria-label="email"
            className="email-input shadow-sm"
            placeholder="Enter your email.."
            type="text"
          />
          <button aria-label="button" type="submit" className="button-primary shadow-md">
            Get Started
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default jumbotron;
