import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, servicesMenu } from '../data/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const isServicesActive = servicesMenu.some((s) => s.to === location.pathname)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="ClariveGroup" className="logo-mark-img" />
          <span className="logo-wrap">
            <span>
              Clarive<span className="logo-accent">Group</span>
            </span>
            <span className="logo-slogan">Clarity at every step</span>
          </span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          <div
            className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`nav-link nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}>
              Services <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="nav-dropdown-menu">
              {servicesMenu.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  <i className={item.icon} /> {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/clariveinvoice" className={({ isActive }) => `nav-link nav-product-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-circle-check" /> FBR Digital Invoicing
          </NavLink>

          {navLinks.slice(1).map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink to="/contact" className="btn btn-primary btn-sm">
            Get Free Consultation
          </NavLink>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}>
            <span style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <span style={{ display: 'block', padding: '16px 8px', fontWeight: 600, fontSize: '1.2rem' }}>Services</span>
                <div className="nav-mobile-sub">
                  {servicesMenu.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </li>
              <li>
                <NavLink to="/clariveinvoice">FBR Digital Invoicing</NavLink>
              </li>
              {navLinks.slice(1).map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
