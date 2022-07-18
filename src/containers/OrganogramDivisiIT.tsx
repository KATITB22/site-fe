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
          secondRole="Bidang"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={350}
          textRoleSize="text-8xl"
          textNameSize="text-5xl"
          textJurusanSize="text-2xl"
          classNameSecond="indent-96"
        />
      </div>

      <div className="Social & Site">
        <div className="flex items-center py-36 gap-x-10">
          <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
          <RoleText className="text-8xl flex-shrink">Social & Site</RoleText>
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
              avatarSize={250}
              textRoleSize="text-7xl"
              textNameSize="text-4xl"
              textJurusanSize="text-2xl"
              classNameSecond="indent-64"
            />
          </div>
          <div className="">
            {' '}
            <CardRole
              firstRole="Wakil Ketua"
              secondRole="Divisi"
              name="Lorep Ipsum"
              jurusan="IF 20"
              avatarSize={250}
              textRoleSize="text-7xl"
              textNameSize="text-4xl"
              textJurusanSize="text-2xl"
              classNameSecond="-indent-40"
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
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Anggota"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganogramDivisiIT;
