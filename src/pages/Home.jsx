import React from 'react';
import Hero from '../components/Hero';
import FeaturedCraftsmen from '../components/FeaturedCraftsmen';
import Features from '../components/Features';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCraftsmen />
      <Features />
      <CtaSection />
    </>
  );
};

export default Home;
