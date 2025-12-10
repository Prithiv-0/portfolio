import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function HomePage(){
  return (
    <div>
      <Hero />
      
      <section id="about" className="container about-section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>About Me</h2>
          <p>
            Bachelor of Technology student in Computer Science and Engineering with a strong foundation in machine learning, systems programming, and full-stack development. I am passionate not just about building software, but about understanding the "why" behind it. This portfolio showcases my key projects, from academic research to low-level system tools, and details my process for solving complex problems.
          </p>

          <h3 className="mt-8">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-group">
              <h4>Programming Languages</h4>
              <p>Python, Rust, Go, C/C++, Java, SQL, HTML/CSS, JavaScript, Dart</p>
            </div>
            <div className="skill-group">
              <h4>Frameworks & Libraries</h4>
              <p>React, PyTorch, Flask, Tailwind CSS</p>
            </div>
            <div className="skill-group">
              <h4>Tools & Platforms</h4>
              <p>AWS, Azure, Git, Linux, VS Code, Jupyter</p>
            </div>
          </div>

          <h3 className="mt-8">Education</h3>
          <div className="education-item">
            <h4>Amrita Vishwa Vidyapeetham, Coimbatore</h4>
            <p className="duration">2022 – Present</p>
            <p className="degree">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="coursework">
              <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Machine Learning, Object Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, UI/UX Design
            </p>
          </div>

          <h3 className="mt-8">Certifications</h3>
          <div className="cert-item">
            <h4>AWS Academy Cloud Foundations</h4>
            <p className="duration">Completed: March 2025</p>
            <p>Successfully completed the AWS Cloud Engineer course. Gained hands-on knowledge of key AWS services (EC2, S3, IAM, Lambda, RDS, CloudWatch) and foundational skills in cloud security, architecture, and pricing.</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
