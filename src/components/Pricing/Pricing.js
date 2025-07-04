import React, { useState } from 'react';
import './Pricing.css';
import { FaCheck, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73
  };

  const features = [
    'Max Active Employees',
    'File Storage',
    'Clients',
    'Employees',
    'Projects',
    'Attendance',
    'Tasks',
    'Estimates',
    'Invoices',
    'Payments',
    'Time Logs',
    'Tickets',
    'Events',
    'Notices',
    'Leaves',
    'Leads',
    'Holidays',
    'Products',
    'Expenses',
    'Contracts',
    'Reports',
    'Orders',
    'Knowledge Base',
    'Bank Account',
    'Messages',
    'Assets',
    'Biolinks',
    'Letter',
    'Payroll',
    'Performance',
    'Purchase',
    'QR Code',
    'Recruit',
    'Zoom',
    'Webhooks',
    'SMS',
    'Custom Domain'
  ];

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 50,
      annualPrice: 480, // 20% discount
      storage: '500 MB',
      employees: '50',
      restrictedFeatures: [
        'Assets',
        'Biolinks',
        'Letter',
        'Payroll',
        'Performance',
        'Purchase',
        'QR Code',
        'Recruit',
        'Zoom',
        'Webhooks',
        'SMS',
        'Custom Domain'
      ]
    },
    {
      name: 'Medium',
      monthlyPrice: 100,
      annualPrice: 960, // 20% discount
      storage: '2GB',
      employees: '100',
      restrictedFeatures: []
    },
    {
      name: 'Larger',
      monthlyPrice: 500,
      annualPrice: 4800, // 20% discount
      storage: '10GB',
      employees: '500',
      restrictedFeatures: []
    }
  ];

  const getPrice = (plan) => {
    const basePrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return (basePrice * exchangeRates[selectedCurrency]).toFixed(0);
  };

  const getPeriod = () => {
    return isAnnual ? '/year' : '/mo';
  };

  const getSavings = (plan) => {
    if (isAnnual) {
      const savings = (plan.monthlyPrice * 12 - plan.annualPrice).toFixed(0);
      return `Save $${savings}`;
    }
    return null;
  };

  const renderFeatures = (plan, features) => {
    const visibleFeatures = isExpanded ? features : features.slice(0, 15);

    return (
      <>
        {visibleFeatures.map((feature) => (
          <div key={feature} className="feature-item">
            <span>{feature}</span>
            {plan.restrictedFeatures.includes(feature) ? (
              <FaTimes className="icon-times" />
            ) : (
              <FaCheck className="icon-check" />
            )}
          </div>
        ))}
        
        {features.length > 15 && (
          <button 
            className="toggle-features-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Show Less <FaChevronUp className="chevron-icon" />
              </>
            ) : (
              <>
                Show More <FaChevronDown className="chevron-icon" />
              </>
            )}
          </button>
        )}
      </>
    );
  };

  return (
    <div id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2>Pick Your Plan</h2>
        <p>Choose the perfect plan for your business needs</p>
        
        <div className="currency-selector">
          {Object.keys(currencySymbols).map((currency) => (
            <button
              key={currency}
              className={`currency-btn ${selectedCurrency === currency ? 'active' : ''}`}
              onClick={() => setSelectedCurrency(currency)}
            >
              {currencySymbols[currency]} {currency}
            </button>
          ))}
        </div>

        <div className="pricing-toggle">
          <div className="switch-container">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <span className="slider"></span>
            </label>
            <span className={isAnnual ? 'active' : ''}>Annually</span>
          </div>
          {isAnnual && <div className="save-badge">Save 20%</div>}
        </div>
      </div>
      
      <div className="pricing-container">
        {plans.map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.name.toLowerCase()}`}>
            <div className="pricing-card-header">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">{currencySymbols[selectedCurrency]}</span>
                <span className="amount">{getPrice(plan)}</span>
                <span className="period">{getPeriod()}</span>
              </div>
              {getSavings(plan) && (
                <div className="savings">
                  {currencySymbols[selectedCurrency]}{(getSavings(plan).split('$')[1] * exchangeRates[selectedCurrency]).toFixed(0)} Off
                </div>
              )}
            </div>

            <div className="pricing-card-body">
              <div className="feature-item highlight">
                <span>Max Active Employees:</span>
                <strong>{plan.employees}</strong>
              </div>
              <div className="feature-item highlight">
                <span>File Storage:</span>
                <strong>{plan.storage}</strong>
              </div>
              
              <div className="features-list">
                {renderFeatures(plan, features.slice(2))}
              </div>
            </div>

            <div className="pricing-card-footer">
              <button className="select-plan-btn">Select Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
