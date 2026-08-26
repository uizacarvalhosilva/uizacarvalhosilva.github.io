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
  return <LanguageProvider><Navbar /><main><Hero /><HeroStats /><ExperienceSection /><EducationSection /><ProjectsSection /><ContactSection /></main><Footer /></LanguageProvider>
}
