import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Creative Coder',
  'React Specialist',
  'Problem Solver',
]

const TypewriterText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentIndex]
    let timeout

    if (!isDeleting && currentText === text) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      const delta = isDeleting ? 50 : 100
      timeout = setTimeout(() => {
        setCurrentText(isDeleting
          ? text.substring(0, currentText.length - 1)
          : text.substring(0, currentText.length + 1)
        )
      }, delta)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  return (
    <span className="text-violet-400">
      {currentText}
      <span className="cursor-line">&nbsp;</span>
    </span>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const socials = [
    { icon: <FiGithub />, href: '#', label: 'GitHub', color: '#fff' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: <FiMail />, href: 'mailto:maimun@email.com', label: 'Email', color: '#EC4899' },
  ]

  const floatingElements = [
    { text: 'React', color: '#61DAFB', x: '10%', y: '20%', delay: 0 },
    { text: 'Node.js', color: '#68A063', x: '85%', y: '15%', delay: 0.5 },
    { text: 'TypeScript', color: '#3178C6', x: '5%', y: '65%', delay: 1 },
    { text: 'CSS3', color: '#264DE4', x: '88%', y: '60%', delay: 1.5 },
    { text: 'MongoDB', color: '#47A248', x: '15%', y: '85%', delay: 2 },
    { text: 'Python', color: '#FFD43B', x: '80%', y: '80%', delay: 0.8 },
  ]

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Floating tech tags */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={el.text}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-mono font-medium"
          style={{ left: el.x, top: el.y, color: el.color, borderColor: `${el.color}40` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            y: [0, -10, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: el.delay },
            y: { duration: 4, repeat: Infinity, delay: el.delay, ease: 'easeInOut' },
            scale: { duration: 0.5, delay: el.delay + 1 },
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: el.color }} />
          {el.text}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border-purple mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ boxShadow: '0 0 8px #4ade80' }}
          />
          <span className="text-gray-300 text-sm font-mono">Available for work</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-display font-black leading-none mb-4">
            <motion.span
              className="block text-5xl md:text-7xl lg:text-8xl text-white mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="block text-6xl md:text-8xl lg:text-[7rem] gradient-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ lineHeight: 1.1 }}
            >
              Maimun Islam
            </motion.span>
            <motion.span
              className="block text-5xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))',
              }}
            >
              Shehad
            </motion.span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl font-mono mb-8 text-gray-300"
        >
          I'm a <TypewriterText texts={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-12"
        >
          Crafting{' '}
          <span className="text-violet-400 font-semibold">beautiful</span>,{' '}
          <span className="text-pink-400 font-semibold">performant</span>, and{' '}
          <span className="text-cyan-400 font-semibold">user-centric</span>{' '}
          digital experiences that leave a lasting impression.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-white font-semibold"
          >
            View My Work ✦
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              whileHover={{
                scale: 1.2,
                color: social.color,
                boxShadow: `0 0 20px ${social.color}80`,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 text-xl transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="text-violet-400" />
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 right-8 w-40 h-40 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full border border-violet-500/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-4 left-4 right-4 bottom-4 border border-pink-500/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-8 left-8 right-8 bottom-8 border border-cyan-500/30 rounded-full"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  )
}

export default Hero

