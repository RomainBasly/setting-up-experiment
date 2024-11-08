import Navbar from './NavBar/'
import Sidebar from './SideBar/'
import { SideBarProvider } from '../../hooks/useSideBar'

const NavBarContainer = () => {
  return (
    <SideBarProvider>
      <div>
        <Sidebar />
        <Navbar />
      </div>
    </SideBarProvider>
  )
}

export default NavBarContainer
