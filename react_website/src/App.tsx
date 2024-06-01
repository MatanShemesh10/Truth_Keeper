import React from 'react';
import './App.css';
import { Navbar } from '@components/ui/navbar/Navbar';
import { HeroSection } from '@components/ui/heroSection/HeroSection'
import { FeaturedSection } from '@components/ui/featuredSection/FeaturedSection'
import { ExploreSection } from '@components/ui/exploreSection/ExploreSection'
import { TimelineSection } from '@components/ui/timelineSection/TimelineSection'
import { FaqSection } from '@components/ui/faqSection/FaqSection'
import { ContactSection } from '@components/ui/contactSection/ContactSection'
import { SiteFooter } from '@components/ui/siteFooter/SiteFooter'



const App: React.FC = () => {
  return (
    <div id="top">
      <main>
        <div id='sticky-wrapper' className='sticky-wrapper' style={{
          height: '167px'
        }}>

          <Navbar />
        </div>

        <HeroSection />
        <FeaturedSection />
        <ExploreSection />
        <TimelineSection />
        <FaqSection />
        <ContactSection />

      </main>

      <SiteFooter />

    </div>
  );
}

export default App;
