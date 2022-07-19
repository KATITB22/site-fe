import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';

interface OrganogramSectionProps {
  isDarkMode?: boolean;
}

const OrganogramSection: React.FC<OrganogramSectionProps> = ({
  isDarkMode,
}) => {
  return (
    <div className="bg-[#2F4250] w-[100vw] xs:px-20 sm:px-36 py-80">
      <div className="KetuaPelaksana">
        {' '}
        <CardRole
          className="text-heading "
          firstRole="Ketua"
          secondRole="Pelaksana"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={200}
          textRoleSize="text-heading"
          textNameSize="text-subHeading"
          textJurusanSize="text-body"
          classNameSecond="indent-24 pb-4"
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="Kesekjenan">
        <div className="flex items-center py-36 gap-x-10">
          <div className="bg-[#F5ECCB] w-100 h-0.5 flex-grow"></div>
          <RoleText
            className="text-heading flex-shrink "
            isDarkMode={isDarkMode}
          >
            Kesekjenan
          </RoleText>
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
              avatarSize={180}
              textRoleSize="text-heading"
              textNameSize="text-subHeading"
              textJurusanSize="text-body"
              classNameSecond="indent-24"
              isDarkMode={isDarkMode}
            />
          </div>
          <div className="">
            {' '}
            <CardRole
              firstRole="Wakil Sekretaris"
              secondRole="Jenderal"
              name="Lorep Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="text-heading"
              textNameSize="text-subHeading"
              textJurusanSize="text-body"
              classNameSecond="-indent-24"
              isDarkMode={isDarkMode}
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
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Sekretaris 2"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Bendahara 1"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Bendahara 2"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganogramSection;
