import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SectionTitle } from './About'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'NeuroShop E-Commerce',
    description: 'A full-stack e-commerce platform with AI-powered product recommendations, real-time inventory, and seamless checkout experience.',
    longDescription: 'Built with Next.js, Node.js, and MongoDB. Features include JWT auth, Stripe payments, real-time notifications, and a custom CMS for product management.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    color: '#7C3AED',
    gradient: 'from-violet-600 via-purple-600 to-violet-900',
    github: '#',
    live: '#',
    category: 'Full-Stack',
    featured: true,
    stats: { stars: 240, forks: 48 },
  },
  {
    id: 2,
    title: 'TaskFlow Pro',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop boards, and team analytics dashboard.',
    longDescription: 'Real-time collaboration using Socket.io, drag-and-drop with react-beautiful-dnd, and comprehensive analytics using Chart.js.',
    tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    color: '#EC4899',
    gradient: 'from-pink-600 via-rose-600 to-pink-900',
    github: '#',
    live: '#',
    category: 'Full-Stack',
    featured: true,
    stats: { stars: 185, forks: 32 },
  },
  {
    id: 3,
    title: 'CryptoVision Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market trend analysis.',
    longDescription: 'Live WebSocket data, interactive charts with D3.js, portfolio tracker with P&L calculations.',
    tags: ['React', 'D3.js', 'WebSocket', 'TailwindCSS'],
    color: '#06B6D4',
    gradient: 'from-cyan-600 via-teal-600 to-cyan-900',
    github: '#',
    live: '#',
    category: 'Frontend',
    featured: false,
    stats: { stars: 320, forks: 65 },
  },
  {
    id: 4,
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot with natural language processing, context memory, and multi-modal understanding.',
    longDescription: 'Powered by OpenAI API with custom fine-tuning, voice input/output, and conversation history.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI', 'WebSockets'],
    color: '#FFD700',
    gradient: 'from-yellow-500 via-amber-500 to-orange-600',
    github: '#',
    live: '#',
    category: 'AI/ML',
    featured: false,
    stats: { stars: 410, forks: 87 },
  },
  {
    id: 5,
    title: 'FitTrack Mobile App',
    description: 'A cross-platform fitness tracking app with workout plans, nutrition logging, and social challenges.',
    longDescription: 'React Native app with biometric auth, HealthKit/Google Fit integration, and social features.',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    color: '#39FF14',
    gradient: 'from-green-600 via-emerald-600 to-green-900',
    github: '#',
    live: '#',
    category: 'Mobile',
    featured: false,
    stats: { stars: 156, forks: 28 },
  },
  {
    id: 6,
    title: 'DevBlog CMS',
    description: 'A modern headless CMS with markdown support, syntax highlighting, and SEO optimization for developer blogs.',
    longDescription: 'Built with Next.js 14, MDX, and Contentlayer. Supports dark/light themes and custom component libraries.',
    tags: ['Next.js', 'MDX', 'Contentlayer', 'Vercel'],
    color: '#FF6B35',
    gradient: 'from-orange-600 via-red-500 to-orange-900',
    github: '#',
    live: '#',
    category: 'Frontend',
    featured: false,
    stats: { stars: 198, forks: 41 },
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile', 'AI/ML']

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5"
      whileHover={{ y: -8 }}
    >
      {/* Project gradient header */}
      <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <motion.div
          animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center opacity-20"
        >
          <span className="font-display font-black text-8xl text-white">
            {project.id}
          </span>
        </motion.div>

        {/* Animated grid on card */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-2 py-1 rounded-full text-xs font-mono font-semibold text-white"
            style={{ background: `${project.color}60`, border: `1px solid ${project.color}80` }}
          >
            {project.category}
          </span>
        </div>

        {/* Stars */}
        <div className="absolute top-4 right-4 flex items-center gap-1 text-white/70 text-xs">
          <span>⭐</span>
          <span className="font-mono">{project.stats.stars}</span>
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: 'rgba(0,0,0,0.6)' }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${project.color}` }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ delay: 0.05 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: `${project.color}80`, border: `1px solid ${project.color}` }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${project.color}` }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: `${project.color}80`, border: `1px solid ${project.color}` }}
          >
            <FiExternalLink />
          </motion.a>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono text-gray-400"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>🍴 {project.stats.forks} forks</span>
          </div>
          <motion.button
            whileHover={{ x: 4, color: project.color }}
            className="flex items-center gap-1 text-xs text-gray-400 font-medium transition-colors"
          >
            View Details <FiArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Animated border glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${project.color}20, 0 0 30px ${project.color}20` }}
      />
    </motion.div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="What I've built"
          title="Featured"
          highlight="Projects"
          description="A selection of projects that showcase my skills and creativity"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCat"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))',
                    border: '1px solid rgba(124,58,237,0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FiGithub className="text-lg" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

