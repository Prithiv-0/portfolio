import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">My Work</h1>
        <p className="page-subtitle">A deep dive into my key projects, research, and learning journey.</p>

        <div className="projects-detailed">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              className="project-card-detailed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <h2>{project.title}</h2>
                <div className="project-meta">
                  <span className="role">{project.role}</span>
                  <span className="duration">{project.duration}</span>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <p className="project-summary">{project.summary}</p>

              <div className="project-image">
                <img src={project.image} alt={`${project.title} project visual`} />
              </div>

              <div className="project-section">
                <h3>The Problem & Goal</h3>
                <p>{project.problem}</p>
              </div>

              <div className="project-section">
                <h3>My Process & Contributions</h3>
                <ul className="process-list">
                  {project.process.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>Challenges & What I Learned</h3>
                <p>{project.learnings}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
