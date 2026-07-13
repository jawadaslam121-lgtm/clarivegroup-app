const revenueBars = [30, 45, 38, 60, 52, 100]
const taxBars = [12, 18, 15, 24, 20, 38]

export default function DashboardMock({ compact = false }) {
  return (
    <div className={`dash-mock ${compact ? 'compact' : ''}`}>
      {!compact && (
        <div className="dash-sidebar">
          <div className="dash-brand">
            <span className="dash-brand-icon">
              <i className="fa-solid fa-circle-check" />
            </span>
            <span className="dash-brand-text">
              <strong>
                Clarive<span className="logo-accent">Invoice</span>
              </strong>
              <small>Invoicing Suite</small>
            </span>
          </div>
          <div className="dash-nav-group">
            <span className="dash-nav-label">Operations</span>
            <a className="dash-nav-item active">
              <i className="fa-solid fa-table-cells" /> Dashboard
            </a>
            <a className="dash-nav-item">
              <i className="fa-solid fa-circle-plus" /> New Invoice
            </a>
            <a className="dash-nav-item">
              <i className="fa-solid fa-file-lines" /> Invoices
            </a>
          </div>
          <div className="dash-nav-group">
            <span className="dash-nav-label">Definitions</span>
            <a className="dash-nav-item">
              <i className="fa-solid fa-cube" /> Products
            </a>
            <a className="dash-nav-item">
              <i className="fa-solid fa-users" /> Customers
            </a>
          </div>
          <div className="dash-nav-group">
            <span className="dash-nav-label">Compliance</span>
            <a className="dash-nav-item">
              <i className="fa-solid fa-sliders" /> Settings
            </a>
            <a className="dash-nav-item">
              <i className="fa-solid fa-user-group" /> Team
            </a>
          </div>
          <div className="dash-sandbox-box">
            <span className="dash-sandbox-tag">SANDBOX</span>
            <div className="dash-sandbox-meta">
              API token <b>Configured</b>
            </div>
            <div className="dash-sandbox-meta">DI API v1.12</div>
          </div>
        </div>
      )}

      <div className="dash-main">
        <div className="dash-topbar">
          <span className="dash-crumb">
            Workspace / <b>Dashboard</b>
          </span>
          <div className="dash-topbar-right">
            <span className="dash-pill dash-pill-sandbox">Sandbox</span>
            <span className="dash-pill dash-pill-online">
              <i className="fa-solid fa-circle" /> API online
            </span>
            <span className="dash-user">C</span>
          </div>
        </div>

        <div className="dash-header-row">
          <div>
            <h3>Dashboard</h3>
            <p>FBR Digital Invoicing System</p>
          </div>
          {!compact && (
            <a className="btn btn-primary">
              <i className="fa-solid fa-file" /> New Invoice
            </a>
          )}
        </div>

        <div className={`dash-stats-row ${compact ? 'compact' : ''}`}>
          <div className="dash-stat">
            <span>Total Sales</span>
            <strong>Rs 2,45,300</strong>
          </div>
          <div className="dash-stat">
            <span>Sales Tax Collected</span>
            <strong>Rs 41,700</strong>
          </div>
          <div className="dash-stat">
            <span>Invoices this Month</span>
            <strong>18</strong>
          </div>
          <div className="dash-stat">
            <span>Submitted to FBR</span>
            <strong className="green">18</strong>
          </div>
        </div>

        <div className="dash-bottom-grid">
          <div className="dash-chart-card">
            <h4>Revenue and tax, last 6 months</h4>
            <div className="dash-bars">
              {revenueBars.map((h, i) => (
                <div className="dash-bar-pair" key={i}>
                  <div className="bar-revenue" style={{ height: `${h}%` }} />
                  <div className="bar-tax" style={{ height: `${taxBars[i]}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="dash-deadline-card">
            <span>Filing Deadline</span>
            <strong>12</strong>
            <p>days until your next FBR filing is due</p>
          </div>
        </div>
      </div>
    </div>
  )
}
