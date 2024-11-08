import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './index.css'

const SocialNetworks = () => {
  return (
    <div className="logo-container">
      <a href="https://github.com/RomainBasly" target="_blank" rel="noreferrer">
        <FaGithub className="logo-github" />
      </a>
      <a
        href="http://www.linkedin.com/in/romainbasly"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className="logo-linkedin" />
      </a>
      <div className="line" />
    </div>
  )
}

export default SocialNetworks
