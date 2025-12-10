import React from 'react'
import { motion } from 'framer-motion'

export default function ResumePage(){
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
            <h2>Prithiv Alagirisamy</h2>
            <p className="contact-info">prithivalagirisamy@gmail.com | linkedin.com/in/prithiv-alagirisamy | github.com/Prithiv-0</p>

            <h3>Professional Summary</h3>
            <p>
              Bachelor of Technology student in Computer Science and Engineering with expertise in machine learning, systems programming, and full-stack development. Passionate about building high-performance systems, conducting research, and solving complex technical problems.
            </p>

            <h3>Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-item">
                <strong>Languages:</strong> Python, Rust, Go, C/C++, Java, SQL, JavaScript, HTML/CSS, Dart
              </div>
              <div className="skill-item">
                <strong>Frameworks:</strong> React, PyTorch, Flask, Tailwind CSS, Django
              </div>
              <div className="skill-item">
                <strong>Tools & Platforms:</strong> AWS, Azure, Git, Linux, Docker, Jupyter, VS Code
              </div>
            </div>

            <h3>Education</h3>
            <div className="education-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>Amrita Vishwa Vidyapeetham, Coimbatore</h4>
                <span className="date">2022 – Present</span>
              </div>
              <p className="degree">Bachelor of Technology in Computer Science and Engineering</p>
              <p>Relevant Coursework: Data Structures, Machine Learning, OOP, Operating Systems, Networks, DBMS, UI/UX Design</p>
            </div>

            <h3>Certifications</h3>
            <div className="cert-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>AWS Academy Cloud Foundations</h4>
                <span className="date">March 2025</span>
              </div>
              <p>Comprehensive knowledge of AWS services (EC2, S3, IAM, Lambda, RDS, CloudWatch) and cloud architecture principles.</p>
            </div>

            <h3>Experience & Projects</h3>
            <div className="project-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>Surgical Instrument Detection — Co-Author & ML Developer</h4>
                <span className="date">Dec 2024 – Present</span>
              </div>
              <p>Co-authoring research paper on real-time surgical instrument detection using deep learning. Built custom dataset of 1,500 annotated images. Benchmarked YOLO and RF-DETR models, achieving 90% detection accuracy.</p>
            </div>

            <div className="project-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>Scholar Weave — Back-End & Full-Stack Developer</h4>
                <span className="date">2025 – Present</span>
              </div>
              <p>Engineered Go-based microservices for academic research discovery. Designing RDF graph services using semantic web standards. Building React + Tailwind frontend with Cytoscape.js for interactive visualizations.</p>
            </div>

            <div className="project-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4>Raifetch — System Tool Developer</h4>
                <span className="date">2025</span>
              </div>
              <p>High-performance CLI tool written in Rust for Linux system information. Implemented multi-threaded data fetching using Rayon. Configurable via TOML with modular rendering system for ASCII art and image logos.</p>
            </div>
          </div>

          <div className="download-section">
            <a href="#" className="btn" onClick={() => alert('Resume download link will be added here')}>
              Download PDF
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
