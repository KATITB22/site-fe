import React from 'react';
import CardRole from '../components/CardRole';

const OrganogramSection: React.FC = () => {
  return (
    <div className="bg-[#2F4250] w-[100vw] xs:px-20 sm:px-36 py-14">
      <CardRole
        firstRole="Ketua"
        secondRole="Pelaksana"
        name="Lorep Ipsum"
        jurusan="IF 20"
      />
    </div>
  );
};

export default OrganogramSection;
