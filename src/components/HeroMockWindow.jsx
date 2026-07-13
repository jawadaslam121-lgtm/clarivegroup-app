import { motion } from 'framer-motion'

export default function HeroMockWindow() {
  const bars = [35, 55, 40, 70, 50, 85, 65]

  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="mock-window">
        <div className="mock-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mock-body">
          <div className="mock-row-title">
            <span>Overview</span>
            <span className="mock-pill">FBR Synced</span>
          </div>
          <div className="mock-stats">
            <div className="mock-stat">
              <span className="mock-stat-label">Revenue (MTD)</span>
              <span className="mock-stat-value">Rs 2,45,300</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-label">Outstanding</span>
              <span className="mock-stat-value">Rs 38,900</span>
            </div>
          </div>
          <div className="mock-chart">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="bar"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              />
            ))}
          </div>
          <div className="mock-list">
            <div className="mock-list-item">
              <i className="fa-solid fa-file-invoice" /> Invoice #10245 <span className="tag tag-green">Paid</span>
            </div>
            <div className="mock-list-item">
              <i className="fa-solid fa-file-invoice" /> Invoice #10246 <span className="tag tag-amber">Pending</span>
            </div>
            <div className="mock-list-item">
              <i className="fa-solid fa-receipt" /> FBR e-Invoice #4471 <span className="tag tag-green">Filed</span>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="float-card float-card-1"
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <i className="fa-solid fa-shield-halved" /> Secure Cloud Data
      </motion.div>
      <motion.div
        className="float-card float-card-2"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.15 }}
      >
        <i className="fa-solid fa-headset" /> Dedicated Support
      </motion.div>
    </motion.div>
  )
}
