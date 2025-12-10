import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header(){
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">PA</Link>
        <nav className="site-nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
          <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`}>Resume</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
