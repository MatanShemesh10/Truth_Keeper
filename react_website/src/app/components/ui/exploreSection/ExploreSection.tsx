import React, { useRef, useState } from 'react';

import './exploreSection.css';
import { ExploreSectionComponentProps } from './ExploreSection.interface';

import Truth_Tracker_Custom_Integration from '@images/Truth_Tracker_Custom_Integration.jpg';
import Truth_Tracker_Keyword_Analysis from '@images/Truth_Tracker_Keyword_Analysis.jpg';
import Truth_Tracker_Reputation_Defense from '@images/Truth_Tracker_Reputation_Defense.jpg';
import Built_in_Chatbot_Instant_Verification from '@images/Built-in_Chatbot_Instant_Verification.jpg';
import Built_in_Chatbot_Interactive_and_Efficient from '@images/Built-in_Chatbot_Interactive_and_Efficient.jpg';
import Built_in_Chatbot_Seamless_Integration from '@images/Built-in_Chatbot_Seamless_Integration.jpg';
import Chrome_Extension_Easy_Access from '@images/Chrome_Extension_Easy_Access.jpg';
import Chrome_Extension_Quick_Results from '@images/Chrome_Extension_Quick_Results.jpg';
import Chrome_Extension_Seamless_Experience from '@images/Chrome_Extension_Seamless_Experience.jpg';
import Interactive_Verification_Banner_Real_time_Verification from '@images/Interactive_Verification_Banner_Real-time_Verification.jpg';
import Interactive_Verification_Banner_User_Friendly from '@images/Interactive_Verification_Banner_User-Friendly.jpg';
import Interactive_Verification_Banner_Instant_Feedback from '@images/Interactive_Verification_Banner_Instant_Feedback.jpg';
import Standalone_Website_Direct_Communication from '@images/Standalone_Website_Direct_Communication.jpg';
import Standalone_Website_Comprehensive_Information from '@images/Standalone_Website_Comprehensive_Information.jpg';
import Standalone_Website_User_Friendly_Interface from '@images/Standalone_Website_User_Friendly_Interface.jpg';



export const ExploreSection: React.FC<ExploreSectionComponentProps> = () => {


    return (
    <section className="explore-section section-padding" id="explore_section">
        <div className="container">
          <div className="row">

            <div className="col-12 text-center">
              <h2 className="mb-4">Browse Services</h2>
            </div>

          </div>
        </div>

        <div className="container-fluid">
        <div className="row">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Truth Tracker</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Chrome Extension</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Stand-alone Website</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Build In Chat-Bot</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Interactive Verification Banner</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Custom Integration</h5>
                            <p className="mb-0">Tailored analysis for each company to identify and monitor harmful publications.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">14</span>
                        </div>
                        <img src={Truth_Tracker_Custom_Integration} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Keyword Analysis</h5>
                            <p className="mb-0">Efficiently identifies relevant posts and provides comprehensive reports on content authenticity.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">75</span>
                        </div>
                        <img src={Truth_Tracker_Keyword_Analysis} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Reputation Defense</h5>
                            <p className="mb-0">Measures content authenticity and provides statistical data and relevant information to strategize effectively.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">100</span>
                        </div>
                        <img src={Truth_Tracker_Reputation_Defense} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Easy Access</h5>
                            <p className="mb-0">Available on the Chrome Web Store, the extension provides quick and easy access to verification services.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                        </div>
                        <img src={Chrome_Extension_Easy_Access} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Quick Results</h5>
                            <p className="mb-0">Simply enter the text, and the extension will quickly return the verification results.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">65</span>
                        </div>
                        <img src={Chrome_Extension_Quick_Results} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Seamless Experience</h5>
                            <p className="mb-0">A dedicated Chrome extension allowing users to directly communicate with the model.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">50</span>
                        </div>
                        <img src={Chrome_Extension_Seamless_Experience} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Direct Communication</h5>
                            <p className="mb-0">Users can directly communicate with the model on the official product website.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">30</span>
                        </div>
                        <img src={Standalone_Website_Direct_Communication} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Comprehensive Information</h5>
                            <p className="mb-0">The website offers detailed information about our services and how we ensure information reliability.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">65</span>
                        </div>
                        <img src={Standalone_Website_Comprehensive_Information} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">User-Friendly Interface</h5>
                            <p className="mb-0">The website provides a user-friendly interface for easy interaction with the model and company information.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">50</span>
                        </div>
                        <img src={Standalone_Website_User_Friendly_Interface} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Instant Verification</h5>
                            <p className="mb-0">Integrated chatbot that allows users to check the credibility of posts directly through a chat interface.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">45</span>
                        </div>
                        <img src={Built_in_Chatbot_Instant_Verification} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Interactive and Efficient</h5>
                            <p className="mb-0">Users can copy and paste the content into the chatbot to receive a truthfulness label and score.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">45</span>
                        </div>
                        <img src={Built_in_Chatbot_Interactive_and_Efficient} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Seamless Integration</h5>
                            <p className="mb-0">The chatbot is seamlessly integrated into the network, providing quick and easy verification for any post.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">20</span>
                        </div>
                        <img src={Built_in_Chatbot_Seamless_Integration} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Real-time Verification</h5>
                            <p className="mb-0">An interactive banner at the bottom of social media posts that provides a truthfulness label with accuracy percentages.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">80</span>
                        </div>
                        <img src={Interactive_Verification_Banner_Real_time_Verification} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">User-Friendly</h5>
                            <p className="mb-0">Simple and easy to use, the banner helps users quickly verify the truthfulness of any post they encounter.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">75</span>
                        </div>
                        <img src={Interactive_Verification_Banner_User_Friendly} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Instant Feedback</h5>
                            <p className="mb-0">Users can click the banner to see the accuracy label immediately, helping them decide the trustworthiness of the content.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">50</span>
                        </div>
                        <img src={Interactive_Verification_Banner_Instant_Feedback} className="custom-block-image img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
    )
}