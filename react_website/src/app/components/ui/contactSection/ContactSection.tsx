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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.691763060141!2d34.78176821553078!3d32.08422252669081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7be4e6b1a9%3A0x426e9dcb0efbdf5!2sBen%20Gurion%20Blvd%2022%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1718376855157!5m2!1sen!2sil" 
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

              <p>22 Ben Gurion, Tel Aviv, ZIP 94109, Israel</p>

              <hr />
              

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">Phone</span>

                <a href="tel: +972-09-7695408" className="site-footer-link">
                  +972-09-7695408
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:info@TruthKeeper.com" className="site-footer-link">
                  info@TruthKeeper.com
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mx-auto">
              <h4 className="mb-3">Silicon Valley Office</h4>

              <p>1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>

              <hr />

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">Phone</span>

                <a href="tel: +1-650-253-0000" className="site-footer-link">
                +1-650-253-0000
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:info@TruthKeeper.com" className="site-footer-link">
                info@TruthKeeper.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    )
}