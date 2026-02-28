import { motion } from 'framer-motion'
import {
  certifications,
  education,
  professionalSummary,
  profile,
  technicalSkills,
} from '../data/profile'
import { projects } from '../data/projects'

export default function ResumePage() {
  return (
    <div className="resume-page">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Resume</h1>
        <p className="page-subtitle">Download or view my resume below.</p>

        <motion.div 
          className="resume-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="resume-content">
            <h2>{profile.name}</h2>
            <p className="resume-contact-info">
              {profile.email} | linkedin.com/in/prithiv-alagirisamy | github.com/Prithiv-0
            </p>

            <h3>Professional Summary</h3>
            <p>{professionalSummary}</p>

            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill) => (
                <div key={skill.heading} className="skill-item">
                  <strong>{skill.heading}:</strong> {skill.value}
                </div>
              ))}
            </div>

            <h3>Education</h3>
            <div className="education-item">
              <div className="row-between baseline">
                <h4>{education.school}</h4>
                <span className="date">{education.duration}</span>
              </div>
              <p className="degree">{education.degree}</p>
              <p>Relevant Coursework: {education.coursework}</p>
            </div>

            <h3>Certifications</h3>
            {certifications.map((certification) => (
              <div key={certification.title} className="cert-item">
                <div className="row-between baseline">
                  <h4>{certification.title}</h4>
                  <span className="date">{certification.date.replace('Completed: ', '')}</span>
                </div>
                <p>{certification.details}</p>
              </div>
            ))}

            <h3>Experience & Projects</h3>
            {projects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="row-between baseline">
                  <h4>{project.title} — {project.role}</h4>
                  <span className="date">{project.duration}</span>
                </div>
                <p>{project.summary}</p>
              </div>
            ))}
          </div>

          <div className="download-section">
            <a href="/assets/Prithiv_Alagirisamy_Resume.pdf" className="btn" download>
              Download PDF
            </a>
            <p className="muted download-note">If the download does not start, right-click and open the link in a new tab.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
