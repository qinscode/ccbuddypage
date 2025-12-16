import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <section id="showcase" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Beautifully designed for macOS</h2>
          <p>Every pixel crafted to feel right at home on your desktop.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '40px',
          alignItems: 'center'
        }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/assets/settings_general.png" 
              alt="General Settings" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Powerful Configuration</h3>
              <p>Choose between Pro and API modes, set refresh intervals, and more.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div>
              <img 
                src="/assets/settings_appearance.png" 
                alt="Appearance Settings" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              />
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '1.25rem' }}>Customizable Aesthetics</h4>
                <p style={{ fontSize: '1rem' }}>Fine-tune the glass effect and transparency.</p>
              </div>
            </div>

            <div>
              <img 
                src="/assets/settings_notifications.png" 
                alt="Notification Settings" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              />
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '1.25rem' }}>Smart Alerts</h4>
                <p style={{ fontSize: '1rem' }}>Get notified when you hit your budget limits.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
