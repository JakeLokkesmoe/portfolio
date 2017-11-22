import React, { Component } from 'react';
import socialLinks from './socialLinks.json';
import './App.css';

const SocialIcon = ({ href, name, icon, htmlProps }) => (
  <a href={href} target="_blank" className="App-social" tooltip={name}
    rel="noopener noreferrer"
  >
    <i className={`fa fa-${icon}`}></i>
  </a>
);

class App extends Component {
  state = {
    socialLinks,
  };

  render() {
    return (
      <div className="App">
        <img className="App-picture" src="/jake_240.jpg" alt="" />
        <h1 className="App-title">
          Developer. Designer. Problem-Solver.
        </h1>
        <p>
          Hi, my name is Jake Lokkesmoe. I am a software developer and designer.
          I am at my best when diving head first into new challenges.
          I have a hardwired desire to be better, a strong ambition to make a
          difference in the world, and an instinct for good design.
        </p>
        <p>
          {this.state.socialLinks.map(link =>
            <SocialIcon key={link.name} {...link} />)}
        </p>
      </div>
    );
  }
}

export default App;
