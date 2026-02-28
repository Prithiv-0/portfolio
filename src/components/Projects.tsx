import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Featured Projects</h2>
      <p className="section-subtitle">
        A selection of my most significant work. <Link to="/projects" className="view-all-link">View all projects →</Link>
      </p>
      <div className="projects-grid section-spacing-sm">
        {featuredProjects.map((project) => (
          <motion.article key={project.id} className="card" whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 260 }}>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-role">{project.role}</p>
              <div className="card-tech-list">
                {project.tech.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              <p className="card-description">{project.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
