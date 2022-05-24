import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
<div className="app__social">
    <a href="https://github.com/zaghloulegy" target="_blank" rel="noreferrer">
    <BsGithub />
    </a>

    <a
    href="https://www.linkedin.com/in/zaghloulegy/"
    target="_blank"
    rel="noreferrer"
    >
    <BsLinkedin />
    </a>
</div>
);

export default SocialMedia;
