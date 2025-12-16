import React from 'react';
import { Download, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{ paddingTop: '160px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blobs */}
      <div className="blob" style={{ top: '-10%', left: '-10%', width: '600px', height: '600px', background: '#bfdbfe', borderRadius: '50%' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '-5%', width: '500px', height: '500px', background: '#e9d5ff', borderRadius: '50%' }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: 0 }} // Prevent FOUC
        >
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 16px', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#3b82f6', 
            borderRadius: '999px', 
            fontWeight: 600, 
            fontSize: '0.875rem',
            marginBottom: '24px'
          }}>
            New: Support for Claude Opus 4.5
          </div>
          <h1>
            Your Companion for <br />
            <span className="gradient-text">Claude Code</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '500px' }}>
            Monitor your usage, track costs, and manage your API limits directly from your macOS menu bar. Beautiful, native, and always there when you need it.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
            <a href="https://github.com/qinscode/ccbuddy/releases/download/v1.0.1/CCBuddy-1.0.1.dmg" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem', whiteSpace: 'nowrap' }}>
              <Download size={20} />
              Download for macOS
            </a>
            <a href="https://github.com/qinscode/ccbuddy" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.125rem', whiteSpace: 'nowrap' }}>
              <Github size={20} />
              View on GitHub
            </a>
          </div>
          
          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
              v1.0.1
            </span>
            <span>•</span>
            <span>macOS 12+</span>
            <span>•</span>
            <span>Apple Silicon & Intel</span>
          </div>
        </motion.div>

        <motion.div 
          className="animate-float"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', opacity: 0 }} // Prevent FOUC
        >
          <div style={{ 
            position: 'relative', 
            zIndex: 10,
            transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src="/assets/main_ui.png" 
              alt="CCBuddy Main Interface" 
              style={{ 
                width: '100%', 
                maxWidth: '400px', 
                borderRadius: '16px', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255,255,255,0.5)'
              }} 
            />
            
            {/* Floating Badge */}
            <div className="glass-card" style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '-40px', 
              padding: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              transform: 'translateZ(20px)'
            }}>
              <div style={{ width: '40px', height: '40px', background: '#10b981', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span style={{ fontSize: '1.5rem' }}>$</span>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>This Month</div>
                <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>$1006.15</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
