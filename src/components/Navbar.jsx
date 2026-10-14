import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href, label) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3 shadow-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero', 'Home') }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <span className="font-display font-black text-2xl gradient-text">
            M.I.S
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.li key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <button
                onClick={() => scrollTo(link.href, link.label)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === link.label ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === link.label && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(124, 58, 237, 0.2)', border: '1px solid rgba(124, 58, 237, 0.4)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('#contact', 'Contact') }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block btn-primary text-sm font-semibold"
        >
          Hire Me
        </motion.a>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-violet-400"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-pink-400"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cyan-400"
          />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-dark border-t border-white/5 mt-3"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href, link.label)}
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    active === link.label
                      ? 'text-white bg-violet-500/20 border border-violet-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

