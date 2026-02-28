import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

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
              <a href={`mailto:${profile.email}`} className="contact-link">{profile.email}</a>
            </div>
            <div className="info-item">
              <h3>Social & Professional Links</h3>
              <div className="social-links-list">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn Profile
                </a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2>Send a Message</h2>
            <form className="stack-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your message here..." required />
              </div>
              <button type="submit" className="btn form-submit-btn">Send Message</button>

              {isSubmitted ? (
                <p className="form-success" role="status" aria-live="polite">
                  Thank you for your message. Please also email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="contact-link">
                    {profile.email}
                  </a>{' '}
                  so I can reply quickly.
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
