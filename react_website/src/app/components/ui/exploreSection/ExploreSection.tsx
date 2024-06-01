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
              <h2 className="mb-4">Browse Topics</h2>
            </div>

          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Design</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Marketing</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Finance</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Music</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Education</button>
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
                              <h5 className="mb-2">Our Services</h5>

                              <p className="mb-0">Topic Listing Template based on Bootstrap 5</p>
                            </div>

                            <span className="badge bg-design rounded-pill ms-auto">14</span>
                          </div>

                          <img src={UndrawRemoteDesignTeamImage} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graphic</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-design rounded-pill ms-auto">75</span>
                          </div>

                          <img src={UndrawRedesignFeedbackImage} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Logo Design</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-design rounded-pill ms-auto">100</span>
                          </div>

                          <img src={ColleaguesWorkingCozyOfficeImage} className="custom-block-image img-fluid" alt="" />
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
                              <h5 className="mb-2">Advertising</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                          </div>

                          <img src={undrawOnlineAdReOl62} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Video Content</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-advertising rounded-pill ms-auto">65</span>
                          </div>

                          <img src={UndrawGroupVideoImage} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Viral Tweet</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-advertising rounded-pill ms-auto">50</span>
                          </div>

                          <img src={undrawViralTweetGndb} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabIndex={0}>   <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Investment</h5>

                            <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                          </div>

                          <span className="badge bg-finance rounded-pill ms-auto">30</span>
                        </div>

                        <img src={undrawFinanceReGnv2} className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="custom-block custom-block-overlay">
                      <div className="d-flex flex-column h-100">
                        <img src={businesswomanUsingTabletAnalysis} className="custom-block-image img-fluid" alt="" />

                        <div className="custom-block-overlay-text d-flex">
                          <div>
                            <h5 className="text-white mb-2">Finance</h5>

                            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis</p>

                            <a href="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                          </div>

                          <span className="badge bg-finance rounded-pill ms-auto">25</span>
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

                <div className="tab-pane fade" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabIndex={0}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Composing Song</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-music rounded-pill ms-auto">45</span>
                          </div>

                          <img src={undrawComposeMusicReWpiw} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Online Music</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-music rounded-pill ms-auto">45</span>
                          </div>

                          <img src={undraw_happy_music_g6wc} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Podcast</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-music rounded-pill ms-auto">20</span>
                          </div>

                          <img src={UndrawPodcastAudienceImage} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="education-tab-pane" role="tabpanel" aria-labelledby="education-tab" tabIndex={0}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graduation</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-education rounded-pill ms-auto">80</span>
                          </div>

                          <img src={undrawGraduationReGthn} className="custom-block-image img-fluid" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Educator</h5>

                              <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-education rounded-pill ms-auto">75</span>
                          </div>

                          <img src={undrawEducator} className="custom-block-image img-fluid" alt="" />
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