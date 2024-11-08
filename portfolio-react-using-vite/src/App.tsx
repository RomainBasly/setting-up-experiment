import './App.css'
import '@fontsource/eb-garamond/400.css'
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
import '@fontsource/eb-garamond/700.css'
import '@fontsource/eb-garamond/800.css'

import '@fontsource/cairo/200.css'
import '@fontsource/cairo/300.css'
import '@fontsource/cairo/400.css'
import '@fontsource/cairo/500.css'
import '@fontsource/cairo/600.css'
import '@fontsource/cairo/700.css'
import '@fontsource/cairo/800.css'
import '@fontsource/cairo/900.css'

import '@fontsource/mukta/200.css'
import '@fontsource/mukta/300.css'
import '@fontsource/mukta/400.css'
import '@fontsource/mukta/500.css'
import '@fontsource/mukta/600.css'
import '@fontsource/mukta/700.css'
import '@fontsource/mukta/800.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AboutMeComponent from './components/elements/AboutMe'
import CardsList from './components/elements/Cardslist'
import ContactMe from './components/elements/ContactMe'
import Layout from './components/elements/Layout'
import TopSection from './components/elements/TopSection'

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Layout>
          coucou
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopSection />
                  <AboutMeComponent />
                </>
              }
            />
            <Route path="/projects" element={<CardsList />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
