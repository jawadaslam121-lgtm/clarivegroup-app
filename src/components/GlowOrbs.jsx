export default function GlowOrbs({ variant = 'default' }) {
  const presets = {
    default: [
      { top: '-10%', left: '5%', width: 420, height: 420, background: 'rgba(29,78,216,0.14)' },
      { top: '5%', right: '0%', width: 480, height: 480, background: 'rgba(14,165,233,0.12)' },
    ],
    hero: [
      { top: '-15%', left: '-5%', width: 500, height: 500, background: 'rgba(29,78,216,0.16)' },
      { top: '0%', right: '-8%', width: 560, height: 560, background: 'rgba(30,58,138,0.14)' },
      { bottom: '-20%', left: '35%', width: 420, height: 420, background: 'rgba(14,165,233,0.10)' },
    ],
    single: [
      { top: '0%', left: '50%', width: 600, height: 400, background: 'rgba(29,78,216,0.10)' },
    ],
  }

  const orbs = presets[variant] || presets.default

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {orbs.map((orb, i) => (
        <div key={i} className="glow-orb" style={orb} />
      ))}
    </div>
  )
}
