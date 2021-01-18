const useInterObserver = ({ ref, callback, options }) => {
  const observer = new IntersectionObserver(
    ([e]) => setPinned(e.intersectionRatio < 1),
    { threshold: [1] }
  )
  observer.observe(ref.current)

  return {
    observer
  }
}

export default useInterObserver
