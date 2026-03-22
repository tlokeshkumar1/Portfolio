import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import ThemeToggle  from './components/ThemeToggle'
import Hero          from './sections/Hero'
import About         from './sections/About'
import Skills        from './sections/Skills'
import Projects      from './sections/Projects'
import Experience    from './sections/Experience'
import Education     from './sections/Education'
import Certifications from './sections/Certifications'
import Contact       from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-textpri font-body">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  )
}
