import React from 'react'
import { motion } from 'framer-motion'

export default function ContactPage(){
  return (
    <div className="contact-page">
      <motion.div
        className="container contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Let's Connect</h1>
        <p className="page-subtitle">I'm always open to collaborations, research discussions, and new opportunities. Reach out anytime.</p>

        <div className="contact-content">
          <motion.div className="contact-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:prithivalagirisamy@gmail.com" className="contact-link">prithivalagirisamy@gmail.com</a>
            </div>
            <div className="info-item">
              <h3>Social & Professional Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://www.linkedin.com/in/prithiv-alagirisamy-166488359/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn Profile
                </a>
                <a href="https://github.com/Prithiv-0" target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2>Send a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
                <input type="text" id="name" placeholder="Your name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', color: 'var(--text)' }} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                <input type="email" id="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', color: 'var(--text)' }} />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                <textarea id="message" rows={5} placeholder="Your message here..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', color: 'var(--text)', fontFamily: 'inherit' }}></textarea>
              </div>
              <button type="submit" className="btn" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
