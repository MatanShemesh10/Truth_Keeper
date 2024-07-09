import React, { useState, useEffect } from 'react';
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
  const [isSticky, setIsSticky] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div id="top">
      <main>
        <div
          id='sticky-wrapper'
          className={`sticky-wrapper${isSticky ? ' is-sticky' : ''}`}
          style={{ height: '167px' }}
        >
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