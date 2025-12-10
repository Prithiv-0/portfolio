import React from 'react'

interface HeaderProps {
  onNavigate?: (page: 'home' | 'projects' | 'about') => void
}

export default function Header({ onNavigate }: HeaderProps){
  return (
    <header className="site-header">
      <div className="container header-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <a href="#hero" onClick={() => onNavigate?.('home')} style={{fontWeight:700,fontSize:18,cursor:'pointer',color:'white'}}>HOME</a>
        <nav className="site-nav">
          <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); onNavigate?.('about') }}>About</a>
          <a className="nav-link" href="#projects" onClick={(e) => { e.preventDefault(); onNavigate?.('projects') }}>Projects</a>
          <a className="nav-link" href="#contact" onClick={() => onNavigate?.('home')}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
