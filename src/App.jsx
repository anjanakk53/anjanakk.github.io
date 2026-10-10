import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  House,
  Network,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Palette,
  School,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'

const EMAIL = 'anjanakk53@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/anjanakk10'
const GITHUB = 'https://github.com/anjanakk53'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function ExternalSocialLink({ href, label, children }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Anjana KK home">
          <span className="brand-mark">A</span>
          <span>Anjana<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navItems.map(({ label, href }) => (
            <a
              className={activeSection === href.slice(1) ? 'active' : ''}
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let&apos;s connect <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-grid content-width">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span />Welcome to my corner of the web</p>
          <h1>Hi, I&apos;m <em>Anjana</em> KK<span className="title-dot">.</span></h1>
          <p className="hero-title">Computer Science Engineering Student</p>
          <p className="hero-tagline">Learning today, <strong>building tomorrow.</strong></p>
          <p className="hero-description">
            I&apos;m a passionate computer science student who enjoys learning new technologies and solving problems, one thoughtful step at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">Explore my portfolio <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Get in touch <Mail size={17} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <ExternalSocialLink href={GITHUB} label="Visit Anjana on GitHub"><GitBranch size={19} /></ExternalSocialLink>
            <ExternalSocialLink href={LINKEDIN} label="Visit Anjana on LinkedIn"><Network size={19} /></ExternalSocialLink>
            <a className="social-link" href={`mailto:${EMAIL}`} aria-label="Email Anjana"><Mail size={19} /></a>
            <span className="social-note">Find me online</span>
          </div>
        </div>
        <div className="hero-visual reveal delay-one">
          <div className="visual-backdrop" />
          <div className="profile-frame">
            {!photoFailed && <img src="/anjana.jpg" alt="Anjana KK" onError={() => setPhotoFailed(true)} />}
            {photoFailed && <span className="initials" aria-label="Anjana KK initials">AK</span>}
            <div className="availability"><span />Open to learning</div>
          </div>
          <div className="floating-note note-top"><Sparkles size={17} /><span>Curious<br /><strong>by nature</strong></span></div>
          <div className="floating-note note-bottom"><Code2 size={17} /><span>Learning<br /><strong>in public</strong></span></div>
          <div className="visual-caption"><span>01</span><span>Scroll to explore</span><ChevronDown size={16} /></div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span />Scroll to discover</div>
    </section>
  )
}

function About() {
  const infoCards = [
    { icon: GraduationCap, label: 'Education', value: 'B.Tech in CSE' },
    { icon: MapPin, label: 'Based in', value: 'Kerala, India' },
    { icon: Terminal, label: 'Exploring', value: 'Technology & ideas' },
    { icon: HeartHandshake, label: 'Brings', value: 'Teamwork' },
  ]
  return (
    <section className="section-pad about" id="about">
      <div className="content-width about-grid">
        <SectionHeading eyebrow="A little about me" title={<>Learning with <em>curiosity.</em></>} />
        <div className="about-content">
          <p className="large-copy">I&apos;m a second-year Computer Science Engineering student who enjoys learning programming, exploring new technologies, and improving my problem-solving skills.</p>
          <p>I&apos;m still exploring the many paths in computer science, from web development and UI/UX design to data science and artificial intelligence. For now, I&apos;m focused on building a strong foundation and staying open to where that learning leads.</p>
          <div className="info-grid">
            {infoCards.map(({ icon: Icon, label, value }) => <div className="info-card" key={label}><Icon size={19} /><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section-pad education" id="education">
      <div className="content-width">
        <SectionHeading eyebrow="The path so far" title="Education" children="The classroom is where my interest in technology became a direction." />
        <div className="education-card">
          <div className="education-icon"><School size={28} /></div>
          <div className="education-details"><p className="card-kicker">Currently pursuing · Second year</p><h3>B.Tech in Computer Science Engineering</h3><p>Sreepathy Institute of Management and Technology</p><span><MapPin size={15} /> Vavanoor, Kerala, India</span></div>
          <div className="education-side"><span>01</span><GraduationCap size={30} /></div>
        </div>
      </div>
    </section>
  )
}

const skills = [
  { icon: Terminal, name: 'Python', text: 'Practising programming fundamentals and problem solving.' },
  { icon: Code2, name: 'C Programming', text: 'Building a clear foundation in logic and core concepts.' },
  { icon: Monitor, name: 'HTML', text: 'Learning to structure accessible web experiences.' },
  { icon: Palette, name: 'CSS', text: 'Exploring layouts, responsive design, and visual details.' },
  { icon: GitBranch, name: 'Git & GitHub', text: 'Getting comfortable with version control and collaboration.' },
  { icon: HeartHandshake, name: 'Teamwork', text: 'Communicating, contributing, and learning with others.' },
]

function Skills() {
  return <section className="section-pad skills" id="skills"><div className="content-width"><SectionHeading eyebrow="Tools in progress" title={<>Skills I&apos;m <em>practising.</em></>} children="A growing toolkit, built through consistent practice and a willingness to ask questions." /><div className="skills-grid">{skills.map(({ icon: Icon, name, text }) => <article className="skill-card" key={name}><div className="skill-icon"><Icon size={21} /></div><h3>{name}</h3><p>{text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div></div></section>
}

function ProjectCard({ title = 'Your next project', description = 'A space for something you build, learn from, and feel proud to share.', action = 'Add project details' }) {
  return <article className="project-card"><div className="project-number">00</div><div><p className="card-kicker">Coming soon</p><h3>{title}</h3><p>{description}</p></div><span className="project-action">{action} <ArrowUpRight size={16} /></span></article>
}

function EmptyStateSection({ id, eyebrow, title, description, icon: Icon, children }) {
  return <section className="section-pad empty-section" id={id}><div className="content-width"><SectionHeading eyebrow={eyebrow} title={title} centered>{description}</SectionHeading><div className="empty-state"><div className="empty-icon"><Icon size={26} /></div><h3>{children}</h3><p>This space is ready for the next chapter. I&apos;ll update it as I learn, create, and collect experiences worth sharing.</p><span className="empty-line"><span /></span></div></div></section>
}

function Projects() {
  return <section className="section-pad projects" id="projects"><div className="content-width"><div className="project-heading"><SectionHeading eyebrow="Work in progress" title={<>My project journey <em>starts here.</em></>} children="I don&apos;t have completed projects to showcase yet, but I&apos;m actively developing the skills to make thoughtful ones." /><span className="section-index">03 / 06</span></div><ProjectCard /></div></section>
}

function Contact() {
  return <section className="section-pad contact" id="contact"><div className="content-width contact-grid"><div><SectionHeading eyebrow="Have a thought?" title={<>Let&apos;s start a <em>conversation.</em></>} /><p className="contact-copy">Whether it&apos;s about learning, collaboration, or just saying hello, my inbox is open.</p></div><div className="contact-links"><a className="contact-link" href={`mailto:${EMAIL}`}><span className="contact-icon"><Mail size={20} /></span><span><small>Email me</small><strong>{EMAIL}</strong></span><ArrowUpRight size={20} /></a><a className="contact-link" href={LINKEDIN} target="_blank" rel="noreferrer"><span className="contact-icon"><Network size={20} /></span><span><small>Connect on LinkedIn</small><strong>/anjanakk10</strong></span><ExternalLink size={18} /></a><a className="contact-link" href={GITHUB} target="_blank" rel="noreferrer"><span className="contact-icon"><GitBranch size={20} /></span><span><small>See me on GitHub</small><strong>/anjanakk53</strong></span><ExternalLink size={18} /></a></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="content-width footer-grid"><div><a className="brand" href="#home"><span className="brand-mark">A</span><span>Anjana<span className="brand-dot">.</span></span></a><p>Learning today, building tomorrow.</p></div><div className="footer-nav"><span>Explore</span>{navItems.slice(1, 5).map(({ label, href }) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-socials"><span>Elsewhere</span><div><ExternalSocialLink href={GITHUB} label="GitHub"><GitBranch size={18} /></ExternalSocialLink><ExternalSocialLink href={LINKEDIN} label="LinkedIn"><Network size={18} /></ExternalSocialLink><a className="social-link" href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18} /></a></div></div></div><div className="content-width footer-bottom"><span>© {new Date().getFullYear()} Anjana KK</span><span>Made with curiosity & care</span></div></footer>
}

function App() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => { const onScroll = () => setShowTop(window.scrollY > 500); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <><Navbar /><main><Hero /><About /><Education /><Skills /><Projects /><EmptyStateSection id="certifications" eyebrow="Milestones ahead" title="Certifications" description="A collection for the things I earn along the way." icon={Check}>Certificates will live here soon.</EmptyStateSection><EmptyStateSection id="achievements" eyebrow="The next chapters" title="Achievements" description="Room to celebrate progress, big and small." icon={Sparkles}>The best is still being written.</EmptyStateSection><Contact /></main><Footer />{showTop && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUpRight size={18} /></button>}</>
}

export default App