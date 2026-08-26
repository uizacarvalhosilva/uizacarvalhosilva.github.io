import { Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IconButton } from './IconButton'
import { ImagePlaceholder } from './ImagePlaceholder'
import { useLanguage } from '../LanguageContext'

export function Hero() {
  const { language, portfolio: localizedPortfolio } = useLanguage()
  const { person, social } = localizedPortfolio
  return <section id="inicio" className="hero section-shell" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">{language === 'pt' ? 'Oi!' : 'Hi!'} <span aria-hidden="true">👋</span></p>
      <h1 id="hero-title">{person.name}</h1>
      <p className="hero-role">{person.role}</p>
      <p className="hero-bio">{person.bio}</p>
      <p className="hero-location">{language === 'pt' ? 'Localizada em' : 'Based in'} {person.location}</p>
      <div className="hero-actions">
        <a className="button button--primary" href={social.cv} download><span>{language === 'pt' ? 'Baixar currículo' : 'Download CV'}</span><Download size={17} /></a>
        <div className="social-actions" aria-label="Social links">
          <IconButton href={`mailto:${social.email}`} label="Send an email"><Mail size={17} /></IconButton>
          <IconButton href={social.github} label="Open GitHub"><FaGithub size={17} /></IconButton>
          <IconButton href={social.linkedin} label="Open LinkedIn"><FaLinkedinIn size={17} /></IconButton>
        </div>
      </div>
    </div>
    <div className="hero-image-wrap">
      <div className="hero-image-shadow" aria-hidden="true" />
      <ImagePlaceholder {...person.image} kind="profile" className="hero-image" />
    </div>
  </section>
}
