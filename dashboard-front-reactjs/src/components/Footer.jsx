import React from "react";

import { AiFillLinkedin, FaGithub, CgWebsite } from ".";

import Tooltip from "./Tooltip";

const Footer = () => (
  <div className="Footer">
    <p>
      © 2022 All rights reserved by Kfir H. <br />
      Based on JavaMastery YouTube Course
    </p>
    <ul className="ul">
      <Tooltip content="Linkdin" position="top">
        <li>
          <a className="linkdin" href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i aria-hidden="true">
              <AiFillLinkedin />
            </i>
          </a>
        </li>
      </Tooltip>
      <Tooltip content="GitHub" position="top">
        <li>
          <a className="github" href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i aria-hidden="true">
              <FaGithub />
            </i>
          </a>
        </li>
      </Tooltip>
      <Tooltip content="Portfolio" position="top">
        <li>
          <a className="portfolio" href="/#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <i aria-hidden="true">
              <CgWebsite />
            </i>
          </a>
        </li>
      </Tooltip>
    </ul>
  </div>
);

export default Footer;
