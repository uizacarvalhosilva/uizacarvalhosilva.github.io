import { useLanguage } from '../LanguageContext'

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  return (
    <nav aria-label="Navegação principal">
      <div className="wrap nav">
        <div className="language-switcher" aria-label="Selecionar idioma">
          <button className={`language ${language === 'en' ? 'active' : ''}`} type="button" aria-label="Switch to English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>🇬🇧</button>
          <button className={`language ${language === 'pt' ? 'active' : ''}`} type="button" aria-label="Mudar para português" aria-pressed={language === 'pt'} onClick={() => setLanguage('pt')}>🇧🇷</button>
          <button className="language" type="button" aria-label="Japonês indisponível" disabled>🇯🇵</button>
        </div>
        <div className="links">
          <a href="#inicio">About</a>
          <a href="#experiencia">Experience</a>
          <a href="#formacao">Education</a>
          <a href="#projetos">Projects</a>
          <a href="#contato">Contact</a>
        </div>
        <div className="theme-switcher" aria-label="Tema claro selecionado">
          <span className="theme-option active" aria-hidden="true">☀️</span>
          <span className="theme-option" aria-hidden="true">🌑</span>
        </div>
      </div>
    </nav>
  )
}
