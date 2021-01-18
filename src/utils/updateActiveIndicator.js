const PADDING = 256
export default function updateActiveIndicator (sections, links) {
  let { offsetTop: aboutMeTop } = sections.aboutMeRef.current
  let { offsetTop: skillsTop } = sections.skillsRef.current
  let { offsetTop: projectsTop } = sections.projectsRef.current
  aboutMeTop -= PADDING
  skillsTop -= PADDING
  projectsTop -= PADDING
  if (window.scrollY >= aboutMeTop && window.scrollY < skillsTop) {
    const { offsetLeft, offsetWidth } = links.aboutMeLinkRef.current
    document.documentElement.style.setProperty('--underscore-position', `${offsetLeft}px`)
    document.documentElement.style.setProperty('--underscore-width', `${offsetWidth}px`)
    document.documentElement.style.setProperty('--underscore-rotate', '-2deg')
  } else
  if (window.scrollY >= skillsTop && window.scrollY < projectsTop) {
    const { offsetLeft, offsetWidth } = links.skillsLinkRef.current
    document.documentElement.style.setProperty('--underscore-position', `${offsetLeft}px`)
    document.documentElement.style.setProperty('--underscore-width', `${offsetWidth}px`)
    document.documentElement.style.setProperty('--underscore-rotate', '0deg')
  } else
  if (window.scrollY >= projectsTop) {
    const { offsetLeft, offsetWidth } = links.projectsLinkRef.current
    document.documentElement.style.setProperty('--underscore-position', `${offsetLeft}px`)
    document.documentElement.style.setProperty('--underscore-width', `${offsetWidth}px`)
    document.documentElement.style.setProperty('--underscore-rotate', '2deg')
  }
}
