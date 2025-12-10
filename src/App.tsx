import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import ProjectsPage from './components/ProjectsPage'
import AnimatedBg from './components/AnimatedBg'

export default function App(){
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'about'>('home')

  return (
    <div className="app-root">
      <AnimatedBg />
      <Header onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Projects />
            <Contact />
          </>
        )}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'about' && <About />}
      </main>
    </div>
  )
}
