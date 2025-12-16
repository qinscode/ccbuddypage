import React from 'react';
import { Activity, CreditCard, Layout, Settings, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Activity size={24} />,
    title: "Real-time Monitoring",
    description: "Track your token usage and costs in real-time as you code. Never be surprised by a bill again."
  },
  {
    icon: <CreditCard size={24} />,
    title: "Flexible Billing",
    description: "Seamlessly switch between Pro (subscription) and API (pay-as-you-go) pricing models."
  },
  {
    icon: <Layout size={24} />,
    title: "Native Experience",
    description: "Designed to feel right at home on macOS. Supports light and dark modes with native vibrancy."
  },
  {
    icon: <Settings size={24} />,
    title: "Highly Customizable",
    description: "Adjust refresh intervals, display preferences, and notifications to suit your workflow."
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Access",
    description: "Always available in your menu bar. Check your stats with a single click or keyboard shortcut."
  },
  {
    icon: <Shield size={24} />,
    title: "Privacy First",
    description: "Your API keys are stored securely in the macOS Keychain. No data is sent to our servers."
  }
];

const Features = () => {
  return (
    <section id="features" className="section" style={{ background: 'rgba(255,255,255,0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Everything you need to stay in control</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            CCBuddy provides all the tools you need to monitor and manage your Claude Code usage effectively.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)', 
                color: '#3b82f6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{feature.title}</h3>
              <p style={{ fontSize: '1rem', margin: 0 }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
