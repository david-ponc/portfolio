import { useState, useEffect, useRef } from 'react'
import styles from 'styles/about.module.scss'

export default function AboutMe () {
  const firstTabRef = useRef(null)
  const [tabActive, setTabActive] = useState('Profile')

  useEffect(() => {
    const { textContent, offsetLeft, offsetWidth } = firstTabRef.current
    document.documentElement.style.setProperty('--bar-indicator-about-position', `${offsetLeft}px`)
    document.documentElement.style.setProperty('--bar-indicator-about-width', `${offsetWidth}px`)
    setTabActive(textContent)
  }, [])

  const changeTabActive = ({ target }) => {
    const { textContent, offsetLeft, offsetWidth } = target
    document.documentElement.style.setProperty('--bar-indicator-about-position', `${offsetLeft}px`)
    document.documentElement.style.setProperty('--bar-indicator-about-width', `${offsetWidth}px`)
    setTabActive(textContent)
  }

  return (
    <div className={styles['about-me-section']}>
      <div className={styles.avatar}>
        <img src="/images/about-me-gradient.png" alt="about me gradient"/>
        <img src="/images/me.png" alt="David Ponce Vargas"/>
      </div>
      <div className={styles.details}>
        <div className={styles.tabs}>
          <nav className={styles.tabs__links}>
            <span ref={firstTabRef} onClick={changeTabActive}>Profile</span>
            <span onClick={changeTabActive}>Education</span>
            <span onClick={changeTabActive}>Experience</span>
            <div className={styles['bar-indicator']} />
          </nav>
          <article className={styles.tabs__content}>
            {tabActive === 'Profile' && <ContentProfile />}
            {tabActive === 'Education' && <ContentEducation />}
            {tabActive === 'Experience' && <ContentExperience />}
          </article>
        </div>
      </div>
    </div>
  )
}

function ContentProfile () {
  return (
    <p>
      I am enthusiastic about web application development
      and interface design. Passionate about
      self-taught learning and someone self-critical with me
      work, constantly seeking to improve.
      I consider someone direct and responsible.
    </p>
  )
}

function ContentEducation () {
  return (
    <>
      <p>
        <strong>Lic. Ciencias de la Computación</strong> <br />
        Benemérita Universidad Autónoma de Puebla <br />
        2015 - Actual
      </p>
      <p>
        <strong>Técnico en Programación</strong> <br />
        Cetis No. 3 Juana Belén Gutiérrez de Mendoza <br />
        2012 - 2015
      </p>
    </>
  )
}

function ContentExperience () {
  return (
    <div className={styles.grid}>
      <p>
        <strong>Instituto de belleza</strong><br />
        UI&UX Designer<br />
        July 2020 - Unfinished
      </p>
      <p>
        <strong>SuMA Medio Ambiente</strong><br />
        Front-end Developer<br />
        January 2020 - July 2020
      </p>
      <p>
        <strong>TodoUni</strong><br />
        Fullstack Developer<br />
        January 2019 - June 2019
      </p>
      <p>
        <strong>Dotlify</strong><br />
        Fullstack Developer<br />
        July 2020 - Nov 2020
      </p>
    </div>
  )
}
