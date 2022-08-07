import React from "react";

import { FaLinkedinIn, FaGithub, CgWebsite } from ".";

import { Tooltip } from ".";

const Footer = () => (
  <div className="Footer">
    <p>
      © 2022 All rights reserved by Kfir H. <br />
      Based on{" "}
      <a
        className="link hover-2"
        href="https://www.youtube.com/watch?v=jx5hdo50a2M&t=1s"
        target="_blank"
        rel="noreferrer"
      >
        JavaMastery YouTube Course
      </a>
    </p>
    <div className="social-icons">
      <div className="rounded-social-buttons">
        <Tooltip content="Linkdin" position="top">
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/kfir-hashay"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </Tooltip>

        <Tooltip content="GitHub" position="top">
          <a
            className="social-button github"
            href="https://github.com/KfirHashay"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </Tooltip>
        <Tooltip content="Portfolio" position="top">
          <a
            className="social-button instagram"
            href="/#"
            target="_blank"
            rel="noreferrer"
          >
            <CgWebsite className="icon" />
          </a>
        </Tooltip>
      </div>
    </div>
  </div>
);

export default Footer;
