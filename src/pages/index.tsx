import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import HowItWorks from '@/components/ HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
