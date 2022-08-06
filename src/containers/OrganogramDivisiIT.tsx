import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';
import PohonAtas from '../resources/pohon-ranting1v2.png';
import PohonBawahKanan from '../resources/Pohon 1.png';
import KetuaBidang from '../resources/DivisiIT/Kepala Bidang_Viel.png';
import WakilKetuaBidang from '../resources/DivisiIT/KAT_1 - Fabian Savero Diaz Pranoto.png'
import KetuaDivisiSocial from '../resources/DivisiIT/Kepala Divisi_Rafi Raihansyah.png';
import WakilKepalaDivisi from '../resources/DivisiIT/Wakil Kepala Divisi_Haikal Lazuardi Fadil.png';
import Social1 from '../resources/DivisiIT/FeliciaSutandijo - 13520050 Felicia Sutandijo.png';
import Social2 from '../resources/DivisiIT/foto_anca - 13520044 Adiyansa Prasetya Wicaksana.png';
import Social3 from '../resources/DivisiIT/13521093 - 16521147 Akbar Maulana Ridho.png';
import Social4 from '../resources/DivisiIT/1659602579247 - Arsa Izdihar Islam.png';
import Social5 from '../resources/DivisiIT/20210707_003849-removebg-preview-removebg-preview - Christopher Justine.png';
import Social6 from '../resources/DivisiIT/P1010153-removebg - 257_Muhammad Afief Abdurrahman.png';
import Social7 from '../resources/DivisiIT/profil - 13520117 Hafidz Nur Rahman Ghozali.png';
import Social8 from '../resources/DivisiIT/Claudia_Jahim - 13520076 Claudia.png';
import Social9 from '../resources/DivisiIT/malik.png';
import Content1 from 'src/resources/DivisiIT/gare - 13520029 Muhammad Garebaldhie Er Rahman.png';


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
      <div className="flex flex-col gap-y-20">
        <div className="flex justify-center gap-x-10">
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
          <CardRole
            className="text-heading xs:px-10"
            firstRole="Wakil etua"
            secondRole="Biag"
            name="Fabian Savero Diaz P."
            jurusan="Teknik Informatika '19"
            avatarSize={200}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body mt-1"
            classNameSecond="xs:indent-24 md:indent-24"
            isDarkMode={isDarkMode}
            foto={WakilKetuaBidang}
            // center the container
            classNameAvatarContainer="h-56 w-56 overflow-hidden rounded-full mx-auto"
            // classNameAvatar="w-auto h-56 rounded-full object-top"
            classNameAvatar="translate-y-1"
            classNameNama="mt-3"
            classRole=""
          />
        </div>

        <div className="absolute top-10 xs:invisible lg:visible lg:-right-52">
          <img width={780} src={PohonAtas} alt="Pohon Atas" />
        </div>

        <div className="flex flex-col gap-y-20">
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
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="UI/UX Designer"
                name="Felicia Sutandijo"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Adiyansa Prasetya"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social2}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-10 scale-[1.7]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Akbar Maulana Ridho"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social3}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Arsa Izdihar Islam"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social4}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Christopher Justine William"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social5}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Muhammad Afief Abdurrahman"
                jurusan="Teknik Fisika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social6}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-6 scale-[0.7]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Hafidz Nur Rahman Ghozali"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social7}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-9 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Claudia"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social8}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Malik Akbar Hashemi Rafsanjani"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social9}
                classNameAvatarContainer="h-44 w-auto overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.5]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
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
                    name="Namanya"
                    jurusan="Jurusannya"
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
                    name="Namanya"
                    jurusan="Jurusannya"
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
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Role"
                name="Namanya"
                jurusan="Jurusannya"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
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
