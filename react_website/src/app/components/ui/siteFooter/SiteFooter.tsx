import React, { useState } from 'react';
import './siteFooter.css';
import { SiteFooterComponentProps } from './SiteFooter.interface';
import logo_fotter from '@images/logo_fotter.png';
import faqGraphic from '@images/faq_graphic.jpg';

export const SiteFooter: React.FC<SiteFooterComponentProps> = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLanguageChange = (language: string) => {
    if (language === 'Hebrew' || language === 'Arabic') {
      setShowModal(true);
    }
  };

  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4 pb-2">
            <a className="navbar-brand mb-2" href="index.html">
              <img
                src={logo_fotter}
                className=""
                alt=""
                style={{ height: '150px', display: 'inline-flex' }}
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="site-footer-title mb-3">Resources</h6>
            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <a href="#hero_section" className="site-footer-link">Home</a>
              </li>
              <li className="site-footer-link-item">
                <a href="#timeline_section" className="site-footer-link">How it works</a>
              </li>
              <li className="site-footer-link-item">
                <a href="#faq_section" className="site-footer-link">FAQs</a>
              </li>
              <li className="site-footer-link-item">
                <a href="#contact_section" className="site-footer-link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
            <h6 className="site-footer-title mb-3">Information</h6>
            <p className="text-white d-flex mb-1">
              <a href="tel:305-240-9671" className="site-footer-link">
                +972-09-7695408
              </a>
            </p>
            <p className="text-white d-flex">
              <a href="mailto:info@company.com" className="site-footer-link">
                info@TruthKeeper.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">English</button></li>
                <li><button className="dropdown-item" type="button" onClick={() => handleLanguageChange('Hebrew')}>Hebrew</button></li>
                <li><button className="dropdown-item" type="button" onClick={() => handleLanguageChange('Arabic')}>Arabic</button></li>
              </ul>
            </div>
            <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
              Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Coming Soon!</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                This feature will be available soon!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
