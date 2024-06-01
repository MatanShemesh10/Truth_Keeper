import React, { useRef, useState } from 'react';

import './featuredSection.css';
import { FeaturedSectionComponentProps } from './FeaturedSection.interface';

import ServImage from '@images/serv.png';
import NewsImage from '@images/news.webp';

export const FeaturedSection: React.FC<FeaturedSectionComponentProps> = () => {


    return (
        <section className="featured-section">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-2">Our Services</h5>

                      <p className="mb-0">Truth Keeper is developing a cutting-edge system to detect and alert users about fake news on social networks. our technology empowers users to distinguish between true and false content. </p>
                    </div>

                    <span className="badge bg-design rounded-pill ms-auto">1</span>
                  </div>

                  <img src={ServImage} className="custom-block-image img-fluid" alt="" style={{
                    maxWidth: '50%',
                    height: 'auto',
                    display: 'block',
                    margin: '20px auto 0',
                  }} />
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="custom-block custom-block-overlay">
                <div className="d-flex flex-column h-100">
                  <img src={NewsImage} className="custom-block-image img-fluid" style={{
                    width: "auto",
                    height: '400px'
                  }} alt="" />

                  <div className="custom-block-overlay-text d-flex">
                    <div>
                      <h5 className="text-white mb-2">Overview</h5>

                      <p className="text-white">As social media usage soars, there is an urgent need for AI and advanced algorithms to identify and manage large-scale misinformation, a task too complex for manual handling.

                        Our services addresses this by developing mechanisms to protect the global community.</p>

                      <a href="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                    </div>

                    <span className="badge bg-finance rounded-pill ms-auto">2</span>
                  </div>

                  <div className="social-share d-flex">
                    <p className="text-white me-4">Share:</p>

                    <ul className="social-icon">
                      <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-twitter"></a>
                      </li>

                      <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-facebook"></a>
                      </li>

                      <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-pinterest"></a>
                      </li>
                    </ul>

                    <a href="#" className="custom-icon bi-bookmark ms-auto"></a>
                  </div>

                  <div className="section-overlay"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}