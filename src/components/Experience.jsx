import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Building2, CalendarDays, CheckCircle2, ChevronRight } from 'lucide-react'
import './Experience.css'

const achievements = [
  { text: 'Developed and maintained EXE and Web API applications using C# and .NET', tag: 'C# / .NET' },
  { text: 'Worked on service applications for data processing and API integration', tag: 'Services' },
  { text: 'Contributed to MIS application (under validation) using React (Vite) and Node.js (Express) with MSSQL', tag: 'Full-Stack' },
  { text: 'Implemented Utility Reports with Excel export for analysis', tag: 'Reporting' },
  { text: 'Developed API-based data push services using JSON', tag: 'API' },
  { text: 'Implemented JSON serialization and deserialization for data handling', tag: 'Backend' },
  { text: 'Worked with 2-tier and 3-tier architecture in real-time applications', tag: 'Architecture' },
  { text: 'Identified and fixed production issues, improving application performance and stability', tag: 'Performance' },
  { text: 'Deployed and configured applications (frontend, backend, Web APIs) using IIS Server', tag: 'DevOps' },
  { text: 'Gained basic exposure to DLMS and Modbus protocols in Smart Meter-related systems', tag: 'IoT/Protocols' },
  { text: 'Contributed at a foundational level with team support in domain-specific development and debugging', tag: 'Teamwork' },
]

const techUsed = ['C#', '.NET Core 8', 'WPF', 'React (Vite)', 'Node.js', 'Express.js', 'MSSQL', 'IIS', 'Git', 'JSON', 'REST APIs']

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 — Where I've Worked</p>
          <h2 className="section-title">Professional <span className="highlight">Experience</span></h2>
        </motion.div>

        <div className="exp-layout">
          {/* Timeline line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            className="exp-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Header */}
            <div className="exp-header">
              <div className="company-icon">
                <Building2 size={22} />
              </div>
              <div className="exp-meta">
                <h3 className="exp-title">Software Engineer</h3>
                <div className="exp-company">BRIGHTGRID TECHNOLOGIES LLP</div>
                <div className="exp-date">
                  <CalendarDays size={13} />
                  <span>Nov 2024 — Present</span>
                  <span className="exp-badge">Current</span>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="exp-tech">
              {techUsed.map(t => (
                <span key={t} className="exp-tech-tag">{t}</span>
              ))}
            </div>

            {/* Achievements */}
            <div className="exp-achievements">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  className="achievement-row"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.06 }}
                >
                  <CheckCircle2 size={15} className="check-icon" />
                  <p className="achievement-text">{item.text}</p>
                  <span className="achievement-tag">{item.tag}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight bar */}
        <motion.div
          className="exp-highlight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="highlight-item">
            <span className="hl-value">1+</span>
            <span className="hl-label">Years in Production</span>
          </div>
          <div className="highlight-divider" />
          <div className="highlight-item">
            <span className="hl-value">3</span>
            <span className="hl-label">App Types Shipped</span>
          </div>
          <div className="highlight-divider" />
          <div className="highlight-item">
            <span className="hl-value">IIS</span>
            <span className="hl-label">Deployment Ready</span>
          </div>
          <div className="highlight-divider" />
          <div className="highlight-item">
            <span className="hl-value">2-3 Tier</span>
            <span className="hl-label">Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
