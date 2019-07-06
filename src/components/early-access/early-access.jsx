import React from 'react';
import handleSubmit from '../lib/handleSubmit';
import './early-access.scss';

const earlyAccess = () => (
  <div className="earlyaccess-wrapper">
    <div className="earlyaccess container">
      <div className="earlyaccess-text">
        <h3>Get Early access today</h3>
        <h4>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you
          have any questions, our support team would be happy to help you.
        </h4>
      </div>
      <form onSubmit={handleSubmit} className="earlyaccess-actions">
        <input
          id="earlyInput"
          className="email-input shadow-sm"
          placeholder="email@example.com"
          type="text"
          aria-label="email"
        />
        <button
          aria-label="button"
          id="earlyBtn"
          type="submit"
          className="button-primary shadow-md earlyaccess-button"
        >
          Get Started For Free
        </button>
      </form>
    </div>
  </div>
);

export default earlyAccess;
