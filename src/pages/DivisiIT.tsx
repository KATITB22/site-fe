import React from 'react';
import Footer from '../containers/Footer';
import OrganogramDivisiIT from '../containers/OrganogramDivisiIT';
import OrganogramGraphics from '../components/OrganogramGraphics';

const DivisiIT: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <OrganogramGraphics />
      <OrganogramDivisiIT isDarkMode={false} />
      <Footer organogram isDarkMode={false} />
    </div>
  );
};

export default DivisiIT;
