import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/zaghloulegy" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/zaghloulegy/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
