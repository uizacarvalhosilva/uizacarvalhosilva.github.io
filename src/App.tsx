import { useEffect, useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HeroStats } from './components/HeroStats'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { LanguageProvider } from './LanguageContext'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  return <LanguageProvider><Navbar dark={dark} onThemeChange={setDark} /><main><Hero /><HeroStats /><ExperienceSection /><EducationSection /><ProjectsSection /><ContactSection /></main><Footer /></LanguageProvider>
}
