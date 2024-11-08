import React, { useState, useContext } from 'react'

type SideBarContextProps = {
  isSideBarOpen: boolean
  toggle: () => void
}

const SideBarContext = React.createContext<SideBarContextProps>({
  isSideBarOpen: false,
  toggle: () => {},
})

export const useSideBar = () => {
  return useContext(SideBarContext)
}

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggle }}>
      {children}
    </SideBarContext.Provider>
  )
}
