import { Layers3 } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const { language, portfolio } = useLanguage()
  return <section id="projetos" className="projects-section" aria-labelledby="projects-title"><div className="section-shell">
    <div className="section-heading section-heading--split"><div><span className="section-kicker"><Layers3 size={15} /> {language === 'pt' ? 'Na prática' : 'In practice'}</span><h2 id="projects-title">{language === 'pt' ? 'O trabalho por trás da entrega.' : 'The work behind the release.'}</h2></div><p>{language === 'pt' ? 'Algumas formas como penso em testes: cobertura útil, sinais claros e menos incerteza antes da entrada em produção.' : 'A few ways I think about testing: useful coverage, clear signals, and less guesswork before go-live.'}</p></div>
    <div className="project-grid">{portfolio.projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
  </div></section>
}
