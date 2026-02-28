import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AnimatedBg from './components/AnimatedBg'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnimatedBg />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
