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
        isDarkMode ? 'bg-[#2F4250]' : 'bg-[#FFFCF2]'
      } w-[100vw] xs:py-24 xs:px-20 sm:px-36 py-80`}
    >
      <div className="KetuaBidang">
        {' '}
        <CardRole
          className="text-heading xs:px-10"
          firstRole="etua"
          secondRole="Biag"
          name="John Doe"
          jurusan="IF 20"
          avatarSize={200}
          textRoleSize="text-heading"
          textNameSize="text-subHeading"
          textJurusanSize="text-body"
          classNameSecond="xs:indent-24 md:indent-24 pb-4"
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="Social & Site">
        <div className="flex items-center xs:pt-10 md:py-36 xs:gap-x-5 md:gap-x-10">
          {' '}
          <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
          <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
            Socia & Sie
          </RoleText>
          <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
        </div>
      </div>

      <div className="KetuaDanWakilDIvisi">
        <div className="grid grid-cols-2 xs:gap-x-14 ">
          {' '}
          <div className="">
            {' '}
            <CardRole
              firstRole="Ketua"
              secondRole="Divisi"
              name="Lorem Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="xs:text-subHeading md:text-heading "
              textNameSize="xs:text-body md:text-subHeading"
              textJurusanSize="xs:text-caption md:text-body"
              classNameSecond="xs:indent-10 md:indent-24"
              isDarkMode={isDarkMode}
              classRole="xs:mb-10 md:mb-0 mt:0"
              cardClassName="xs: md:pt-0"
            />
          </div>
          <div className="">
            {' '}
            <CardRole
              firstRole="Wakil Ketua"
              secondRole=" Divisi"
              name="Lorem Ipsum"
              jurusan="IF 20"
              avatarSize={180}
              textRoleSize="xs:text-subHeading md:text-heading xs:w-36 xs:text-left"
              textNameSize="xs:text-body md:text-subHeading"
              textJurusanSize="xs:text-caption md:text-body"
              classNameSecond="xs:indent-5 md:indent-0"
              isDarkMode={isDarkMode}
              classRole="xs:mb-10 xs:pr-14 xs: md:mb-0"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid xs:grid-cols-2 xs:gap-x-14 md:grid-cols-4 xs:py-18 md:py-36">
          <CardRole
            firstRole="Anggota"
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
            firstRole="Anggota"
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
            firstRole="Anggota"
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
            firstRole="Anggota"
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

export default OrganogramDivisiIT;
