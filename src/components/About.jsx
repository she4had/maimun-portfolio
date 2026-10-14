import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiLayers, FiZap, FiAward } from 'react-icons/fi'

const stats = [
  { value: '50+', label: 'Projects Completed', icon: <FiLayers />, color: '#7C3AED' },
  { value: '3+', label: 'Years Experience', icon: <FiCode />, color: '#EC4899' },
  { value: '20+', label: 'Happy Clients', icon: <FiZap />, color: '#06B6D4' },
  { value: '10+', label: 'Awards Won', icon: <FiAward />, color: '#FFD700' },
]

const SectionTitle = ({ subtitle, title, highlight, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    <span className="inline-block text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">
      {subtitle}
    </span>
    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
      {title}{' '}
      <span className="gradient-text">{highlight}</span>
    </h2>
    {description && (
      <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
)

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { label: 'Frontend', color: '#7C3AED', desc: 'React, Next.js, Vue' },
    { label: 'Backend', color: '#EC4899', desc: 'Node.js, Express, Python' },
    { label: 'Database', color: '#06B6D4', desc: 'MongoDB, PostgreSQL' },
    { label: 'Cloud', color: '#FFD700', desc: 'AWS, Vercel, Firebase' },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Get to know me"
          title="About"
          highlight="Me"
          description="Passionate developer crafting exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left: Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Main avatar container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Morphing background */}
              <motion.div
                className="absolute inset-0 morphing-blob opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4)',
                }}
              />

              {/* Avatar circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden glass border-2 border-violet-500/30"
                style={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)' }}
              >
                {/* Placeholder avatar with initials */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1a0533, #0d0d1a)',
                  }}
                >
                  <div className="text-center">
                    <motion.span
                      className="block font-display font-black text-7xl gradient-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      MIS
                    </motion.span>
                    <span className="text-gray-500 text-sm font-mono">Developer</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting badges */}
              {highlights.map((h, i) => {
                const angle = (i * 90) - 45
                const rad = (angle * Math.PI) / 180
                const r = 160
                const cx = 50 + Math.cos(rad) * 50
                const cy = 50 + Math.sin(rad) * 50
                return (
                  <motion.div
                    key={h.label}
                    className="absolute z-20 px-3 py-1.5 glass rounded-full text-xs font-mono font-semibold"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      transform: 'translate(-50%, -50%)',
                      color: h.color,
                      border: `1px solid ${h.color}40`,
                      boxShadow: `0 0 15px ${h.color}30`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                    animate={{ y: [0, -5, 0] }}
                  >
                    {h.label}
                  </motion.div>
                )
              })}

              {/* Ring decorations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-violet-500/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-16 rounded-full border border-pink-500/10 border-dashed"
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-3xl text-white mb-6">
              Building the{' '}
              <span className="gradient-text">Future</span>{' '}
              of the Web
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                I'm <span className="text-white font-semibold">Maimun Islam Shehad</span>, a passionate full-stack developer
                and creative designer based in Bangladesh. I specialize in crafting immersive digital
                experiences that blend cutting-edge technology with beautiful design.
              </p>
              <p>
                With <span className="text-violet-400 font-semibold">3+ years</span> of experience, I've
                delivered projects ranging from sleek landing pages to complex web applications. My
                philosophy: every pixel matters, every interaction counts.
              </p>
              <p>
                When I'm not coding, I'm exploring new design trends, contributing to open-source
                projects, or mentoring the next generation of developers.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'TypeScript', 'Node.js', 'Figma', 'Python', 'AWS', 'MongoDB', 'GraphQL'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 glass rounded-full text-sm font-mono text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Let's Collaborate →
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass rounded-2xl p-6 text-center"
              style={{ borderColor: `${stat.color}30` }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl"
                style={{ background: `${stat.color}20`, color: stat.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div
                className="text-3xl font-display font-black mb-1"
                style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { SectionTitle }
export default About

