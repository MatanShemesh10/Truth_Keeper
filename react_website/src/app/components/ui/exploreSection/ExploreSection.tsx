import React, { useRef, useState } from 'react';

import './exploreSection.css';
import { ExploreSectionComponentProps } from './ExploreSection.interface';

import UndrawRemoteDesignTeamImage from '@images/undraw_Remote_design_team_re_urdx.png'
import UndrawRedesignFeedbackImage from '@images/undraw_Redesign_feedback_re_jvm0.png'
import ColleaguesWorkingCozyOfficeImage from '@images/colleagues-working-cozy-office-medium-shot.png'
import UndrawGroupVideoImage from '@images/undraw_Group_video_re_btu7.png'
import UndrawPodcastAudienceImage from '@images/undraw_Podcast_audience_re_4i5q.png'
import undrawOnlineAdReOl62 from '@images/undraw_online_ad_re_ol62.png'
import undrawViralTweetGndb from '@images/undraw_viral_tweet_gndb.png'
import undrawFinanceReGnv2 from '@images/undraw_Finance_re_gnv2.png'
import businesswomanUsingTabletAnalysis from '@images/businesswoman-using-tablet-analysis.jpg'
import undrawComposeMusicReWpiw from '@images/undraw_Compose_music_re_wpiw.png'
import undraw_happy_music_g6wc from '@images/undraw_happy_music_g6wc.png'
import undrawGraduationReGthn from '@images/undraw_Graduation_re_gthn.png'
import undrawEducator from '@images/undraw_Educator_re_ju47.png'


export const ExploreSection: React.FC<ExploreSectionComponentProps> = () => {


    return (
    <section className="explore-section section-padding" id="section_2">
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
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Custom Integration</h5>
                            <p className="mb-0">Tailored analysis for each company to identify and monitor harmful publications.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">14</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Keyword Analysis</h5>
                            <p className="mb-0">Efficiently identifies relevant posts and provides comprehensive reports on content authenticity.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">75</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Reputation Defense</h5>
                            <p className="mb-0">Measures content authenticity and provides statistical data and relevant information to strategize effectively.</p>
                          </div>
                          <span className="badge bg-design rounded-pill ms-auto">100</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Easy Access</h5>
                            <p className="mb-0">Available on the Chrome Web Store, the extension provides quick and easy access to verification services.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Quick Results</h5>
                            <p className="mb-0">Simply enter the text, and the extension will quickly return the verification results.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">65</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Seamless Experience</h5>
                            <p className="mb-0">A dedicated Chrome extension allowing users to directly communicate with the model.</p>
                          </div>
                          <span className="badge bg-advertising rounded-pill ms-auto">50</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Direct Communication</h5>
                            <p className="mb-0">Users can directly communicate with the model on the official product website.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">30</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Comprehensive Information</h5>
                            <p className="mb-0">The website offers detailed information about our services and how we ensure information reliability.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">65</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">User-Friendly Interface</h5>
                            <p className="mb-0">The website provides a user-friendly interface for easy interaction with the model and company information.</p>
                          </div>
                          <span className="badge bg-finance rounded-pill ms-auto">50</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Instant Verification</h5>
                            <p className="mb-0">Integrated chatbot that allows users to check the credibility of posts directly through a chat interface.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">45</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Interactive and Efficient</h5>
                            <p className="mb-0">Users can copy and paste the content into the chatbot to receive a truthfulness label and score.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">45</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Seamless Integration</h5>
                            <p className="mb-0">The chatbot is seamlessly integrated into the network, providing quick and easy verification for any post.</p>
                          </div>
                          <span className="badge bg-music rounded-pill ms-auto">20</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabIndex={0}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Real-time Verification</h5>
                            <p className="mb-0">An interactive banner at the bottom of social media posts that provides a truthfulness label with accuracy percentages.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">80</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">User-Friendly</h5>
                            <p className="mb-0">Simple and easy to use, the banner helps users quickly verify the truthfulness of any post they encounter.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">75</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Instant Feedback</h5>
                            <p className="mb-0">Users can click the banner to see the accuracy label immediately, helping them decide the trustworthiness of the content.</p>
                          </div>
                          <span className="badge bg-education rounded-pill ms-auto">50</span>
                        </div>
                        <img src="path_to_image" className="custom-block-image img-fluid" alt="" />
                      </a>
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