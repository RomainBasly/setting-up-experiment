import type { Metadata } from 'next'
import './globals.css'
import NavBarContainer from '@/components/elements/NavBarContainer'
import EmailComponent from '@/components/materials/emailComponent'
import SocialNetworks from '@/components/materials/socialNetworks'

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'Creating my portfolio in 4 different ways',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBarContainer />
        <EmailComponent />
        <SocialNetworks />
      </body>
    </html>
  )
}
