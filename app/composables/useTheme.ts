export function useTheme() {
  const isDark = useState('theme-dark', () => true)

  const applyTheme = (dark: boolean) => {
    if (!import.meta.client) return
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    isDark.value = dark
  }

  const initTheme = () => {
    if (!import.meta.client) return
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored === 'dark')
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  return {
    isDark,
    initTheme,
    toggleTheme,
    applyTheme,
  }
}
