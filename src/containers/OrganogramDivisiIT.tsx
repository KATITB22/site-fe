import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';
import KetuaBidang from '../resources/DivisiIT/IT_Kabid_Viel.png';
import WakilKetuaBidang from '../resources/DivisiIT/IT_Wakabid_Fabian Savero Diaz Pranoto.png';
import KetuaDivisiSocial from '../resources/DivisiIT/SS_Kadiv_Rafi Raihansyah.png';
import WakilKepalaDivisi from '../resources/DivisiIT/SS_Wakadiv_Haikal Lazuardi Fadil.png';
import Social1 from '../resources/DivisiIT/Felicia Sutandijo.png';
import Social2 from '../resources/DivisiIT/Adiyansa Prasetya.png';
import Social3 from '../resources/DivisiIT/Akbar Maulana Ridho.png';
import Social4 from '../resources/DivisiIT/Arsa Izdihar Islam.png';
import Social5 from '../resources/DivisiIT/Muhammad Afief Abdurrahman.png';
import Social6 from '../resources/DivisiIT/Hafidz Nur Rahman Ghozali.png';
import Social7 from '../resources/DivisiIT/Claudia.png';
import Social8 from '../resources/DivisiIT/Malik Akbar.png';
import Social9 from '../resources/DivisiIT/Fikri Khoiron Fadhila.png';
import Social10 from '../resources/DivisiIT/Christopher Justine William.png';
import Social11 from '../resources/DivisiIT/Rania Dwi Fadhilah.png';
import Social12 from '../resources/DivisiIT/Sarah Azka Arief.jpg';

import Content1 from '../resources/DivisiIT/CP_Wakadiv_Muhammad Garebaldhie Er Rahman.png';
import Content2 from '../resources/DivisiIT/Muhammad Firdaus.png';
import Content3 from '../resources/DivisiIT/Fatih Nararya.png';
import Content4 from '../resources/DivisiIT/Muhammad Tito Prakasa.png';
import Content5 from '../resources/DivisiIT/Habiburrohman.png';
import Content6 from '../resources/DivisiIT/Carlios Eryan.png';
import Content7 from '../resources/DivisiIT/CP_Kadiv_Widya Anugrah Putra.png';
import Content8 from '../resources/DivisiIT/Shafira Naya Aprisadianti.png';
import Content9 from '../resources/DivisiIT/Aulia Adila.png';
import Content10 from '../resources/DivisiIT/Januar Budi Ghifari.png';
import Content11 from '../resources/DivisiIT/Nadirah Rianty Suseno.png';
import Content12 from '../resources/DivisiIT/Muhammad Fikri Ranjabi.png';
import Content13 from '../resources/DivisiIT/Rizky Akbar Asmaran.png';

import Event1 from '../resources/DivisiIT/EA_Kadiv_Jason Kanggara.png';
import Event2 from '../resources/DivisiIT/Muhammad Irfan Fathoni.png';
import Event3 from '../resources/DivisiIT/Fajar Maulana Herawan.png';
import Event4 from '../resources/DivisiIT/Hanny Margaretha Aritonang.png';
import Event5 from '../resources/DivisiIT/Ilham Akbar.png';
import Event6 from '../resources/DivisiIT/Rania Sasi Kirana.png';
import Event7 from '../resources/DivisiIT/Aulia Mey Diva Annandya.png';
import Event8 from '../resources/DivisiIT/Rayhan Kinan Muhannad.png';
import Event9 from '../resources/DivisiIT/Zhafir Wisam Septiana.png';
import Event10 from '../resources/DivisiIT/Alif.png';
import Event11 from '../resources/DivisiIT/Razzan Daksana Yoni.png';
import Event12 from '../resources/DivisiIT/Abraham.png';
import Event13 from '../resources/DivisiIT/Nafi Mulyo Kusumo.png';
import Event14 from '../resources/DivisiIT/Chiquita Ahsanunnisa.png';
import Event15 from '../resources/DivisiIT/EA_Wakadiv_M Syahrul Surya Putra.png';
import Event16 from '../resources/DivisiIT/Gagas Praharsa Bahar.png';
import Event17 from '../resources/DivisiIT/Aira Thalca Avila Putra.png';

interface OrganogramDivisiITProps {
  isDarkMode?: boolean;
}

