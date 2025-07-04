import React, { useEffect } from 'react';
import './About-us.css';
import reviewgeek from './images/review.png';
import idocscanner from './images/idoc.png';
import envato from './images/envato.png';

const AboutUs = () => {
  useEffect(() => {
    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all animatable elements
    document.querySelectorAll('.needs-item, .stat-item, .section-badge, .needs-header, .workflow-text')
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="trusted" className="trusted-section">
        <div className="trusted-content">
          <h3>Trusted by Leading Teams</h3>
          <p>Empowering 700+ organizations worldwide</p>
          
          <div className="company-logos">
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" />
            </div>
            <div className="logo-container">
              <img src={reviewgeek} alt="ReviewGeek" />
            </div>
            <div className="logo-container">
              <img src={idocscanner} alt="iDocScanner" />
            </div>
            <div className="logo-container">
              <img src={envato} alt="Envato" />
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-section integration-section">
        <div className="trusted-content">
          <h3>Seamless Integrations</h3>
          <p>Connect with your essential tools</p>
          
          <div className="company-logos">
            <div className="logo-container">
              <img src="https://work.postinolabs.com/saas/img/pages/onesignal.svg" alt="OneSignal" />
              <span>OneSignal</span>
            </div>
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" />
            </div>
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" />
            </div>
            <div className="logo-container">
              <img src="https://avatars.githubusercontent.com/u/739550?s=200&v=4" alt="Pusher" />
              <span>Pusher</span>
            </div>
          </div>
        </div>
      </div>

      <div className="split-section">
        <div className="split-container">
          <div className="split-left">
            <div className="section-badge">Solutions</div>
            <div className="needs-content">
              <div className="needs-header">
                <h3>Streamline Your <span className="highlight">Workflow</span></h3>
                <p>Optimize team collaboration and project delivery with our integrated management solution.</p>
              </div>
              <div className="needs-grid">
                <div className="needs-item">
                  <div className="needs-icon">
                    <span className="icon-circle">📊</span>
                  </div>
                  <div className="needs-text">
                    <h4>Project Tracking</h4>
                    <p>Real-time monitoring with customizable dashboards and metrics.</p>
                  </div>
                </div>
                <div className="needs-item">
                  <div className="needs-icon">
                    <span className="icon-circle">✓</span>
                  </div>
                  <div className="needs-text">
                    <h4>Task Management</h4>
                    <p>Streamlined task allocation and progress tracking system.</p>
                  </div>
                </div>
                <div className="needs-item">
                  <div className="needs-icon">
                    <span className="icon-circle">👥</span>
                  </div>
                  <div className="needs-text">
                    <h4>Team Collaboration</h4>
                    <p>Integrated communication and file sharing platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="split-right">
            <div className="section-badge">Analytics</div>
            <div className="workflow-content">
              <div className="workflow-text">
                <h3>Data-Driven <span className="highlight">Insights</span></h3>
                <p>Make informed decisions with comprehensive performance analytics.</p>
                <div className="workflow-stats">
                  <div className="stat-item">
                    <div className="stat-icon">
                      <span className="icon-circle">💰</span>
                    </div>
                    <div className="stat-content">
                      <h4>Financial Overview</h4>
                      <p>Track revenue and optimize resource allocation.</p>
                      <div className="stat-metrics">
                        <span className="metric">
                          <strong>+24%</strong> Growth
                        </span>
                        <span className="metric">
                          <strong>-12%</strong> Costs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <span className="icon-circle">📈</span>
                    </div>
                    <div className="stat-content">
                      <h4>Support Metrics</h4>
                      <p>Monitor and improve customer support efficiency.</p>
                      <div className="stat-metrics">
                        <span className="metric">
                          <strong>89%</strong> Resolution
                        </span>
                        <span className="metric">
                          <strong>2h</strong> Response
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <span className="icon-circle">📋</span>
                    </div>
                    <div className="stat-content">
                      <h4>Project Analytics</h4>
                      <p>Track delivery metrics and team performance.</p>
                      <div className="stat-metrics">
                        <span className="metric">
                          <strong>156</strong> Completed
                        </span>
                        <span className="metric">
                          <strong>95%</strong> On-Time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
