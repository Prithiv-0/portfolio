import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="container" style={{padding:'2.5rem 2rem'}}>
      <h2>Let's Connect</h2>
      <p className="muted">I'm always open to collaborations, research discussions, and new opportunities. Reach out anytime.</p>
      <div style={{marginTop:12,display:'flex',gap:12,flexWrap:'wrap'}}>
        <a className="btn" href="mailto:prithivalagirisamy@gmail.com">Email Me</a>
        <a className="btn-alt" href="https://linkedin.com/in/prithiv-alagirisamy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn-alt" href="https://github.com/Prithiv-0" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  )
}
