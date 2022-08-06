import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';
import PohonAtas from '../resources/pohon-ranting1v2.png';
import PohonBawahKanan from '../resources/Pohon 1.png';
import KetuaBidang from '../resources/DivisiIT/Kepala Bidang_Viel.png';
import KetuaDivisiSocial from '../resources/DivisiIT/Kepala Divisi_Rafi Raihansyah.png';
import WakilKepalaDivisi from '../resources/DivisiIT/Wakil Kepala Divisi_Haikal Lazuardi Fadil.png';

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
      <div className="flex flex-col gap-y-10">
        <div className="KetuaBidang">
          {' '}
          <CardRole
            className="text-heading xs:px-10"
            firstRole="etua"
            secondRole="Biag"
            name="Steven Nataniel Kodyat"
            jurusan="Teknik Informatika '19"
            avatarSize={200}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body mt-1"
            classNameSecond="xs:indent-24 md:indent-24"
            isDarkMode={isDarkMode}
            foto={KetuaBidang}
            // center the container
            classNameAvatarContainer="h-56 w-56 overflow-hidden rounded-full mx-auto"
            // classNameAvatar="w-auto h-56 rounded-full object-top"
            classNameAvatar="translate-y-6"
            classNameNama="mt-3"
            classRole=""
          />
        </div>

        <div className="absolute top-10 xs:invisible lg:visible lg:-right-52">
          <img width={780} src={PohonAtas} alt="Pohon Atas" />
        </div>

        <div className="flex flex-col gap-y-10">
          <div className="Social & Site">
            <div className="flex items-center xs:gap-x-5 md:gap-x-10">
              {' '}
              <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
              <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
                Socia & Sie
              </RoleText>
              <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
            </div>
          </div>

          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Ketua"
                    secondRole="Divisi"
                    name="Rafi Raihansyah"
                    jurusan="Teknik Informatika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KetuaDivisiSocial}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Ketua Divisi"
                    name="Haikal Lazuardi Fadil"
                    jurusan="Teknik Informatika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakilKepalaDivisi}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-3"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 justify-center">
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
      </div>
      {/* <div className="absolute top-96 -right-96 pt-96 ">
        <img src={PohonBawahKanan} width={800} alt="Pohon Bawah Kanan" />
      </div> */}
    </div>
  );
};

export default OrganogramDivisiIT;
