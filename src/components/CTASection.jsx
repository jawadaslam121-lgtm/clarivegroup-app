import { NavLink } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection({ title, text, primary, secondary }) {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div className="cta-banner glass">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-group">
              <NavLink to={primary.to} className="btn btn-primary btn-lg">
                {primary.label}
              </NavLink>
              {secondary && (
                <NavLink to={secondary.to} className="btn btn-outline btn-lg">
                  {secondary.label}
                </NavLink>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
