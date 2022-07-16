import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';

const OrganogramSection: React.FC = () => {
  return (
    <div className="bg-[#2F4250] w-[100vw] xs:px-20 sm:px-36 py-14">
      <CardRole
        firstRole="Ketua"
        secondRole="Pelaksana"
        name="Lorep Ipsum"
        jurusan="IF 20"
      />
      <div className="grid grid-cols-3 gap-3 py-14">
        <div className="col-start-auto bg-[#F5ECCB] w-100 h-px mt-4 "></div>
        <RoleText className="text-heading text-center">Kesekjenan</RoleText>
        <div className="col-end-auto bg-[#F5ECCB] w-100 h-px mt-4"></div>
      </div>
    </div>
  );
};

export default OrganogramSection;
