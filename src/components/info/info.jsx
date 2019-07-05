import React, { Component } from 'react';
import './info.scss';
import bgMobile from '../../images/bg-curve-mobile.svg';
import bgDesktop from '../../images/bg-curve-desktop.svg';
import illustrationTwo from '../../images/illustration-2.svg';
import arrow from '../../images/icon-arrow.svg';
import Card from '../card/card';

class Info extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = e => {
    const { innerWidth } = e.currentTarget;
    this.setState({
      width: innerWidth
    });
  };

  /* eslint-disable */
  render() {
    const { width } = this.state;
    return (
      <div className="info">
        <img src={width > 768 ? bgDesktop : bgMobile} alt="background" width="100%" />
        <div className="info-bg">
          <div className="container">
            <div className="info-content">
              <img className="info-illustration" src={illustrationTwo} alt="pepople" />
              <div className="info-content-text">
                <h3>Stay Productive, wherever you are</h3>
                <h4>
                  Never let location be an issues when accessing your files. Fylo has you covered
                  for all of your file storage needs.
                </h4>
                <h4>
                  Securely share files and folders with friends, family and colleagues for live
                  collboration. No email attachments required!
                </h4>
                <a href="#">
                  <span>See how Fylo works</span>
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
/* eslint-enable */

export default Info;
