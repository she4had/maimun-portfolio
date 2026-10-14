import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'
import {
  FiCode, FiDatabase, FiLayout, FiServer, FiSmartphone, FiTool,
} from 'react-icons/fi'

const skillCategories = [
  {
    category: 'Frontend',
    icon: <FiLayout />,
    color: '#7C3AED',
    gradient: 'from-violet-600 to-violet-400',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    category: 'Backend',
    icon: <FiServer />,
    color: '#EC4899',
    gradient: 'from-pink-600 to-pink-400',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'GraphQL', level: 72 },
      { name: 'REST APIs', level: 92 },
      { name: 'FastAPI', level: 68 },
    ],
  },
  {
    category: 'Database',
    icon: <FiDatabase />,
    color: '#06B6D4',
    gradient: 'from-cyan-600 to-cyan-400',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Redis', level: 70 },
      { name: 'Firebase', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Prisma ORM', level: 72 },
    ],
  },
  {
    category: 'Mobile & Tools',
    icon: <FiSmartphone />,
    color: '#FFD700',
    gradient: 'from-yellow-500 to-orange-400',
    skills: [
      { name: 'React Native', level: 75 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 68 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 82 },
      { name: 'Linux', level: 72 },
    ],
  },
]

const SkillBar = ({ name, level, color, delay }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.5, delay: delay + 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  )
}

const techBubbles = [
  { name: 'React', color: '#61DAFB', size: 80 },
  { name: 'Node', color: '#68A063', size: 65 },
  { name: 'TS', color: '#3178C6', size: 60 },
  { name: 'CSS', color: '#264DE4', size: 55 },
  { name: 'Git', color: '#F05032', size: 58 },
  { name: 'AWS', color: '#FF9900', size: 62 },
  { name: 'Figma', color: '#F24E1E', size: 56 },
  { name: 'Docker', color: '#2496ED', size: 70 },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="What I know"
          title="My"
          highlight="Skills"
          description="A comprehensive toolkit for building modern web applications"
        />

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}20`, color: cat.color }}
                >
                  {cat.icon}
                </motion.div>
                <h3 className="font-display font-bold text-lg text-white">{cat.category}</h3>
                <div
                  className="ml-auto h-0.5 flex-1 max-w-[80px] rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />
              </div>

              {/* Skill bars */}
              <div>
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech bubble cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="font-display font-bold text-2xl text-white mb-10">
            Technologies I{' '}
            <span className="gradient-text">Love</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techBubbles.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: `0 0 30px ${tech.color}60`,
                  zIndex: 10,
                }}
                animate={{
                  y: [0, -8, 0],
                  transition: { duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' },
                }}
                className="relative flex items-center justify-center rounded-full glass cursor-pointer"
                style={{
                  width: tech.size,
                  height: tech.size,
                  border: `2px solid ${tech.color}40`,
                  boxShadow: `0 0 15px ${tech.color}20`,
                }}
              >

                <span
                  className="font-mono font-bold text-xs"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  style={{ background: `radial-gradient(circle, ${tech.color}40, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