const OrganogramDivisiIT: React.FC<OrganogramDivisiITProps> = ({
  isDarkMode,
}) => {
  return (
    <div
      className={`${isDarkMode ? 'bg-[#2F4250]' : 'bg-[#FFFCF2]'
        } w-[100vw] xs:py-24 xs:px-20 sm:px-36 py-80`}
    >
      <div className="flex flex-col gap-y-20">
        <div className="flex xs:flex-col md:flex-row justify-center gap-x-10 gap-y-10">
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
            // classNameAvatar="w-44 h-56 rounded-full object-top"
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
            // classNameAvatar="w-44 h-56 rounded-full object-top"
            classNameAvatar="translate-y-1"
            classNameNama="mt-3"
            classRole=""
          />
        </div>

        {/* <div className="absolute top-10 xs:invisible lg:visible lg:-right-52">
          <img width={780} src={PohonAtas} alt="Pohon Atas" />
        </div> */}

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
                firstRole="Frontend Developer"
                name="Fikri Khoiron Fadhila"
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
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[0.8]"
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
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                foto={Social10}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1]"
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
                foto={Social5}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                foto={Social6}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                foto={Social7}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
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
                foto={Social8}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.5]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Rania Dwi Fadhilah"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social11}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Sarah Azka Arief"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Social12}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-6 scale-[1.5]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="">
            <div className="flex items-center xs:gap-x-0 md:gap-x-10">
              {' '}
              <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
              <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
                Content & Publication
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
                    name="Widya Anugrah Putra"
                    jurusan="Teknik Informatika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Content7}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-10 scale-[0.9]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Ketua Divisi"
                    name="M. Garebaldhie Er Rahman"
                    jurusan="Teknik Informatika '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Content1}
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
                firstRole="Backend Developer"
                name="Muhammad Firdaus"
                jurusan="Mikrobiologi '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content2}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Fatih Nararya Rashadyfa Ilhamsyah"
                jurusan="Teknik Informatika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content3}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[2.1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Fullstack Developer"
                name="Muhammad Tito Prakasa"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content4}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[1.3]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Habiburrohman"
                jurusan="Matematika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content5}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.4]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Carlios Eryan"
                jurusan="Teknik Fisika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content6}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-8 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Shafira Naya Aprisadianti"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content8}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-20 scale-[1.9]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Aulia Adila"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content9}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[0.7]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Januar Budi Ghifari"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content10}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="UI/UX Designer"
                name="Nadirah Rianty Suseno"
                jurusan="Arsitektur '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content11}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Muhammad Fikri Ranjabi"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content12}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-11 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Rizky Akbar Asmaran"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content13}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-8 scale-[1.7]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="Event & Attendance">
            <div className="flex items-center xs:gap-x-1 md:gap-x-10">
              {' '}
              <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
              <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
                Event & Attendance
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
                    name="Jason Kanggara"
                    jurusan="Teknik Informatika '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Event1}
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
                    name="M. Syahrul Surya Putra"
                    jurusan="Teknik Informatika '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Event15}
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
                firstRole="Frontend Developer"
                name="Muhammad Irfan Fathoni"
                jurusan="Teknik Perminyakan '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event2}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-9 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Fajar Maulana Herawan"
                jurusan="Teknik Informatika ‘21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event3}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-9 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Hanny Margaretha Aritonang"
                jurusan="Matematika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event4}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Mirekel Ilham Akbar"
                jurusan="Kimia '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event5}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[0.6]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Rania Sasi Kirana"
                jurusan="Sistem Teknologi Informasi '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event6}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-6 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Fullstack Developer"
                name="Rayhan Kinan Muhannad"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event8}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Zhafir Wisam Septiana"
                jurusan="Matematika'21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event9}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Alif Amirudin"
                jurusan="Manajemen Rekayasa '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event10}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Razzan Daksana Yoni"
                jurusan="Teknik Informatika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event11}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Abraham Megantoro Samudra"
                jurusan="Sistem Teknologi Informasi '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event12}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Nafi Mulyo Kusumo"
                jurusan="Teknik Fisika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event13}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Chiquita Ahsanunnisa"
                jurusan="Teknik Informatika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event14}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Aulia Mey Diva Annandya"
                jurusan="Teknik Informatika '21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event7}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-4 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Backend Developer"
                name="Gagas Praharsa Bahar"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event16}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[1.3]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Frontend Developer"
                name="Aira Thalca Avila Putra"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event17}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[1.0]"
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
