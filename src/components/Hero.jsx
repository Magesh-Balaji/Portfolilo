import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin, ExternalLink, GitBranch } from 'lucide-react'
import LaptopAnimation from './LaptopAnimation'
import './Hero.css'

function RoleTyper({ roles }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    } else {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, roles])

  return (
    <span className="role-text">
      {displayed}<span className="cursor">|</span>
    </span>
  )
}

const roles = ['Software Engineer', '.NET Developer', 'Full-Stack Builder', 'React Developer']

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* bg blobs */}
      <div className="hero-blob blob1" />
      <div className="hero-blob blob2" />

      <div className="container hero-inner">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          <motion.div className="hero-badge"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 className="hero-name"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="name-line">Magesh</span>
            <span className="name-line name-accent">Balaji</span>
          </motion.h1>

          <motion.div className="hero-roles"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <span className="role-prefix">~/</span>
            <RoleTyper roles={roles} />
          </motion.div>

          <motion.p className="hero-desc"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Software Engineer with 1+ year building production-level applications with
            <span className="ta"> C# / .NET</span>,
            <span className="ta"> React</span>, and
            <span className="ta"> Node.js</span>.
            Focused on real-time debugging, performance, and clean architecture.
          </motion.p>

          <motion.div className="hero-location"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>
            <MapPin size={13} />
            <span>Chennai, India</span>
          </motion.div>

          <motion.div className="hero-actions"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
            <a href="mailto:Mageshbgt2001@outlook.com" className="btn-primary">Get In Touch</a>
            <button className="btn-ghost"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work <ArrowDown size={14} />
            </button>
          </motion.div>

          <motion.div className="hero-socials"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <a href="mailto:Mageshbgt2001@outlook.com" className="social-link" title="Email"><Mail size={17} /></a>
            <a href="https://github.com" className="social-link" title="GitHub" target="_blank" rel="noreferrer"><GitBranch size={17} /></a>
            <a href="https://linkedin.com" className="social-link" title="LinkedIn" target="_blank" rel="noreferrer"><ExternalLink size={17} /></a>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN – Laptop Animation ── */}
        <motion.div className="hero-right"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <LaptopAnimation />
        </motion.div>
      </div>

      <motion.div className="hero-scroll-hint"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
