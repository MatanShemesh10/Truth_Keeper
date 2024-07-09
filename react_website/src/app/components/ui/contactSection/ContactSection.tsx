import React, { useRef, useState } from 'react';

import './contactSection.css';
import { ContactSectionComponentProps } from './ContactSection.interface';

import ServImage from '@images/serv.png';
import NewsImage from '@images/news.webp';

export const ContactSection: React.FC<ContactSectionComponentProps> = () => {


    return (
        <section className="contact-section section-padding section-bg" id="contact_section">
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-5">Get in touch</h2>
            </div>

            <div className="col-lg-5 col-12 mb-4 mb-lg-0">
              <iframe className="google-map" 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.863099173062!2d34.90968827658808!3d32.34238460606908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d16a555555555%3A0xeef2b9c4fa52e717!2sRuppin%20Academic%20Center!5e0!3m2!1sen!2sil!4v1718376855157!5m2!1sen!2sil" 
                      width="100%" 
                      height="250" 
                      style={{ border: '0' }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
              <h4 className="mb-3">Head Office</h4>

              <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>

              <hr />
              

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">Phone</span>

                <a href="tel: 305-240-9671" className="site-footer-link">
                  305-240-9671
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:info@company.com" className="site-footer-link">
                  info@company.com
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mx-auto">
              <h4 className="mb-3">Silicon Valley Office</h4>

              <p>Burj Park, Downtown Dubai, United Arab Emirates</p>

              <hr />

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">Phone</span>

                <a href="tel: 110-220-3400" className="site-footer-link">
                +972-09-7695408
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:info@company.com" className="site-footer-link">
                  info@TruthKeeper.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    )
}