# Afzal Khan Portfolio - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submit | Custom colors, pill shape |
| Card | Project cards, skill cards | Dark theme, custom border |
| Input | Contact form fields | Dark styling, focus glow |
| Textarea | Message field | Dark styling |
| Badge | Tech tags | Accent color variants |
| Separator | Visual dividers | Subtle color |
| Sheet | Mobile navigation | Dark overlay |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| Navbar | Global navigation | `components/Navbar.tsx` |
| Footer | Global footer | `components/Footer.tsx` |
| PageTransition | Page transition wrapper | `components/PageTransition.tsx` |
| AnimatedSection | Scroll-triggered animation wrapper | `components/AnimatedSection.tsx` |
| SkillCard | Skill category card | `components/SkillCard.tsx` |
| ProjectCard | Project showcase card | `components/ProjectCard.tsx` |
| ExperienceCard | Work experience card | `components/ExperienceCard.tsx` |
| Timeline | Experience timeline | `components/Timeline.tsx` |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load navbar slide | Framer Motion | `initial={{ y: -100 }}` → `animate={{ y: 0 }}` | Low |
| Hero text stagger reveal | Framer Motion | `staggerChildren: 0.2` with fade + slide | Medium |
| Profile image slide in | Framer Motion | `initial={{ x: 100, opacity: 0 }}` → animate | Low |
| Scroll-triggered fade-up | Framer Motion | `whileInView` with viewport threshold | Medium |
| Skill logo hover glow | CSS + Framer | `whileHover={{ scale: 1.15 }}` + CSS glow | Low |
| Project card hover lift | Framer Motion | `whileHover={{ y: -8, borderColor }}` | Low |
| Card scroll reveal | Framer Motion | `whileInView` with stagger | Medium |
| Button hover effects | CSS Transitions | Scale + glow shadow | Low |
| Form input focus | CSS Transitions | Border color + glow | Low |
| Certification badge pulse | CSS Animation | Keyframe pulse animation | Low |
| Page transitions | Framer Motion | AnimatePresence + motion.div | Medium |
| Mobile menu | Framer Motion | Sheet + slide animation | Low |

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative API
- Built-in gesture support
- AnimatePresence for exit animations
- whileInView for scroll triggers

### Secondary: CSS Animations
- Simple hover effects
- Continuous animations (pulse, float)
- Performance-critical micro-interactions

## Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PageTransition.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── SkillCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── MobileNav.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── skill-logos/
│   └── resume.pdf
├── components/ui/    # shadcn components
├── tailwind.config.ts
└── package.json
```

## Dependencies

### Core
- react
- react-dom
- react-router-dom

### Animation
- framer-motion

### UI
- @radix-ui/* (via shadcn)
- lucide-react (icons)
- class-variance-authority
- clsx
- tailwind-merge

### Utilities
- typescript
- vite
- tailwindcss

## Routing Structure

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experience" element={<Experience />} />
      <Route path="certifications" element={<Certifications />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</BrowserRouter>
```

## Color Variables (Tailwind Config)

```js
colors: {
  background: {
    primary: '#090909',
    secondary: '#121212',
    tertiary: '#0e0e10',
  },
  accent: {
    DEFAULT: '#ff5a65',
    light: '#ffa7ac',
    glow: 'rgba(255, 90, 101, 0.2)',
  },
  border: {
    DEFAULT: '#1f1f1f',
    light: 'rgba(255, 255, 255, 0.12)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.6)',
    muted: 'rgba(255, 255, 255, 0.38)',
  },
}
```

## Animation Easing Functions

```js
const easings = {
  outQuart: [0.165, 0.840, 0.440, 1],
  outExpo: [0.190, 1, 0.220, 1],
  inOutQuint: [0.860, 0, 0.070, 1],
};
```

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Considerations

1. Lazy load page components
2. Use `will-change` sparingly
3. Implement `prefers-reduced-motion`
4. Optimize images (WebP format)
5. Use CSS for simple animations
6. Framer Motion for complex sequences
