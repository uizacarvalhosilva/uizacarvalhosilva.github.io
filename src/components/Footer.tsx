import { useLanguage } from '../LanguageContext'

export function Footer() {
  const { language, portfolio } = useLanguage()
  return <footer className="footer section-shell"><span>© 2026 {portfolio.person.name}</span><span>{language === 'pt' ? 'Feito com React e TypeScript' : 'Built with React & TypeScript'}</span><div><a href={`mailto:${portfolio.social.email}`}>{language === 'pt' ? 'E-mail' : 'Email'}</a><a href={portfolio.social.linkedin}>LinkedIn</a><a href={portfolio.social.github}>GitHub</a></div></footer>
}
