import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export function EducationSection() {
  const { language, portfolio } = useLanguage()
  return <section id="formacao" className="education-section section-shell" aria-labelledby="education-title">
    <div className="section-heading"><span className="section-kicker"><GraduationCap size={15} /> {language === 'pt' ? 'Formação' : 'Education'}</span><h2 id="education-title">{language === 'pt' ? 'Formação e aprendizado.' : 'Education & training.'}</h2></div>
    <div className="education-list">{portfolio.education.map((item) => <article className="education-item" key={item.title}>
      <div><div className="education-title"><h3>{item.title}</h3><span>{item.type}</span></div><p>{item.institution}</p></div>
      <time>{item.start} – {item.end}</time>
    </article>)}</div>
  </section>
}
