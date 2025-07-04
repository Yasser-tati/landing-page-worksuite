import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faProjectDiagram, faUserPlus, faTasks,
  faFileContract, faReceipt, faCreditCard 
} from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [activeBillingFeature, setActiveBillingFeature] = useState(null);

  const features = [
    {
      icon: faProjectDiagram,
      title: "Track Projects",
      description: "Keep a track of all your projects in the most simple way.",
      color: "blue",
      details: [
        "Real-time project tracking",
        "Custom project templates",
        "Progress visualization"
      ]
    },
    {
      icon: faUserPlus,
      title: "Add Members",
      description: "Add members to your projects and keep them in sync with the progress.",
      color: "purple",
      details: [
        "Team collaboration",
        "Role management",
        "Member permissions"
      ]
    },
    {
      icon: faTasks,
      title: "Assign Tasks",
      description: "Your website is fully responsive, it will work on any device, desktop, tablet and mobile.",
      color: "green",
      details: [
        "Task prioritization",
        "Deadline management",
        "Task dependencies"
      ]
    }
  ];

  const billingFeatures = [
    {
      icon: faFileContract,
      title: "Estimates",
      description: "Create estimates how much project can cost and send to your clients.",
      color: "pink",
      details: [
        "Cost estimation",
        "Client proposals",
        "Budget planning"
      ]
    },
    {
      icon: faReceipt,
      title: "Invoices",
      description: "Simple and professional invoices can be download in form of PDF.",
      color: "orange",
      details: [
        "PDF generation",
        "Professional templates",
        "Easy downloading"
      ]
    },
    {
      icon: faCreditCard,
      title: "Payments",
      description: "Track payments done by clients in the payment section.",
      color: "teal",
      details: [
        "Payment tracking",
        "Transaction history",
        "Payment status"
      ]
    }
  ];

  return (
    <>
      <section id="features" className="ws-worksuite-features">
        <div className="ws-features-blob"></div>
        <Container maxWidth="lg">
          <div className="ws-features-header">
            <Typography variant="h2" className="ws-features-title">
              Task Management
              <div className="ws-title-accent"></div>
            </Typography>
            <Typography variant="h5" className="ws-features-subtitle">
              Manage your projects and talent in one system for empowered teams, 
              satisfied clients, and increased profitability.
            </Typography>
          </div>

          <div className="ws-features-showcase">
            <div className="ws-features-list">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`ws-feature-item ${feature.color} ${activeFeature === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="ws-feature-content">
                    <div className="ws-feature-icon-wrap">
                      <FontAwesomeIcon icon={feature.icon} className="ws-feature-icon" />
                      <div className="ws-icon-glow"></div>
                    </div>
                    <div className="ws-feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <div className="ws-feature-details">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="ws-detail-item">
                          <span className="ws-detail-bullet"></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ws-feature-backdrop"></div>
                </div>
              ))}
            </div>

            <div className="ws-features-interaction">
              <div className="ws-interaction-area">
                <div className="ws-interaction-circle">
                  <img src="https://work.postinolabs.com/saas/img/svg/mock-2.svg" alt="Feature Illustration" className="ws-circle-image" />
                </div>
                <div className="ws-interaction-grid">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="ws-grid-dot"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ws-worksuite-features ws-billing-features">
        <div className="ws-features-blob ws-right-blob"></div>
        <Container maxWidth="lg">
          <div className="ws-features-header">
            <Typography variant="h2" className="ws-features-title">
              Billing Management
              <div className="ws-title-accent"></div>
            </Typography>
            <Typography variant="h5" className="ws-features-subtitle">
              Streamline your billing process with automated invoicing, estimates, and payment tracking.
            </Typography>
          </div>

          <div className="ws-features-showcase">
            <div className="ws-features-interaction">
              <div className="ws-interaction-area">
                <div className="ws-interaction-circle">
                  <img src="https://work.postinolabs.com/saas/img/svg/mock-banner.svg" alt="Billing Illustration" className="ws-circle-image" />
                </div>
                <div className="ws-interaction-grid">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="ws-grid-dot"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ws-features-list">
              {billingFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`ws-feature-item ${feature.color} ${activeBillingFeature === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveBillingFeature(index)}
                  onMouseLeave={() => setActiveBillingFeature(null)}
                >
                  <div className="ws-feature-content">
                    <div className="ws-feature-icon-wrap">
                      <FontAwesomeIcon icon={feature.icon} className="ws-feature-icon" />
                      <div className="ws-icon-glow"></div>
                    </div>
                    <div className="ws-feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <div className="ws-feature-details">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="ws-detail-item">
                          <span className="ws-detail-bullet"></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ws-feature-backdrop"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;
