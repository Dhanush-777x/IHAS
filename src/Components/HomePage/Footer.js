import React, {useState} from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/logo.png';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Feedback from './Feedback';

function Footer() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 500);
  return (
    <div className={`p-8 mt-40 transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <footer id='footerSection' className="footer-container mb-20">
                <div className="footer-content">

                    <img src={logo} alt="Logo" className="footer-logo" />

                    <h2 className="footer-heading">Integrated Health Accessible System</h2>
                    <div className="footer-links">
                        <a href="#Section1" className="footer-link">Home</a>
                        <a href="#Section2" className="footer-link">Features</a>
                        <a href="#Section1" className="footer-link">About</a>
                        <Feedback/>
                    </div>
                    <div className="footer-social-icons">
                        <a href="#Section1" className="footer-icon px-4"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#Section1" className="footer-icon px-4"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#Section1" className="footer-icon px-4"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer