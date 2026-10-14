import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHover = () => setLinkHovered(true)
    const handleLinkLeave = () => setLinkHovered(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover)
      el.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed z-[9998] pointer-events-none"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicked ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.2 }}
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
          boxShadow: '0 0 10px rgba(124, 58, 237, 0.8)',
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed z-[9997] pointer-events-none"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: linkHovered ? 2.5 : clicked ? 0.8 : 1,
          opacity: linkHovered ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid rgba(124, 58, 237, 0.5)',
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)',
        }}
      />

      {/* Trailing glow */}
      <motion.div
        className="fixed z-[9996] pointer-events-none"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 30, mass: 1 }}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)',
        }}
      />
    </>
  )
}

export default CustomCursor

