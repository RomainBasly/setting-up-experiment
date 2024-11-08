import Logo from '../../../../assets/Images/Logo-blanc.png'
import './index.css'
import { FaBars } from 'react-icons/fa'
import { useSideBar } from '../../../hooks/useSideBar'

const Navbar = () => {
  const { toggle } = useSideBar()
  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="nav-logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="mobile-icon">
          <FaBars className="burger" onClick={toggle} />
        </div>
        <div className="nav-menu">
          <div className="nav-items">
            <a href="/" className="nav-links">
              <span className="number">1. </span> Home
            </a>

            <a href="/projects" className="nav-links">
              <span className="number">2. </span> Projects
            </a>
            <a href="/contact" className="nav-links">
              <span className="number">3. </span> Contact
            </a>
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
