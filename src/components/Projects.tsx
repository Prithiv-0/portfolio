import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title:'Surgical Instrument Detection', role: 'Co-Author & ML Developer', tech:['Python','PyTorch','YOLO'], desc:'Research paper on real-time surgical instrument detection with 90% accuracy using custom dataset and state-of-the-art models.'},
  {title:'Scholar Weave', role: 'Back-End & Full-Stack Developer', tech:['Go','React','RDFLib'], desc:'Web app for academic discovery with interactive graph visualizations of research papers, authors, and topics.'},
  {title:'Raifetch', role: 'Sole Developer', tech:['Rust','Rayon','CLI'], desc:'High-performance, multi-threaded system info CLI tool written in Rust with configurable TOML-based layouts.'}
]

export default function Projects(){
  return (
    <section id="projects" className="projects container">
      <h2>Featured Projects</h2>
      <p className="section-subtitle">A selection of my most significant work. <a href="/projects" className="view-all-link">View all projects →</a></p>
      <div className="mt-6 projects-grid">
        {projects.map((p, i)=> (
          <motion.article key={i} className="card" whileHover={{y:-8, scale:1.02}} transition={{type:'spring', stiffness:260}}>
            <div className="card-body">
              <h3 style={{margin:0,fontSize:18}}>{p.title}</h3>
              <p className="card-role">{p.role}</p>
              <div style={{marginTop:8,display:'flex',gap:8,flexWrap:'wrap'}}>
                {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
              <p style={{marginTop:12,color:'var(--muted)'}}>{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
