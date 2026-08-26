import { ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { portfolio } from '../data/portfolio'
import { IconButton } from './IconButton'

export function ContactSection() {
  const { social } = portfolio
  return <section id="contato" className="contact-section section-shell" aria-labelledby="contact-title"><div className="contact-card">
    <div><span className="section-kicker section-kicker--light">Say hello</span><h2 id="contact-title">Got a release coming up?<br />Let’s talk.</h2><p>Whether you need another pair of eyes or a better testing rhythm, I’d be glad to hear what you’re working on.</p></div>
    <div className="contact-actions"><a href={`mailto:${social.email}`} className="button button--light">Get in touch <ArrowUpRight size={17} /></a><div className="social-actions">
      <IconButton href={`mailto:${social.email}`} label="Send an email"><Mail size={17} /></IconButton><IconButton href={social.linkedin} label="Open LinkedIn"><FaLinkedinIn size={17} /></IconButton><IconButton href={social.github} label="Open GitHub"><FaGithub size={17} /></IconButton>
    </div></div>
  </div></section>
}
