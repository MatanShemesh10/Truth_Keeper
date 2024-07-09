import React from 'react';
import './timelineSection.css';
import { TimelineSectionComponentProps } from './TimelineSection.interface';

export const TimelineSection: React.FC<TimelineSectionComponentProps> = () => {
  return (
    <section className="timeline-section section-padding" id="timeline_section">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">How does it work?</h2>
          </div>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="timeline-container">
              <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                <div className="list-progress">
                  <div className="inner"></div>
                </div>

                <li>
                  <h4 className="text-white mb-3">Enter Your Data</h4>
                  <p className="text-white">Requested data is entered as input to the model. This can include various types of information such as text or other data formats that the model is designed to process.</p>
                  <div className="icon-holder">
                    <i className="bi-search"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Processing</h4>
                  <p className="text-white">The model processes the input data based on pre-trained knowledge. This involves multiple layers of data analysis and pattern recognition to understand and interpret the information.</p>
                  <div className="icon-holder">
                    <i className="bi-cpu"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Output Collection</h4>
                  <p className="text-white">The model generates output, providing a label and accuracy percentages. This output is the result of complex computations and statistical analysis performed by the model to ensure reliable results.</p>
                  <div className="icon-holder">
                    <i className="bi-box-arrow-down"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Analysis</h4>
                  <p className="text-white">The returned data is analyzed further by activating additional layers of algorithms. This step refines the results and ensures that the information is comprehensive and accurate.</p>
                  <div className="icon-holder">
                    <i className="bi-graph-up-arrow"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Return Results</h4>
                  <p className="text-white">The final results are then returned outside the system. These results are presented in an easy-to-understand format, providing actionable insights and valuable information to the user.</p>
                  <div className="icon-holder">
                    <i className="bi-check-circle"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <p className="text-white">
              Want to learn more?
              <a href="#contact_section" className="btn custom-btn custom-border-btn ms-3">Contact Us!</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
