export function useReveal() {
  onMounted(() => {
    if (!import.meta.client) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => {
      node.classList.add('reveal')
      observer.observe(node)
    })

    onBeforeUnmount(() => observer.disconnect())
  })
}
