import React, { useState, useEffect } from 'react';
import { BarChart2, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px'
          }}>
            <img src="/assets/logo.png" alt="CCBuddy Logo" style={{ width: '40px', height: '40px' }} />
          </div>
          <span>CCBuddy</span>
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Features</a>
          <a href="#showcase" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Showcase</a>
          <a href="https://github.com/qinscode/ccbuddy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500, transition: 'color 0.2s' }}>
            GitHub
          </a>
          <a href="https://github.com/qinscode/ccbuddy/releases/download/v1.0.1/CCBuddy-1.0.1.dmg" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
