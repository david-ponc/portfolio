import {
  SiCss3, SiExpo, SiHtml5, SiJavascript,
  SiMongodb, SiMysql, SiNextDotJs,
  SiNodeDotJs, SiPhp, SiPowershell, SiPython,
  SiReact, SiSass, SiSvelte, SiTypescript
} from 'react-icons/si'
import styles from 'styles/skills.module.scss'

export default function Skills () {
  return (
    <div className={styles.skills}>
      <img src="/images/skills-gradient.png" alt="skills gradient"/>
        <article className={styles['grid-skills']}>
          <span><SiHtml5 size={36} /></span>
          <span><SiCss3 size={36} /></span>
          <span><SiJavascript size={36} /></span>
          <span><SiTypescript size={36} /></span>
          <span><SiNodeDotJs size={36} /></span>
          <span><SiReact size={36} /></span>
          <span><SiSass size={36} /></span>
          <span><SiNextDotJs size={36} /></span>
          <span><SiSvelte size={36} /></span>
          <span><SiPhp size={36} /></span>
          <span><SiPython size={36} /></span>
          <span><SiPowershell size={36} /></span>
          <span><SiMongodb size={36} /></span>
          <span><SiMysql size={36} /></span>
        </article>
    </div>
  )
}
