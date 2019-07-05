import React from 'react';
import quote from '../../images/icon-quotes.svg';
import avatar from '../../images/avatar-testimonial.jpg';
import './card.scss';

const card = () => (
  <div className="card shadow-sm">
    <img src={quote} alt="quote" className="card-quote" />
    <h4>
      Fylo has improved our team productivity by an order of magnitude. Since making the switch our
      team has become a well-oiled collaboration machine.
    </h4>
    <div className="card-testimonial">
      <div className="card-testimonial-image">
        <img src={avatar} alt="testimonial avatar" />
      </div>
      <div className="card-testimonial-text">
        <h4>Kyle Burton</h4>
        <h5>Founder & CEO, Huddle</h5>
      </div>
    </div>
  </div>
);

export default card;
