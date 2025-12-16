import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'rgba(255, 255, 255, 0.3)', 
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.4)',
      padding: '60px 0',
      marginTop: '80px'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
               <img src="/assets/logo.png" alt="CCBuddy Logo" style={{ width: '24px', height: '24px' }} />
               <h3 style={{ fontSize: '1.25rem', margin: 0 }}>CCBuddy</h3>
            </div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} CCBuddy. All rights reserved.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://github.com/qinscode/ccbuddy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
