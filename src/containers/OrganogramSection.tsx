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
    <div className="bg-[#2F4250] w-[100vw] xs:py-24 xs:px-20 sm:px-36 py-80">
      <div className="KetuaPelaksana">
        {' '}
        <CardRole
          className="text-heading xs:px-10"
          firstRole="etua"
          secondRole="elaksan"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={200}
          textRoleSize="text-heading"
          textNameSize="text-subHeading"
          textJurusanSize="text-body"
          classNameSecond="xs:indent-36 md:indent-36 pb-4"
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="Kesekjenan">
        <div className="flex items-center xs:py-10 md:py-36 xs:gap-x-5 md:gap-x-10">
          <div className="bg-[#F5ECCB] w-100 h-0.5 flex-grow"></div>
          <RoleText
            className="xs:text-subHeading md:text-heading flex-shrink "
            isDarkMode={isDarkMode}
          >
            esekjena
          </RoleText>
          <div className="bg-[#F5ECCB] w-100 h-0.5 flex-grow "></div>
        </div>
      </div>

      <div className="SekretarisDanWakil">
        <div className="grid grid-cols-2 xs:gap-x-14 xs:">
          {' '}
          <div className="">
            {' '}
            <CardRole
              firstRole="Sekretaris"
              secondRole="Jenderal"
              name="Lorem Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="xs:text-subHeading md:text-heading "
              textNameSize="xs:text-body md:text-subHeading"
              textJurusanSize="xs:text-caption md:text-body"
              classNameSecond="xs:indent-10 md:indent-24"
              isDarkMode={isDarkMode}
              classRole="xs:mb-10 md:mb-0"
            />
          </div>
          <div className="">
            {' '}
            <CardRole
              firstRole="Wakil Sekretaris"
              secondRole="Jenderal"
              name="Lorem Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="xs:text-subHeading md:text-heading"
              textNameSize="xs:text-body md:text-subHeading"
              textJurusanSize="xs:text-caption md:text-body"
              classNameSecond="xs:indent-1 md:-indent-24"
              isDarkMode={isDarkMode}
              classRole="xs:pb-4 md:mb-0"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid xs:grid-cols-2 xs:gap-x-14 md:grid-cols-4 xs:py-18 md:py-36">
          <CardRole
            firstRole="Sekretaris 1"
            name="Lorem Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="xs:text-subHeading md:text-heading"
            textNameSize="xs:text-body md:text-subHeading"
            textJurusanSize="xs:text-caption md:text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Sekretaris 2"
            name="Lorem Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="xs:text-subHeading md:text-heading"
            textNameSize="xs:text-body md:text-subHeading"
            textJurusanSize="xs:text-caption md:text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Bendahara 1"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="xs:text-subHeading md:text-heading"
            textNameSize="xs:text-body md:text-subHeading"
            textJurusanSize="xs:text-caption md:text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
          <CardRole
            firstRole="Bendahara 2"
            name="Lorep Ipsum"
            jurusan="IF 20"
            avatarSize={150}
            textRoleSize="xs:text-subHeading md:text-heading"
            textNameSize="xs:text-body md:text-subHeading"
            textJurusanSize="xs:text-caption md:text-body"
            classNameSecond=" pt-8"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganogramSection;
