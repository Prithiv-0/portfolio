import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="about-page">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">About Me</h1>

        <motion.section className="about-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>Professional Summary</h2>
          <p>
            Bachelor of Technology student in Computer Science and Engineering with a strong foundation in machine learning, systems programming, and full-stack development. I am passionate not just about building software, but about understanding the "why" behind it. This portfolio showcases my key projects, from academic research to low-level system tools, and details my process for solving complex problems.
          </p>
        </motion.section>

        <motion.section className="about-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true }}>
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Programming Languages</h3>
              <p>Python, Rust, Go, C/C++, Java, SQL, HTML/CSS, JavaScript, Dart</p>
            </div>
            <div className="skill-group">
              <h3>Frameworks & Libraries</h3>
              <p>React, PyTorch, Flask, Tailwind CSS</p>
            </div>
            <div className="skill-group">
              <h3>Tools & Platforms</h3>
              <p>AWS, Azure, Git, Linux, VS Code, Jupyter</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="about-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
          <h2>Education</h2>
          <div className="education-item">
            <h3>Amrita Vishwa Vidyapeetham, Coimbatore</h3>
            <p className="duration">2022 – Present</p>
            <p className="degree">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="coursework">
              <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Machine Learning, Object Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, UI/UX Design
            </p>
          </div>
        </motion.section>

        <motion.section className="about-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
          <h2>Certifications</h2>
          <div className="cert-item">
            <h3>AWS Academy Cloud Foundations</h3>
            <p className="duration">Completed: March 2025</p>
            <p>Successfully completed the AWS Cloud Engineer course. Gained hands-on knowledge of key AWS services (EC2, S3, IAM, Lambda, RDS, CloudWatch) and foundational skills in cloud security, architecture, and pricing.</p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
