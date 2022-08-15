import React from 'react';
import Footer from '../containers/Footer';
import OrganogramSection from '../containers/OrganogramSection';

const OrganogramKAT: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <OrganogramSection isDarkMode={false} />
      <Footer isDarkMode={false} />
    </div>
  );
};

export default OrganogramKAT;
