export default function fillSpace (content) {
  const viewportHeight = window.innerHeight
  const headerHeight = content.header.current?.offsetHeight
  const navbarHeight = content.navbar.current?.offsetHeight
  const freeSpace = viewportHeight - (headerHeight + navbarHeight)
  const freeSpaceDistributed = Math.round(freeSpace / 2)
  return freeSpaceDistributed
}
