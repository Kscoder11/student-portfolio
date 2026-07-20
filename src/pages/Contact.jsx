import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="about" style={{ flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="skills-title" style={{ marginBottom: '1rem' }}>Contact <span className="gradient-text">Me</span></h2>
      {submitted ? (
        <div className="skill-card" style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
          <h3>Thank you!</h3>
          <p>Your message has been received.</p>
          <button className="btn" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem', cursor: 'pointer' }}>Send Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="skill-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px', textAlign: 'left' }}>
          <input 
            type="text" name="name" placeholder="Your Name" 
            value={formData.name} onChange={handleChange} required 
            style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontFamily: 'inherit' }}
          />
          <input 
            type="email" name="email" placeholder="Your Email" 
            value={formData.email} onChange={handleChange} required 
            style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontFamily: 'inherit' }}
          />
          <textarea 
            name="message" placeholder="Your Message" rows="5"
            value={formData.message} onChange={handleChange} required 
            style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', resize: 'none', fontFamily: 'inherit' }}
          ></textarea>
          <button type="submit" className="btn" style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}>Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
