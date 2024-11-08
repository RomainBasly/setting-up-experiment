'use client'
import { FaTimes } from 'react-icons/fa'
import './index.css'
import { useSideBar } from '../../../hooks/useSideBar'
import Link from 'next/link'

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
            <Link href="/" className="sidebar-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggle} className="sidebar-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle} className="sidebar-link">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://adatechschool.fr/entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-external"
            >
              Ada Tech School
            </a>
          </li>
        </ul>
        <div className="side-btn-wrap"></div>
      </div>
    </aside>
  )
}

export default Sidebar
