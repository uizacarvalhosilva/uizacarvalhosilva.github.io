import { BriefcaseBusiness, MapPin } from 'lucide-react'
import type { getPortfolio } from '../data/portfolio'
import { Badge } from './Badge'
import { ImagePlaceholder } from './ImagePlaceholder'

type Experience = ReturnType<typeof getPortfolio>['experience'][number]

export function ExperienceCard({ experience }: { experience: Experience }) {
  return <article className="experience-card">
    <header className="company-heading">
      <ImagePlaceholder {...experience.logo} kind="logo" />
      <div><h3>{experience.company}</h3><p>{experience.industry}</p></div>
      <Badge><MapPin size={12} /> {experience.arrangement}</Badge>
    </header>
    <div className="role-list">
      {experience.roles.map((role, index) => <section className="role" key={`${role.title}-${index}`}>
        <div className="role-heading"><div><h4>{role.title}</h4><p>{role.description}</p></div><time>{role.start} – {role.end}</time></div>
        <ul>{role.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
      </section>)}
    </div>
  </article>
}
