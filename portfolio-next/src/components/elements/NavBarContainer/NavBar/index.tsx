'use client'
import logo from '/public/assets/Images/Logo-blanc.png'
import './index.css'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { useSideBar } from '../../../hooks/useSideBar'
import Image from 'next/image'

const Navbar = () => {
  const { toggle } = useSideBar()
  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="nav-logo">
          <Link href="/">
            <Image src={logo.src} alt="logo" width="50" height="50" />
          </Link>
        </div>
        <div className="mobile-icon">
          <FaBars className="burger" onClick={toggle} />
        </div>
        <div className="nav-menu">
          <div className="nav-items">
            <Link href="/" className="nav-links">
              <span className="number">1. </span> Home
            </Link>

            <Link href="/projects" className="nav-links">
              <span className="number">2. </span> Projects
            </Link>
            <Link href="/contact" className="nav-links">
              <span className="number">3. </span> Contact
            </Link>
            <a
              href="https://adatechschool.fr/entreprise/"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="number">4. </span> Ada Tech School
            </a>
          </div>
        </div>
        <div className="resume-container">
          <a href="/assets/Images/image-resume.png" download>
            <button className="download-resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
