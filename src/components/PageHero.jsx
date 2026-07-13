import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowOrbs from './GlowOrbs'

export default function PageHero({ crumbLabel, crumbParent, title, lead, sloganTag = 'Clarity at every step', preTitle, children, visual }) {
  const textBlock = (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <p className="breadcrumb">
        <NavLink to="/">Home</NavLink>
        {crumbParent && (
          <>
            {' '}
            / <NavLink to="/">{crumbParent}</NavLink>
          </>
        )}{' '}
        / {crumbLabel}
      </p>
      {preTitle}
      {sloganTag && <span className="slogan-tag">{sloganTag}</span>}
      <h1>{title}</h1>
      <p className="page-lead">{lead}</p>
      {children}
    </motion.div>
  )

  if (visual) {
    return (
      <section className="page-hero">
        <GlowOrbs variant="single" />
        <div className="container hero-grid">
          {textBlock}
          {visual}
        </div>
      </section>
    )
  }

  return (
    <section className="page-hero">
      <GlowOrbs variant="single" />
      <div className="container">{textBlock}</div>
    </section>
  )
}
