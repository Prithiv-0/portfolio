import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {profile.name}
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Bachelor of Technology in Computer Science & Engineering with a passion for machine learning, systems programming, and full-stack development. I build high-performance systems, research-grade ML models, and craft delightful user experiences.
          </motion.p>
        </div>

        <div>
          <div className="profile-card">
            <img className="profile-img" src="/assets/images/profile.png" alt="Portrait of Prithiv Alagirisamy" />
            <div className="profile-details">
              <div className="profile-meta">
                <div>
                  <div className="profile-name">{profile.name}</div>
                  <div className="muted profile-school">B.Tech — {profile.institution}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
