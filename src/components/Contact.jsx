import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { SectionTitle } from './About'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'maimun.shehad@gmail.com', href: 'mailto:maimun.shehad@gmail.com', color: '#7C3AED' },
  { icon: <FiPhone />, label: 'Phone', value: '+880 1XXX-XXXXXX', href: 'tel:+8801XXXXXXXXX', color: '#EC4899' },
  { icon: <FiMapPin />, label: 'Location', value: 'Dhaka, Bangladesh', href: '#', color: '#06B6D4' },
]

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: '#', color: '#fff' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: <FiTwitter />, label: 'Twitter', href: '#', color: '#1DA1F2' },
]

const InputField = ({ label, type = 'text', placeholder, id, isTextarea = false }) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            rows={5}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-600 bg-transparent border border-white/10 focus:outline-none focus:border-violet-500/60 resize-none transition-all duration-300"
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-600 bg-transparent border border-white/10 focus:outline-none focus:border-violet-500/60 transition-all duration-300"
          />
        )}
        {/* Focus glow */}
        <motion.div
          animate={{
            opacity: focused ? 1 : 0,
            boxShadow: focused ? '0 0 20px rgba(124, 58, 237, 0.3)' : 'none',
          }}
          className="absolute inset-0 rounded-xl pointer-events-none"
        />
      </div>
    </div>
  )
}

const Contact = () => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSending(false)
    setSent(true)
    formRef.current?.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background gradient blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'conic-gradient(from 0deg, #7C3AED, #EC4899, #06B6D4, #FFD700, #7C3AED)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Get in touch"
          title="Contact"
          highlight="Me"
          description="Ready to collaborate? Let's build something amazing together"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Let's{' '}
                <span className="gradient-text">Talk</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hi —
                my inbox is always open. I'll get back to you within 24 hours!
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg transition-all duration-300"
                    style={{ background: `${info.color}20`, color: info.color }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-wide">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-500 text-sm font-mono uppercase tracking-wide mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.2, color: s.color, boxShadow: `0 0 20px ${s.color}60` }}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-400 text-xl transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-4 border border-green-500/20"
              style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.1)' }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 10px #4ade80' }}
                />
                <div>
                  <p className="text-white text-sm font-semibold">Currently Available</p>
                  <p className="text-gray-400 text-xs">Open to freelance & full-time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="name"
                  label="Your Name"
                  placeholder="Maimun Islam"
                />
                <InputField
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <InputField
                  id="subject"
                  label="Subject"
                  placeholder="Project Collaboration / Job Offer / Say Hi"
                />
              </div>
              <div className="mb-8">
                <InputField
                  id="message"
                  label="Message"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  isTextarea
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02, boxShadow: '0 0 40px rgba(124,58,237,0.7)' } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden transition-all duration-300"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                  boxShadow: sent ? '0 0 30px rgba(34, 197, 94, 0.4)' : '0 0 30px rgba(124, 58, 237, 0.4)',
                }}
              >
                <AnimatePresence mode="wait">
                  {sending ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                      />
                      Sending...
                    </motion.span>
                  ) : sent ? (
                    <motion.span
                      key="sent"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      ✅ Message Sent! I'll reply soon.
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      className="flex items-center justify-center gap-2"
                    >
                      <FiSend />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Shimmer on button */}
                {!sending && !sent && (
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
