import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <NavLink to="/" className="logo">
            <span className="logo-mark">C</span>
            <span>
              Clarive<span className="logo-accent">Group</span>
            </span>
          </NavLink>
          <p className="footer-slogan">Clarity at every step.</p>
          <p>Cloud accounting software, bookkeeping, FBR digital invoicing and taxation services — all under one roof.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/m-jawad-aslam-03b521185" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <NavLink to="/software">Cloud Accounting Software</NavLink>
            </li>
            <li>
              <NavLink to="/bookkeeping">Bookkeeping &amp; Accounting</NavLink>
            </li>
            <li>
              <NavLink to="/clariveinvoice">ClariveInvoice (FBR Invoicing)</NavLink>
            </li>
            <li>
              <NavLink to="/taxation">Taxation Services</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Refund &amp; Cancellation Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="mailto:jawadaslam121@gmail.com">
                <i className="fa-solid fa-envelope" /> jawadaslam121@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923074902927">
                <i className="fa-solid fa-phone" /> +92 307 4902927
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>ClariveGroup &copy; {year}. All Rights Reserved. — Clarity at every step.</p>
        </div>
      </div>
    </footer>
  )
}
