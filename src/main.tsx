import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const applyInitialTheme = () => {
  const root = document.documentElement
  const storedTheme = localStorage.getItem('theme')
  const shouldUseDark =
    storedTheme === 'dark' ||
    (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

  root.classList.toggle('dark', shouldUseDark)
}

applyInitialTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
