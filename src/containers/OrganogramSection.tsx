import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';

const OrganogramSection: React.FC = () => {
  return (
    <div className="bg-[#2F4250] w-[100vw] xs:px-20 sm:px-36 py-80">
      <div className="KetuaPelaksana">
        {' '}
        <CardRole
          className="text-heading"
          firstRole="Ketua"
          secondRole="Pelaksana"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={350}
          textRoleSize="text-8xl"
          textNameSize="text-5xl"
          textJurusanSize="text-2xl"
          classNameSecond="indent-96"
        />
      </div>

      <div className="Kesekjenan">
        <div className="flex items-center py-36 gap-x-10">
          <div className="bg-[#F5ECCB] w-100 h-0.5 flex-grow"></div>
          <RoleText className="text-8xl flex-shrink">Kesekjenan</RoleText>
          <div className="bg-[#F5ECCB] w-100 h-0.5 flex-grow "></div>
        </div>
      </div>

      <div className="SekretarisDanWakil">
        <div className="grid grid-cols-2">
          {' '}
          <div className="">
            {' '}
            <CardRole
              firstRole="Sekretaris"
              secondRole="Jenderal"
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
              firstRole="Wakil Sekretaris"
              secondRole="Jenderal"
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
            firstRole="Sekretaris 1"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Sekretaris 2"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Bendahara 1"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={200}
            textRoleSize="text-5xl"
            textNameSize="text-3xl"
            textJurusanSize="text-2xl"
            classNameSecond="indent-64"
          />
          <CardRole
            firstRole="Bendahara 2"
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

export default OrganogramSection;
