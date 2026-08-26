import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import type { getPortfolio } from '../data/portfolio'
import { Badge } from './Badge'
import { ImagePlaceholder } from './ImagePlaceholder'

type Project = ReturnType<typeof getPortfolio>['projects'][number]

export function ProjectCard({ project }: { project: Project }) {
  const inProgress = 'inProgress' in project && project.inProgress
  return <article className="project-card">
    <ImagePlaceholder {...project.image} kind="project" className="project-image" />
    <div className="project-content">
      <div className="project-meta"><span>{project.category}</span><time>{project.year}</time></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>{inProgress ? <span className="progress-status" aria-label="Project in progress">In progress</span> : <div className="project-links">
        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={17} /></a>
        <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><FaGithub size={16} /></a>
      </div>}</div>
    </div>
  </article>
}
