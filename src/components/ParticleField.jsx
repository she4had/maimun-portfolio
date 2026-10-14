import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleField = () => {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4,
    color: ['#7C3AED', '#EC4899', '#06B6D4', '#FFD700', '#39FF14', '#FF6B35'][
      Math.floor(Math.random() * 6)
    ],
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Large ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-3/4 left-1/2 w-72 h-72 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}
        animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default ParticleField

