import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const letters = 'MAIMUN'.split('')

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Letters animation */}
      <div className="relative z-10 flex gap-2 mb-8">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              type: 'spring',
              stiffness: 200,
            }}
            className="text-6xl font-display font-black"
            style={{
              background: `linear-gradient(135deg, 
                hsl(${i * 40 + 270}, 80%, 70%), 
                hsl(${i * 40 + 300}, 80%, 60%))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 15px hsl(${i * 40 + 270}, 80%, 60%))`,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-400 font-mono text-sm mb-12 tracking-widest uppercase"
      >
        Portfolio Loading...
      </motion.p>

      {/* Progress bar */}
      <div className="relative w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, #7C3AED, #EC4899, #06B6D4)',
          }}
          transition={{ duration: 0.1 }}
        />
        <div className="absolute inset-0 shimmer-effect" />
      </div>

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: ['#7C3AED', '#EC4899', '#06B6D4'][i],
            boxShadow: `0 0 10px ${['rgba(124,58,237,0.8)', 'rgba(236,72,153,0.8)', 'rgba(6,182,212,0.8)'][i]}`,
          }}
          animate={{
            x: [0, Math.cos((i * 2 * Math.PI) / 3) * 120, Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 120, 0],
            y: [0, Math.sin((i * 2 * Math.PI) / 3) * 120, Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 120, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  )
}

export default Loader

