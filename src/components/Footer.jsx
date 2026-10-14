import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const footerLinks = [
  {
    title: 'Navigation',
    links: ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Email', href: 'mailto:maimun.shehad@gmail.com' },
    ],
  },
]

const Footer = () => {
  const scrollToSection = (section) => {
    const el = document.querySelector(`#${section.toLowerCase()}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #EC4899, #06B6D4, transparent)' }}
      />

      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 text-center border border-white/10 relative overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.15)' }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-violet-500/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-pink-500/10"
          />
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Let's turn your vision into reality. Drop me a message and let's get started!
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(124, 58, 237, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiMail />
            Start a Conversation
          </motion.button>
        </motion.div>

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="font-display font-black text-3xl gradient-text">M.I.S</span>
              <p className="text-gray-500 text-xs font-mono tracking-wider mt-1">
                Maimun Islam Shehad
              </p>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-Stack Developer & Creative Designer crafting exceptional digital experiences from Dhaka, Bangladesh.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FiGithub />, href: '#', color: '#fff' },
                { icon: <FiLinkedin />, href: '#', color: '#0A66C2' },
                { icon: <FiTwitter />, href: '#', color: '#1DA1F2' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: s.color }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 text-sm transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => scrollToSection(item === 'Home' ? 'hero' : item)}
                    whileHover={{ x: 4, color: '#7C3AED' }}
                    className="text-gray-400 text-sm hover:text-white transition-all duration-200 flex items-center gap-2"
                  >
                    <span className="text-violet-500 text-xs">▸</span>
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              {[
                { icon: '📧', text: 'maimun.shehad@gmail.com' },
                { icon: '📍', text: 'Dhaka, Bangladesh' },
                { icon: '⏰', text: 'GMT+6 (BST)' },
                { icon: '💼', text: 'Open to opportunities' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            © {new Date().getFullYear()} Maimun Islam Shehad. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" />
            </motion.span>
            {' '}in Bangladesh
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xs font-mono"
          >
            Built with React + Framer Motion + Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

