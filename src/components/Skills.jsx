import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const categories = [
  { label: 'Languages & Frameworks', color: 'blue',
    skills: ['C#', '.NET Framework', '.NET Core 8', 'TypeScript', 'Node.js', 'Express.js', 'React.js (Vite)', 'Next.js'] },
  { label: 'Desktop & APIs', color: 'violet',
    skills: ['WPF', 'Windows EXE Apps', 'Web APIs', 'REST Services', 'JSON Handling', 'API Integration'] },
  { label: 'Database & Storage', color: 'green',
    skills: ['MSSQL', 'SQLite', 'JSON Serialization', '2-Tier Architecture', '3-Tier Architecture'] },
  { label: 'Tools & DevOps', color: 'blue',
    skills: ['Git', 'GitHub', 'Docker (basic)', 'CI/CD (GitHub)', 'IIS Deployment', 'Postman', 'Figma (basic)'] },
  { label: 'Protocols & AI Tools', color: 'violet',
    skills: ['DLMS Protocol', 'Modbus Protocol', 'ChatGPT', 'Claude AI', 'AI-Assisted Dev'] },
]

const colorMap = {
  blue:   { bg: 'rgba(14,165,233,0.07)',  border: 'rgba(14,165,233,0.22)',  text: '#0284c7',  catBorder: 'rgba(14,165,233,0.18)' },
  violet: { bg: 'rgba(99,102,241,0.07)',  border: 'rgba(99,102,241,0.22)',  text: '#4f46e5',  catBorder: 'rgba(99,102,241,0.18)' },
  green:  { bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.22)',  text: '#059669',  catBorder: 'rgba(16,185,129,0.18)' },
}

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-label">02 — What I Use</p>
          <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
          <p className="skills-intro">A snapshot of the technologies I work with — from enterprise .NET stacks to modern web tooling.</p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div key={cat.label} className="skill-category"
                style={{ '--cat-border': c.catBorder, '--cat-text': c.text }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}>
                <div className="cat-header">
                  <span className="cat-dot" />
                  <span className="cat-label">{cat.label}</span>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill, j) => (
                    <motion.span key={skill} className="skill-tag"
                      style={{ background: c.bg, borderColor: c.border, color: c.text }}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.07 + j * 0.04 }}
                      whileHover={{ scale: 1.06, y: -2 }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
