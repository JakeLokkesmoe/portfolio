import React from "react";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import "./App.css";
import resume from "./resources/resume.pdf";
import picture from "./resources/jake_240.jpg";

const socialLinks = [
  {
    href: resume,
    name: "Resume",
    icon: "file-text-o",
    htmlProps: {
      download: "Resume - Jake Lokkesmoe"
    }
  },
  {
    href: "https://twitter.com/JacobLokkesmoe",
    name: "Twitter",
    icon: "twitter"
  },
  {
    href: "https://www.linkedin.com/in/jakelokkesmoe",
    name: "LinkedIn",
    icon: "linkedin"
  },
  {
    href: "https://www.github.com/JakeLokkesmoe",
    name: "GitHub",
    icon: "git"
  },
  {
    href: "mailto:jake@jakelokkesmoe.com",
    name: "Mail",
    icon: "envelope-o"
  }
];

const App = () => (
  <div className="App">
    <img className="App-picture" src={picture} alt="" />
    <h1 className="App-title">Developer. Designer. Problem-Solver.</h1>
    <p>
      Hi, my name is Jake Lokkesmoe. I am a software developer and designer.
      I am at my best when diving head first into new challenges. I have a
      hardwired desire to be better, a strong ambition to make a difference
      in the world, and an instinct for good design.
    </p>
    <p>
      {socialLinks.map(link => (
        <SocialIcon key={link.name} {...link} />
      ))}
    </p>
  </div>
);

export default App;
