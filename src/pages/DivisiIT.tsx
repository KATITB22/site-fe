import React from 'react';
import Footer from '../containers/Footer';
import OrganogramDivisiIT from '../containers/OrganogramDivisiIT';

const DivisiIT: React.FC = () => {
  return (
    <div>
      <OrganogramDivisiIT isDarkMode={false} />
      <Footer organogram isDarkMode={false} />
    </div>
  );
};

export default DivisiIT;
