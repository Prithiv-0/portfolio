import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.h1 className="hero-title" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Prithiv Alagirisamy</motion.h1>
          <motion.p className="hero-sub" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.08}}>
            Bachelor of Technology in Computer Science & Engineering with a passion for machine learning, systems programming, and full-stack development. I build high-performance systems, research-grade ML models, and craft delightful user experiences.
          </motion.p>
          <motion.div className="hero-ctas" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.18}}>
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn-alt" href="#contact">Contact</a>
          </motion.div>
        </div>

        <div>
          <div className="profile-card">
            <img className="profile-img" src="/assets/images/profile.png" alt="Prithiv" />
            <div style={{marginTop:12}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:700}}>Prithiv Alagirisamy</div>
                  <div className="muted" style={{fontSize:12}}>B.Tech — Amrita Vishwa Vidyapeetham</div>
                </div>
              </div>
              <div style={{marginTop:10}} className="muted">prithivalagirisamy@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
