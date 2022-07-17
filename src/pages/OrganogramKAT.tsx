import React from 'react';
import Footer from '../containers/Footer';
import OrganogramSection from '../containers/OrganogramSection';

const OrganogramKAT: React.FC = () => {
  return (
    <div>
      <OrganogramSection />
      <Footer isDarkMode={true} />
    </div>
  );
};

export default OrganogramKAT;
