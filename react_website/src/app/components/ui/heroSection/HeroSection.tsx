import React, { useRef, useState } from 'react';

import './heroSection.css';
import { HeroSectionComponentProps } from './heroSection.interface';

export const HeroSection: React.FC<HeroSectionComponentProps> = () => {


    return (
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">

            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="text-white text-center">Try Truth Keeper Model</h2>

              <h6 className="text-center">Your shield against fake news.</h6>

              <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                <div className="input-group input-group-lg" style={{
                  height: '250px',
                  width: '900px',

                }}>
                  <span className="input-group-text bi-search" id="basic-addon1">

                  </span>

                  <input name="keyword" type="search" className="form-control" id="keyword" placeholder="Message Truth Keeper…" aria-label="Search" />
                </div>
                <button type="submit" className="form-control" style={{
                  height: '50px',
                  width: '300px',
                  display: 'block',
                  margin: '20px auto 0',
                }}>Send</button>

              </form>
            </div>

          </div>
        </div>
      </section>
    )
}