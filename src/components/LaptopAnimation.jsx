import { motion } from 'framer-motion'
import './LaptopAnimation.css'

const codeLines = [
  { w: 120, color: '#818cf8', indent: 0 },
  { w: 80, color: '#34d399', indent: 16 },
  { w: 100, color: '#38bdf8', indent: 16 },
  { w: 60, color: '#f472b6', indent: 32 },
  { w: 90, color: '#38bdf8', indent: 32 },
  { w: 70, color: '#34d399', indent: 16 },
  { w: 40, color: '#818cf8', indent: 0 },
  { w: 110, color: '#38bdf8', indent: 0 },
  { w: 55, color: '#f472b6', indent: 16 },
  { w: 85, color: '#34d399', indent: 16 },
]

export default function LaptopAnimation() {
  return (
    <div className="laptop-scene">
      {/* Floating badges */}
      <motion.div className="float-badge badge-dotnet"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 0.8, duration: 0.4 }, y: { delay: 1, duration: 3, repeat: Infinity, ease: 'easeInOut' } }}>
        <span className="fb-dot" style={{ background: '#818cf8' }} />.NET Core
      </motion.div>

      <motion.div className="float-badge badge-react"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.4 }, y: { delay: 1.4, duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}>
        <span className="fb-dot" style={{ background: '#38bdf8' }} />React
      </motion.div>

      <motion.div className="float-badge badge-node"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -7, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.4 }, y: { delay: 1.8, duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }}>
        <span className="fb-dot" style={{ background: '#34d399' }} />Node.js
      </motion.div>

      {/* Glow behind laptop */}
      <div className="laptop-glow" />

      {/* SVG Laptop */}
      <motion.svg
        className="laptop-svg"
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* ─ Screen shadow ─ */}
        <ellipse cx="260" cy="310" rx="160" ry="14" fill="rgba(14,165,233,0.12)" />

        {/* ─ Laptop Base / Keyboard ─ */}
        <rect x="80" y="300" width="360" height="22" rx="6" fill="#e2e8f0" />
        <rect x="88" y="300" width="344" height="16" rx="4" fill="#cbd5e1" />
        {/* touchpad */}
        <rect x="210" y="306" width="100" height="8" rx="3" fill="#b0bec5" />
        {/* keyboard rows */}
        {[0, 1, 2, 3].map(row => (
          <g key={row}>
            {Array.from({ length: 12 - row }).map((_, i) => (
              <rect key={i}
                x={100 + i * 27 + row * 5}
                y={258 + row * 9}
                width="20" height="7" rx="1.5"
                fill="rgba(0,0,0,0.07)" />
            ))}
          </g>
        ))}

        {/* ─ Laptop Lid / Screen outer ─ */}
        <rect x="90" y="50" width="340" height="250" rx="12" fill="#1e293b" />
        {/* screen bezel */}
        <rect x="96" y="56" width="328" height="238" rx="8" fill="#0f172a" />

        {/* ─ Screen display area ─ */}
        <rect x="102" y="62" width="316" height="226" rx="6" fill="#0d1117" />

        {/* top bar / title bar */}
        <rect x="102" y="62" width="316" height="22" rx="6" fill="#161b22" />
        <circle cx="116" cy="73" r="4" fill="#ff5f57" />
        <circle cx="130" cy="73" r="4" fill="#febc2e" />
        <circle cx="144" cy="73" r="4" fill="#28c840" />
        {/* file tabs */}
        <rect x="160" y="65" width="64" height="14" rx="3" fill="#0d1117" />
        <text x="192" y="75" textAnchor="middle" fontSize="7" fill="#58a6ff" fontFamily="monospace">App.jsx</text>
        <rect x="228" y="65" width="54" height="14" rx="3" fill="#161b22" />
        <text x="255" y="75" textAnchor="middle" fontSize="7" fill="#8b949e" fontFamily="monospace">Hero.css</text>

        {/* line numbers column */}
        <rect x="102" y="84" width="22" height="204" fill="#0d1117" />
        {codeLines.map((_, i) => (
          <text key={i} x="114" y={98 + i * 19} textAnchor="middle" fontSize="7" fill="#30363d" fontFamily="monospace">
            {i + 1}
          </text>
        ))}

        {/* Animated code lines */}
        {codeLines.map((line, i) => (
          <motion.rect
            key={i}
            x={128 + line.indent}
            y={91 + i * 19}
            width={line.w}
            height={9}
            rx={3}
            fill={line.color}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: line.w, opacity: 0.75 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.4, ease: 'easeOut' }}
          />
        ))}

        {/* Blinking cursor */}
        <motion.rect x="128" y={91 + codeLines.length * 19} width={3} height={9} rx={1} fill="#38bdf8"
          animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} />

        {/* status bar */}
        <rect x="102" y="280" width="316" height="8" fill="#161b22" />
        <text x="114" y="286" fontSize="5.5" fill="#58a6ff" fontFamily="monospace">● main</text>
        <text x="300" y="286" fontSize="5.5" fill="#8b949e" fontFamily="monospace">Ln 11, Col 1 · UTF-8</text>

        {/* ─ Person sitting at laptop ─ */}
        {/* Chair back */}
        <rect x="225" y="320" width="70" height="60" rx="8" fill="#cbd5e1" />
        <rect x="232" y="324" width="56" height="52" rx="6" fill="#e2e8f0" />

        {/* Body / torso */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>

          {/* shirt */}
          <path d="M222 358 Q230 340 260 336 Q290 340 298 358 L292 390 L228 390 Z" fill="#0ea5e9" />
          {/* collar */}
          <path d="M248 336 L260 346 L272 336" stroke="white" strokeWidth="1.5" fill="none" />

          {/* neck */}
          <rect x="255" y="322" width="10" height="16" rx="4" fill="#fbbf80" />

          {/* Head */}
          <ellipse cx="260" cy="310" rx="22" ry="24" fill="#fcd9a0" />
          {/* hair */}
          <path d="M238 304 Q240 280 260 278 Q280 280 282 304 Q270 295 260 296 Q250 295 238 304Z" fill="#1e293b" />
          {/* ears */}
          <ellipse cx="238" cy="312" rx="4" ry="5" fill="#fbbf80" />
          <ellipse cx="282" cy="312" rx="4" ry="5" fill="#fbbf80" />
          {/* eyes */}
          <ellipse cx="252" cy="310" rx="3.5" ry="4" fill="white" />
          <ellipse cx="268" cy="310" rx="3.5" ry="4" fill="white" />
          <motion.ellipse cx="253" cy="311" rx="2" ry="2.5" fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} />
          <motion.ellipse cx="269" cy="311" rx="2" ry="2.5" fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} />
          {/* smile */}
          <path d="M253 320 Q260 326 267 320" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* glasses */}
          <rect x="246" y="305" width="13" height="9" rx="3" stroke="#374151" strokeWidth="1.2" fill="rgba(14,165,233,0.15)" />
          <rect x="261" y="305" width="13" height="9" rx="3" stroke="#374151" strokeWidth="1.2" fill="rgba(14,165,233,0.15)" />
          <line x1="259" y1="309" x2="261" y2="309" stroke="#374151" strokeWidth="1.2" />
          {/* ear pieces */}
          <line x1="246" y1="309" x2="241" y2="311" stroke="#374151" strokeWidth="1.2" />
          <line x1="274" y1="309" x2="279" y2="311" stroke="#374151" strokeWidth="1.2" />

          {/* Left arm typing */}
          <motion.path d="M228 358 Q210 365 200 375 Q198 380 205 383"
            stroke="#fcd9a0" strokeWidth="9" fill="none" strokeLinecap="round"
            animate={{
              d: ["M228 358 Q210 365 200 375 Q198 380 205 383",
                "M228 358 Q210 368 202 376 Q200 381 207 384",
                "M228 358 Q210 365 200 375 Q198 380 205 383"]
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }} />

          {/* Right arm typing */}
          <motion.path d="M292 358 Q310 365 320 375 Q322 380 315 383"
            stroke="#fcd9a0" strokeWidth="9" fill="none" strokeLinecap="round"
            animate={{
              d: ["M292 358 Q310 365 320 375 Q322 380 315 383",
                "M292 358 Q308 368 318 376 Q320 381 313 384",
                "M292 358 Q310 365 320 375 Q322 380 315 383"]
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />

          {/* hands */}
          <ellipse cx="205" cy="384" rx="7" ry="5" fill="#fcd9a0" />
          <ellipse cx="315" cy="384" rx="7" ry="5" fill="#fcd9a0" />
        </motion.g>

        {/* ─ Coffee mug ─ */}
        <rect x="72" y="295" width="20" height="16" rx="3" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M92 300 Q98 300 98 307 Q98 313 92 313" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
        {/* steam */}
        <motion.path d="M78 292 Q80 287 78 282" stroke="#94a3b8" strokeWidth="1.2" fill="none" strokeLinecap="round"
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.path d="M84 291 Q86 286 84 281" stroke="#94a3b8" strokeWidth="1.2" fill="none" strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        <text x="82" y="308" textAnchor="middle" fontSize="7" fill="#0ea5e9" fontFamily="sans-serif">☕</text>
      </motion.svg>

      {/* WiFi / productivity floating icons */}
      <motion.div className="float-icon icon-code"
        animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        {'</>'}
      </motion.div>
      <motion.div className="float-icon icon-star"
        animate={{ y: [0, -7, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
        ⚡
      </motion.div>
    </div>
  )
}
