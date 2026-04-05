import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react'
import './Contact.css'

function CopyChip({ value, display, icon }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="contact-info-card">
      <div className="ci-icon">{icon}</div>
      <div className="ci-content">
        <span className="ci-value">{display}</span>
      </div>
      <button className="ci-copy" onClick={copy} title="Copy">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView(0.15)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 4000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04 — Let's Talk</p>
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <p className="contact-intro">
            Open to new opportunities, collaborations, or just a conversation about tech.
            Drop a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left – info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-info-list">
              <CopyChip
                value="Mageshbgt2001@outlook.com"
                display="Mageshbgt2001@outlook.com"
                icon={<Mail size={16} />}
              />
              <CopyChip
                value="+919361088242"
                display="+91 93610 88242"
                icon={<Phone size={16} />}
              />
              <div className="contact-info-card no-copy">
                <div className="ci-icon"><MapPin size={16} /></div>
                <div className="ci-content">
                  <span className="ci-label">Location</span>
                  <span className="ci-value">Chennai, India</span>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Open to Work</div>
                <div className="avail-sub">Full-time · Contract · Remote</div>
              </div>
            </div>

            <a
              href="mailto:Mageshbgt2001@outlook.com"
              className="direct-email-btn"
            >
              <Mail size={16} />
              <span>Send Direct Email</span>
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* Right – form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Enter Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="Enter Your Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  rows={5}
                  placeholder="Hi Magesh"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={`submit-btn ${sent ? 'sent' : ''}`} disabled={sent}>
                {sent ? (
                  <><Check size={16} /> Message Sent!</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="portfolio-footer">
        <div className="container footer-inner">
          <span className="footer-brand">Magesh Balaji <span className="dot">·</span> Software Engineer</span>
          <span className="footer-copy">Copy Rights @ 2026</span>
        </div>
      </div>
    </section>
  )
}
