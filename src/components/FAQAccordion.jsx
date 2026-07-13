import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onToggle}>
        {item.q} <i className="fa-solid fa-chevron-down" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer-inner">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion({ items, defaultOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FAQItem key={i} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
      ))}
    </div>
  )
}
