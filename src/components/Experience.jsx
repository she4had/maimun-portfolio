import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from './About'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechVision BD',
    period: '2023 – Present',
    type: 'Full-time',
    description: 'Leading the frontend team to build scalable React applications. Architected a micro-frontend system serving 500K+ users daily. Mentored 5 junior developers.',
    achievements: [
      'Reduced page load by 60% via code splitting & lazy loading',
      'Built reusable component library used across 3 products',
      'Implemented CI/CD pipeline with 95% test coverage',
    ],
    color: '#7C3AED',
    icon: '🚀',
  },
  {
    role: 'Full-Stack Developer',
    company: 'DigitalCraft Studio',
    period: '2022 – 2023',
    type: 'Full-time',
    description: 'Developed end-to-end web solutions for clients across e-commerce, fintech, and SaaS domains. Collaborated directly with designers and stakeholders.',
    achievements: [
      'Delivered 15+ client projects on time and under budget',
      'Built real-time collaborative tools using Socket.io',
      'Integrated payment gateways (Stripe, PayPal)',
    ],
    color: '#EC4899',
    icon: '💡',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'StartupNest Inc.',
    period: '2021 – 2022',
    type: 'Internship',
    description: 'Started the journey building responsive UIs, learning modern React patterns, and contributing to production-level code from day one.',
    achievements: [
      'Built 8 responsive landing pages from Figma designs',
      'Learned and applied React Query & Zustand for state management',
      'Won "Best Intern" award Q2 2022',
    ],
    color: '#06B6D4',
    icon: '⭐',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2020 – Present',
    type: 'Freelance',
    description: 'Building custom web solutions for clients worldwide. Specialized in React, Next.js, and Node.js projects.',
    achievements: [
      '20+ satisfied international clients',
      '5-star rating on Fiverr & Upwork',
      'Niche in high-performance, SEO-optimized websites',
    ],
    color: '#FFD700',
    icon: '🌟',
  },
]

const TimelineItem = ({ exp, index, isLeft }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="flex-1 md:max-w-[calc(50%-40px)]"
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: `0 20px 40px ${exp.color}20` }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="glass rounded-2xl p-6 border border-white/5"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{exp.icon}</span>
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono font-semibold"
                  style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}30` }}
                >
                  {exp.type}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
              <p className="text-gray-400 font-semibold">{exp.company}</p>
            </div>
            <span className="text-gray-500 text-sm font-mono whitespace-nowrap">{exp.period}</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

          {/* Achievements */}
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + i * 0.07 + 0.4 }}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">▸</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Timeline center */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: 80 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl z-10"
          style={{
            background: `linear-gradient(135deg, ${exp.color}40, ${exp.color}20)`,
            border: `2px solid ${exp.color}60`,
            boxShadow: `0 0 20px ${exp.color}40`,
          }}
        >
          {exp.icon}
        </motion.div>
      </div>

      {/* Empty space on opposite side */}
      <div className="hidden md:block flex-1 md:max-w-[calc(50%-40px)]" />
    </div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full dot-pattern opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="My journey"
          title="Work"
          highlight="Experience"
          description="A timeline of my professional growth and achievements"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(180deg, #7C3AED, #EC4899, #06B6D4, #FFD700)' }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
            🎓 <span className="gradient-text">Education</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                degree: 'B.Sc. in Computer Science',
                school: 'BUET (Bangladesh University of Engineering and Technology)',
                year: '2019 – 2023',
                color: '#7C3AED',
              },
              {
                degree: 'Higher Secondary Certificate',
                school: 'Dhaka Residential Model College',
                year: '2017 – 2019',
                color: '#EC4899',
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: `${edu.color}20`, color: edu.color }}
                >
                  📚
                </div>
                <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                <p className="text-gray-400 text-sm mb-2">{edu.school}</p>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{ background: `${edu.color}20`, color: edu.color }}
                >
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

