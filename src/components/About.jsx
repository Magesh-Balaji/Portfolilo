import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap, Briefcase, Zap, Terminal } from 'lucide-react'
import './About.css'

const stats = [
  { value: '1+', label: 'Year Experience', icon: <Briefcase size={16} /> },
  { value: 'MCA', label: 'Master of Comp. Apps', icon: <GraduationCap size={16} /> },
  { value: '2+', label: 'Technologies', icon: <Zap size={16} /> },
  { value: 'IIS', label: 'Deployment Expert', icon: <Terminal size={16} /> },
]

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">01 — Who I Am</p>
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text-block"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-card">
              <div className="card-tag">
                <Terminal size={13} />
                <span>profile_summary.txt</span>
              </div>
              <p>
                I'm a <span className="ab-accent">Software Engineer</span> with a Master of Computer Applications
                (MCA) degree, based in Chennai, India. I have over a year of hands-on experience developing
                and supporting production-level applications.
              </p>
              <p>
                My primary stack revolves around <span className="ab-accent">C# and .NET technologies</span>,
                with strong exposure to desktop (WPF/EXE), Web APIs, and service-based applications. I have
                a sharp focus on real-time debugging and performance improvement in live systems.
              </p>
              <p>
                I'm actively expanding my expertise into modern technologies including
                <span className="ab-accent"> AI-assisted development</span>, CI/CD pipelines,
                and full-stack web with React and Node.js — bridging enterprise-grade backend
                skills with modern frontend workflows.
              </p>
              <div className="contact-row">
                <a href="mailto:Mageshbgt2001@outlook.com" className="contact-chip">
                  📧 Mageshbgt2001@outlook.com
                </a>
                <a href="tel:+919361088242" className="contact-chip">
                  📞 +91 93610 88242
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats-col"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="stats-grid">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                >
                  <div className="stat-icon">{s.icon}</div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="edu-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="edu-icon"><GraduationCap size={20} /></div>
              <div>
                <div className="edu-degree">Master of Computer Applications</div>
                <div className="edu-school">MCA Graduate</div>
                <div className="edu-tag">Chennai, India</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
