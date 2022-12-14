import React from "react";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import GmailIcon from "../assets/GmailIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import SpotifyIcon from "../assets/SpotifyIcon.svg";
import DribbbleIcon from "../assets/DribbbleIcon.svg";

const SocialTray = ({ social = true, setOnce = false }) => {
  return (
    <div className="flex items-center space-x-4 w-full justify-between">
      {social ? (
        <>
          {/* <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/techakhil/"
          >
            <LinkedinIcon className="h-10 w-10" />
          </a> */}
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
     
            href="#"
          >
            <GmailIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
    
            href="#"
          >
            <TwitterIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/befas.official/"
          >
            <InstagramIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
         
            href="#"
          >
            <GithubIcon className="h-10 w-10" />
          </a>
        </>
      ) : (
        <>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/techakhil_me"
          >
            <TwitterIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/techakhil.me/"
          >
            <InstagramIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://github.com/techakhil-me"
          >
            <GithubIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/316xdrzidluzl4jgxpymgiry6fhi?si=e2b5df4a3e3e4674"
          >
            <SpotifyIcon className="h-10 w-10" />
          </a>
          <a
            onClick={() => setOnce && setOnce(true)}
            rel="noreferrer"
            target="_blank"
            href="https://dribbble.com/techakhil"
          >
            <DribbbleIcon className="h-10 w-10" />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialTray;
