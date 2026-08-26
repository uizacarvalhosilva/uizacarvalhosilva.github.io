import { BriefcaseBusiness } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { ExperienceCard } from './ExperienceCard'

export function ExperienceSection() {
  const { language, portfolio } = useLanguage()
  return <section id="experiencia" className="experience-section" aria-labelledby="experience-title"><div className="section-shell">
    <div className="section-heading section-heading--experience"><span className="section-kicker"><BriefcaseBusiness size={15} /> {language === 'pt' ? 'Experiência' : 'Experience'}</span><h2 id="experience-title">{language === 'pt' ? 'Qualidade é trabalho em equipe.' : 'Quality is a team sport.'}</h2><p>{language === 'pt' ? 'Meu trabalho conecta produto, engenharia e as pessoas que usam o que entregamos.' : 'My work sits between product, engineering, and the real people who use what we ship.'}</p></div>
    <div className="experience-list">{portfolio.experience.map((experience) => <ExperienceCard key={experience.company} experience={experience} />)}</div>
  </div></section>
}
