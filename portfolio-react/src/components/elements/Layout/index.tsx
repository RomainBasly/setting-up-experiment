import React from 'react'
import NavBarContainer from '../NavBarContainer'
import SocialNetworks from '../../materials/socialNetworks'
import EmailComponent from '../../materials/emailComponent'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <NavBarContainer />
      {children}
      <SocialNetworks />
      <EmailComponent />
    </div>
  )
}
