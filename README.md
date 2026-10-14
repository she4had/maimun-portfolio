# 🚀 Maimun Islam Shehad — Portfolio Website

A stunning, super-animated, color-packed personal portfolio built with **React**, **Framer Motion**, and **Tailwind CSS**.

---

## ✨ Features

- 🎨 **Ultra-colorful design** with neon glows, gradient text, and glass morphism
- 🎬 **Framer Motion** animations throughout — page transitions, scroll-triggered animations, hover effects
- ⌨️ **Typewriter effect** in Hero section cycling through roles
- 🖱️ **Custom animated cursor** with spring physics
- ✨ **Particle field** background with floating ambient orbs
- 🌀 **Loading screen** with letter-by-letter animation and orbiting dots
- 📱 **Fully responsive** with mobile hamburger menu
- 🌈 **Color-packed sections**: Hero, About, Skills, Projects, Experience, Contact, Footer
- 🧊 **Glass morphism** cards and UI elements
- 📊 **Animated skill bars** with shimmer effects
- 🗂️ **Filterable projects** grid with hover reveal overlays
- ⏳ **Timeline** experience section with alternating layout
- 📬 **Contact form** with animated send button states
- 🎯 **Smooth scroll navigation** with active section highlighting

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build Tool |
| **Framer Motion 11** | Animations |
| **Tailwind CSS 3** | Styling |
| **React Icons** | Icon Library |

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+** and npm

### Installation

```bash
# Navigate to the project
cd maimun-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
maimun-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx         # Animated loading screen
│   │   ├── CustomCursor.jsx   # Custom cursor with spring physics
│   │   ├── ParticleField.jsx  # Floating particle background
│   │   ├── Navbar.jsx         # Sticky navbar with active links
│   │   ├── Hero.jsx           # Hero + typewriter + parallax
│   │   ├── About.jsx          # About + morphing avatar + stats
│   │   ├── Skills.jsx         # Skill bars + tech bubble cloud
│   │   ├── Projects.jsx       # Filterable project cards
│   │   ├── Experience.jsx     # Timeline + education
│   │   ├── Contact.jsx        # Contact form + info
│   │   └── Footer.jsx         # Footer + CTA
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Global styles + animations
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#7C3AED` | Violet/Purple |
| Secondary | `#EC4899` | Pink |
| Accent | `#06B6D4` | Cyan |
| Neon | `#39FF14` | Green |
| Gold | `#FFD700` | Yellow/Gold |
| Plasma | `#FF6B35` | Orange |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag `dist/` folder to netlify.com/drop
```

---

## 📝 Customization

1. **Update personal info** in each section component
2. **Add your photo** by replacing the avatar in `About.jsx`
3. **Add real projects** in `Projects.jsx`
4. **Update social links** in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`
5. **Link your resume** in `Hero.jsx` download button

---

Made with ❤️ in Bangladesh by **Maimun Islam Shehad**

