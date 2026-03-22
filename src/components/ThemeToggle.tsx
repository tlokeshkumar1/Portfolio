import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light'
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark/light mode"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-bg3 border border-teal/30
                 flex items-center justify-center text-teal shadow-lg hover:border-teal/70
                 transition-all duration-200 hover:scale-110 hover:shadow-[0_0_16px_rgba(6,182,212,0.3)]"
    >
      {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  )
}
