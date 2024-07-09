import React from 'react';
import './faqSection.css';
import { FaqSectionComponentProps } from './FaqSection.interface';
import faqGraphic from '@images/faq_graphic.jpg';

export const FaqSection: React.FC<FaqSectionComponentProps> = () => {
  return (
    <section className="faq-section section-padding" id="faq_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-5 col-12">
            <img src={faqGraphic} className="img-fluid" alt="FAQs" />
          </div>
          <div className="col-lg-6 col-12 m-auto">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is Truth Keeper?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Truth Keeper is an advanced AI-powered system designed to identify and manage fake news. By leveraging state-of-the-art Large Language Models (LLMs), it analyzes unique data sequences across various topics and provides users with accurate, reliable information.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How does Truth Keeper ensure the accuracy of its results?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Truth Keeper processes input data through multiple layers of analysis and pattern recognition. It generates outputs with labels and accuracy percentages, which are further refined by additional algorithmic layers to ensure comprehensive and accurate information.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Is my data secure with Truth Keeper?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Yes, Truth Keeper prioritizes user privacy. It only processes information that users consent to share, ensuring that our approach is both transparent and ethical. The system is designed to respect free speech and does not classify opinions as fake news.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What services does Truth Keeper offer?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Truth Keeper offers a range of services, including:
                    <ul>
                      <li><strong>Interactive Verification Banner:</strong> A feature at the bottom of social media posts providing instant reliability results.</li>
                      <li><strong>Built-in Chat-Bot:</strong> A chat-bot dialog box on social media websites activated by selecting or copying text.</li>
                      <li><strong>Stand-alone Website:</strong> A professional interface that allows direct communication with the model.</li>
                      <li><strong>Chrome Extension:</strong> A browser extension that integrates our services directly into the user's browsing experience.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How can Truth Keeper help businesses?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Truth Keeper provides businesses with comprehensive solutions for verifying public statements on platforms like Twitter. This helps in protecting their reputation and financial integrity by identifying and managing misinformation effectively.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    What makes Truth Keeper different from other fake news detection tools?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Truth Keeper not only identifies fake news but also empowers users with tools to independently discern between truth and falsehood. It offers a unique combination of advanced AI technology, user-friendly interfaces, and comprehensive services tailored to various needs, making it a revolutionary solution in the fight against misinformation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
