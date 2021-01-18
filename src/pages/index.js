import { useEffect, useRef, useState } from 'react'
import styles from 'styles/home.module.scss'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiArrowNarrowDown } from 'react-icons/hi'
import LoadingPage from 'components/LoadingPage'
import fillSpace from 'utils/fillSpace'
import applyStyle from 'utils/applyStyle'
import updateActiveIndicator from 'utils/updateActiveIndicator'
import Skills from 'components/Skills'
import AboutMe from 'components/AboutMe'
import Projects from 'components/Projects'

function Home () {
  const headerRef = useRef(null)
  const navbarRef = useRef(null)
  const spaceRef = useRef(null)
  const aboutMeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutMeLinkRef = useRef(null)
  const skillsLinkRef = useRef(null)
  const projectsLinkRef = useRef(null)
  const [isPinned, setPinned] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const freeSpaceDistributed = fillSpace({ header: headerRef, navbar: navbarRef })
    applyStyle(headerRef.current, 'marginTop', `${freeSpaceDistributed}px`)
    applyStyle(spaceRef.current, 'height', `${freeSpaceDistributed}px`)

    document.documentElement.style.setProperty('--underscore-position', `${aboutMeLinkRef.current.offsetLeft}px`)
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    const observer = new IntersectionObserver(
      ([e]) => setPinned(e.intersectionRatio < 1),
      { threshold: [1] }
    )
    observer.observe(navbarRef.current)

    const timer = setTimeout(() => setLoading(false), 1000)

    return () => {
      navbarRef.current && observer.unobserve(navbarRef.current)
      document.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!isPinned) {
      document.documentElement.style.setProperty('--underscore-width', '0')
    }
  }, [isPinned])

  const scrollToView = (toRef) => {
    toRef.current.scrollIntoView()
  }

  const handleScroll = () => {
    updateActiveIndicator(
      { aboutMeRef, skillsRef, projectsRef },
      { aboutMeLinkRef, skillsLinkRef, projectsLinkRef }
    )
  }

  const handleResize = () => {
    updateActiveIndicator(
      { aboutMeRef, skillsRef, projectsRef },
      { aboutMeLinkRef, skillsLinkRef, projectsLinkRef }
    )
  }

  return (
    <div>
      {loading && <LoadingPage />}

      <header className={styles.header} ref={headerRef}>
        <img className={styles['header-background']} src="/images/welcome-gradient.png" alt="welcome gradient"/>
        <img src="/images/logo.svg" alt="Logo"/>
        <h1>David Ponce Vargas</h1>
        <h2>Web Developer</h2>
      </header>

      <nav className={`${styles.navbar} ${isPinned ? styles.pinned : ''}`} ref={navbarRef}>
        <div>
          <span ref={aboutMeLinkRef} onClick={() => scrollToView(aboutMeRef)} >About me</span>
          <span ref={skillsLinkRef} onClick={() => scrollToView(skillsRef)} >Skills</span>
          <span ref={projectsLinkRef} onClick={() => scrollToView(projectsRef)} >Projects</span>
          <div className={styles.navbar__underscore} />
        </div>
      </nav>

      <div className={styles.space} ref={spaceRef}>
        <div className={styles['contacts-bar']}>
          <a href="https://www.linkedin.com/in/david-ponce-230369128/" target="_blank" rel="noopener noreferrer external">
            <SiLinkedin size={24}/>
          </a>
          <a href="https://www.github.com/davidp46" target="_blank" rel="noopener noreferrer external">
            <SiGithub size={24}/>
          </a>
        </div>
        <HiArrowNarrowDown onClick={() => scrollToView(aboutMeRef)} cursor="pointer" size={20} />
      </div>

      <section className={styles.section} ref={aboutMeRef}>
        <h2>About me</h2>
        <AboutMe />
      </section>

      <section className={styles.section} ref={skillsRef}>
        <h2>Skills</h2>
        <div>
          <Skills />
        </div>
      </section>

      <section className={styles.section} ref={projectsRef}>
        <h2>Projects</h2>
        <div style={{ width: '100%', height: '100%', paddingTop: '3.5rem' }}>
          <Projects />
        </div>
      </section>
    </div>
  )
}

export default Home
