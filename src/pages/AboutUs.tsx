import React from 'react';
import Credits from '../containers/Credits';
import Footer from '../containers/Footer';
import Hero from '../containers/Hero';
import Sejarah from '../containers/Sejarah';

const AboutUs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Sejarah />
      <Credits />
      <Footer landing embedded="not-available" />
    </div>
  );
};

export default AboutUs;
