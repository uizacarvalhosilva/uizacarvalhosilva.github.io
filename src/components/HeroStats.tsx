import { useLanguage } from '../LanguageContext'

export function HeroStats() {
  const { portfolio } = useLanguage()
  return <section className="capabilities section-shell" aria-label="Professional strengths">
    {portfolio.capabilities.map((capability) => <div className="capability" key={capability.title}>
      <span className="capability-icon" aria-hidden="true">{capability.icon}</span>
      <p><strong>{capability.title}</strong><span>{capability.detail}</span></p>
    </div>)}
  </section>
}
