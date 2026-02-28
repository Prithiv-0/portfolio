import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import {
  certifications,
  education,
  professionalSummary,
  technicalSkills,
} from '../data/profile'

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section id="about" className="container about-section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>About Me</h2>
          <p>{professionalSummary}</p>

          <h3 className="section-heading">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill) => (
              <div key={skill.heading} className="skill-group">
                <h4>{skill.heading}</h4>
                <p>{skill.value}</p>
              </div>
            ))}
          </div>

          <h3 className="section-heading">Education</h3>
          <div className="education-item">
            <h4>{education.school}</h4>
            <p className="duration">{education.duration}</p>
            <p className="degree">{education.degree}</p>
            <p className="coursework">
              <strong>Relevant Coursework:</strong> {education.coursework}
            </p>
          </div>

          <h3 className="section-heading">Certifications</h3>
          {certifications.map((certification) => (
            <div key={certification.title} className="cert-item">
              <h4>{certification.title}</h4>
              <p className="duration">{certification.date}</p>
              <p>{certification.details}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <Projects />
    </div>
  )
}
