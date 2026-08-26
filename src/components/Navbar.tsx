import { useLanguage } from '../LanguageContext'

export function Navbar({ dark, onThemeChange }: { dark: boolean; onThemeChange: (dark: boolean) => void }) {
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
        <div className="theme-switcher" aria-label={dark ? 'Tema escuro selecionado' : 'Tema claro selecionado'}>
          <button className={`theme-option ${dark ? '' : 'active'}`} type="button" aria-label="Ativar modo claro" aria-pressed={!dark} onClick={() => onThemeChange(false)}>☀️</button>
          <button className={`theme-option ${dark ? 'active' : ''}`} type="button" aria-label="Ativar modo escuro" aria-pressed={dark} onClick={() => onThemeChange(true)}>🌑</button>
        </div>
      </div>
    </nav>
  )
}
