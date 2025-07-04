import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../header/worksuite-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Worksuite Logo" className="footer-logo" />
          <p className="brand-description">
            Streamline your workflow and boost productivity with Worksuite's comprehensive project management solution.
          </p>
          <div className="social-links">
            <a href="https://web.facebook.com/worksuiteapp?_rdc=1&_rdr#" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://x.com/worksuiteapp" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/worksuiteapp/" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Github"><FaGithub /></a>
            <a href="http://youtube.com/channel/UCoqD9VJ4E1UHz3nE_noyKng" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/get-started">Get Started</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#trusted">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <FaEnvelope />
                <a href="mailto:company@example.com">company@example.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+91234567890">+91 1234567890</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>4868 Ben Street<br />Lansing, Michigan 48906</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Worksuite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
