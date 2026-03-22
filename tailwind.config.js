/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:       '#0A0F1E',
        bg2:      '#0F172A',
        bg3:      '#1E293B',
        navy:     '#1E40AF',
        teal:     '#06B6D4',
        teal2:    '#0891B2',
        textpri:  '#E2E8F0',
        textsec:  '#94A3B8',
        textmut:  '#64748B',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'bounce-slow':'bounceSlow 2s infinite',
        'glow':       'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        bounceSlow:{ '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
        glow:      { '0%,100%': { boxShadow: '0 0 12px rgba(6,182,212,0.3)' }, '50%': { boxShadow: '0 0 28px rgba(6,182,212,0.6)' } },
      },
    },
  },
  plugins: [],
}
