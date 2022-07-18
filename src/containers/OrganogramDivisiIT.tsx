import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';

interface OrganogramDivisiITProps {
  isDarkMode?: boolean;
}

const OrganogramDivisiIT: React.FC<OrganogramDivisiITProps> = ({
  isDarkMode,
}) => {
  return (
    <div
      className={`${
        isDarkMode ? 'bg-[#2F4250' : 'bg-[#FFFCF2]'
      } w-[100vw] xs:px-20 sm:px-36 py-80`}
    >
      <div className="KetuaBidang">
        {' '}
        <CardRole
          className="text-heading"
          isDarkMode={isDarkMode}
          firstRole="Ketua"
          secondRole="Pelaksana"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={200}
          textRoleSize="text-heading"
          textNameSize="text-subHeading"
          textJurusanSize="text-body"
          classNameSecond="indent-36"
        />
      </div>

      <div className="Social & Site">
        <div className="flex items-center py-36 gap-x-10">
          <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
          <RoleText className="text-heading flex-shrink">Kesekjenan</RoleText>
          <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
        </div>
      </div>

      <div className="SekretarisDanWakil">
        <div className="grid grid-cols-2">
          {' '}
          <div className="">
            {' '}
            <CardRole
              firstRole="Ketua"
              secondRole="Divisi"
              name="Lorep Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="text-heading"
              textNameSize="text-subHeading"
              textJurusanSize="text-body"
              classNameSecond="indent-24"
            />
          </div>
          <div className="">
            {' '}
            <CardRole
              firstRole="Wakil Ketua"
              secondRole="Divisi"
              name="Lorep Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="text-heading"
              textNameSize="text-subHeading"
              textJurusanSize="text-body"
              classNameSecond="indent-24"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 py-36">
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond="indent-64 pt-8"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond="indent-64 pt-8"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond="indent-64 pt-8"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond="indent-64 pt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganogramDivisiIT;
