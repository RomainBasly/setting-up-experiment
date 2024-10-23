import { FaTimes } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './index.css'
import { useSideBar } from '../../../hooks/useSideBar'

function Sidebar() {
  // do the logic for opening the sideBar
  const { isSideBarOpen, toggle } = useSideBar()

  return (
    <aside
      className={`sidebar-container ${isSideBarOpen ? 'open' : 'closed'}`}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li>
            <a href="/" className="sidebar-link">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" onClick={toggle} className="sidebar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggle} className="sidebar-link">
              Contact
            </a>
          </li>
          <li>
            <ExternalLink
              href="https://adatechschool.fr/entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-external"
            >
              Ada Tech School
            </ExternalLink>
          </li>
        </ul>
        <div className="side-btn-wrap"></div>
      </div>
    </aside>
  )
}

export default Sidebar
