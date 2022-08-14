import React from 'react';
import CardRole from '../components/CardRole';
import RoleText from '../components/RoleText';

import KetuaKAT from '../resources/kat/Ketua_Manav Hardinata.png';

import SekretarisJenderal from '../resources/kat/Sekjen_Theodore.png';
import Wasekjen from '../resources/kat/Wasekjen_Priscilla Anastasya.png';
import Sekretaris1 from '../resources/kat/Sekre 1_Muhammad Arif.png';
import Sekretaris2 from '../resources/kat/Sekre 2_Dara Kusumawati.png';
import Bendahara1 from '../resources/kat/Bendahara Umum 1_Zahra Farzadila.png';
import Bendahara2 from '../resources/kat/Bendahara Umum 2_Yessi Afrianty.png';
import Perizinan from '../resources/kat/Perizinan_Fidela Marwa Huwaida.png';

import KepalaHR from '../resources/kat/HR_Kabid_Riri Raissa Syifa Nabilah.png';
import WakilHR from '../resources/kat/HR_Wakabid_M. Farhanulhakim.png';

import KetuaBidang from '../resources/DivisiIT/IT_Kabid_Viel.png';
import WakilKetuaBidang from '../resources/DivisiIT/IT_Wakabid_Fabian Savero Diaz Pranoto.png';
import KetuaDivisiSocial from '../resources/DivisiIT/SS_Kadiv_Rafi Raihansyah.png';
import WakilKepalaDivisi from '../resources/DivisiIT/SS_Wakadiv_Haikal Lazuardi Fadil.png';
import Content1 from '../resources/DivisiIT/CP_Wakadiv_Muhammad Garebaldhie Er Rahman.png';
import Content7 from '../resources/DivisiIT/CP_Kadiv_Widya Anugrah Putra.png';
import Event1 from '../resources/DivisiIT/EA_Kadiv_Jason Kanggara.png';
import Event15 from '../resources/DivisiIT/EA_Wakadiv_M Syahrul Surya Putra.png';

import KabidMamet from '../resources/kat/Mamet_Kabid_Achmad Daffa.png';
import WakabidMamet from '../resources/kat/Mamet_Wakabid_M. Nabiel.png';
import KordivKeamanan from '../resources/kat/Mamet_Keamanan_Athallah Rasendriya.png';
import KordivMedik from '../resources/kat/Mamet_Medik_Zafran Divac.png';
import KordivMentor from '../resources/kat/Mamet_Mentor_Muhammad Al-Ghazali.png';

import KabidAcara from '../resources/kat/Acara_Kabid_Muhammad Fathur Rozaq Qomar.png';
import WakabidAcara from '../resources/kat/Acara_Wakabid_Kevin Sean.png';
import KadivEO from '../resources/kat/EO_Kadiv_Rizky Maulana.png';
import WakadivEO from '../resources/kat/EO_Wakadiv_Nerfita Aurora.png';
import Koormancar from '../resources/kat/Mancar_Koor_Argya Rangga.png';
import Wakoormancar from '../resources/kat/Mancar_Wakoor_Liora Parulian.png';
import Sekremancar from '../resources/kat/Mancar_Sekre_Nooriliefa.png';
import Kadivseremonial from '../resources/kat/Seremonial_Kadiv_M. Fadlan.png';
import Wakadivseremonial from '../resources/kat/Seremonial_Wakadiv_Febby Athia.png';

import Kabidfundraising from '../resources/kat/Fundraising_Kabid_Vincentia Viona.png';
import Wakabidfundraising from '../resources/kat/Fundraising_Wakabid_Zefania Angeliqa.png';
import KadivEnterpreneur from '../resources/kat/Entre_Kadiv_Tiara Azka Adisa.png';
import WakadivEnterpreneur from '../resources/kat/Entre_Wakadiv_Maulika Tazkia Bressili.png';
import KadivSponsor from '../resources/kat/Sponsor_Kadiv_Salsabillah Widya Putri.png';
import WakadivSponsor from '../resources/kat/Sponsor_Wakadiv_Ayu Wanda Rifdah.png';
import SekreSponsor from '../resources/kat/Sponsor_Sekre_Naurah Zahrani Firdaus.png';
import BendaharaSponsor from '../resources/kat/Sponsor_Bendahara_Hillary Rade.png';

import KabidKreatif from '../resources/kat/Kreatif_Kabid_Ken Aini.png';
import WakabidKreatif from '../resources/kat/Kreatif_Wakabid_Nila Eleora.png';
import KadivDocum from '../resources/kat/Dokum_Kadiv_Lemuel Dawson.png';
import WakadivDocum from '../resources/kat/Dokum_Wakadiv_Revi Deevan.png';
import KadivGrafis from '../resources/kat/Grafis_Kadiv_Mutia Ramadhani.png';
import WakadivGrafis from '../resources/kat/Grafis_Wakadiv_Nabila Salmadhiya.png';
import KasubdivAnimasi from '../resources/kat/Animasi_Kasubdiv_Kayla Faisal.png';
import KasubdivKonsep from '../resources/kat/Concept_Kasubsiv_Josephine Tirta.png';
import KasubdivLayout from '../resources/kat/Layout_Kasubdiv_Salsabilla Rista.png';
import KasubdivLogo from '../resources/kat/Logo_Kasubdiv_M. Reyhan.png';
import KasubdivVistok from '../resources/kat/Vistock_Kasubdiv_Daffa Rafi.png';
import WakasubdivKonsep from '../resources/kat/Concept_Wakasubdiv_Terra.png';
import WakasubdivVistok from '../resources/kat/Vistock_Wakasubdiv_Anggita Kemala.png';
import KadivKostum from '../resources/kat/Kostum_Kadiv_Najla Fairuz.png';
import WakadivKostum from '../resources/kat/Kostum_Wakadiv_Saskia Nada.png';
import KadivMusik from '../resources/kat/Musik_Kadiv_Theresna.png';
import WakadivMusik from '../resources/kat/Musik_Wakadiv_Leo Agung.png';
import KadivPerform from '../resources/kat/Perform_Kadiv_Orvala Zeva Syakira.png';
import WakadivPerform from '../resources/kat/Perform_Wakadiv_Vania Ardelia Putri.png';
import KadivProperty from '../resources/kat/Properti_Kadiv_Jasmine Amelia.png';
import WakadivProperty from '../resources/kat/Properti_Wakadiv_Tia Halida.png';
import SekreProperty from '../resources/kat/Properti_Sekre_Nadiyah.png';
import KadivPublikasi from '../resources/kat/Publikasi_Kadiv_Angelica Ratih.png';
import WakadivPublikasi from '../resources/kat/Publikasi_Wakadiv_Ajda.png';
import KasubdivTiktok from '../resources/kat/Tiktok_Kasubdiv_Tristan.png';
import KasubdivTwitter from '../resources/kat/Twitter_Kasubdiv_Tsasyshaum.png';
import KasubdivIG from '../resources/kat/IG_Kasubdiv_Annah Sasqia.png';
import WakasubdivIG from '../resources/kat/IG_Wakasubdiv_Sabrina Sopyan.png';

import Kabidohu from '../resources/kat/OHU_Kabid_Rifca.png';
import Wakabidohu from '../resources/kat/OHU_Wakabid_Reynaldi.png';
import KadivArtistik from '../resources/kat/Artistik_Kadiv_Azzidny Amin.png';
import WakadivArtistik from '../resources/kat/Artistik_Wakadiv_Sulamit Sihombing.png';
import KadivExhib from '../resources/kat/Exhib_Kadiv_Raihan Yoga Pratama Kisworo.png';
import WakadivExhib from '../resources/kat/Exhib_Wakadiv_Risna Alifia Latifah Wirantika.png';
import KadivManaj from '../resources/kat/Manaj_Kadiv_Luqman.png';
import WakadivManaj from '../resources/kat/Manaj_Wakadiv_Novia Masni.png';
import KadivShow from '../resources/kat/Show_Kadiv_Annisa Rahmaniyah.png';
import WakadivShow from '../resources/kat/Show_Wakadiv_Shavira Aulina.png';

import KabidOP from '../resources/kat/Op_Kabid_Vincent Siswaji.png';
import WakabidOP from '../resources/kat/Op_Wakabid_Samuel Krismawan.png';
import KadivAkomtrams from '../resources/kat/Akomtrans_Kadiv_Cakrawala.png';
import WakadivAkomtrams from '../resources/kat/Akomtrans_Wakadiv_Achmad Ghazi.png';
import KadivLive from '../resources/kat/Live_Kadiv_Rifqi Naufal.png';
import WakadivLive1 from '../resources/kat/Live_Wakadiv 1_Hilda.png';
import WakadivLive2 from '../resources/kat/Live_Wakadiv 2_Zayd.png';
import KadivLogistik from '../resources/kat/Logistik_Kadiv_Peregrinus.png';
import WakadivLogistik from '../resources/kat/Logistik_Wakadiv_James.png';
import KadivProduksi from '../resources/kat/Produksi_Kadiv_Jesslyn.png';
import WakadivProduksi from '../resources/kat/Produksi_Wakadiv_Talitha.png';

import KabidRelasi from '../resources/kat/Relasi_Kabid_Raden Ajeng.png';
import WakabidRelasi from '../resources/kat/Relasi_Wakabid_Rayhan.png';
import KadivEkskam from '../resources/kat/Ekskam_Kadiv_I Komang.png';
import WakadivEkskam from '../resources/kat/Ekskam_Wakadiv_Syahidah.png';
import KadivInkam from '../resources/kat/Inkam_Kadiv_I Dewa Ayu.png';
import WakadivInkam from '../resources/kat/Inkam_Wakadiv_Anindya.png';

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
            secondRole="Pelaksana"
            name="Manav Hardinata Jamaddhikha Napitupulu"
            jurusan="Teknik Dirgantara '19"
            avatarSize={200}
            textRoleSize="text-heading"
            textNameSize="text-subHeading"
            textJurusanSize="text-body mt-1"
            classNameSecond="xs:indent-24 md:indent-24"
            isDarkMode={isDarkMode}
            foto={KetuaKAT}
            // center the container
            classNameAvatarContainer="h-56 w-56 overflow-hidden rounded-full mx-auto"
            // classNameAvatar="w-auto h-56 rounded-full object-top"
            classNameAvatar="translate-y-6"
            classNameNama="mt-3"
            classRole=""
          />
        </div>

        {/* <div className="absolute top-10 xs:invisible lg:visible lg:-right-52">
          <img width={780} src={PohonAtas} alt="Pohon Atas" />
        </div> */}

        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Kesekjenan
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Sekretaris"
                    secondRole="Jenderal"
                    name="Theodore Maximillan Jonathan"
                    jurusan="Teknik Elektro '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={SekretarisJenderal}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Sekretaris Jenderal"
                    name="Priscilla Anastasya Adhi Surya"
                    jurusan="Teknik Sipil '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Wasekjen}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6 scale-[0.9]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Sekretaris 1"
                secondRole=""
                name="Muhammad Arif Palgunadi"
                jurusan="Teknik Industri '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Sekretaris1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Sekretaris 2"
                secondRole=""
                name="Dara Kusumawati"
                jurusan="Teknik Industri '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Sekretaris2}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Bendahara 1"
                secondRole=""
                name="Zahra Farzadila"
                jurusan="Teknik Sipil '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Bendahara1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Bendahara 2"
                secondRole=""
                name="Yessi Afrianty Siahaan"
                jurusan="Manajemen Bisnis '23"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Bendahara2}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Perizinan"
                secondRole=""
                name="Fidela Marwa Huwaida"
                jurusan="Perencanaan Wilayah dan Kota '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Perizinan}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-5 scale-[1.1]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Human Resource
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Riri Raissa Syifa"
                    jurusan="Teknik Fisika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KepalaHR}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-7"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="M. Farhanulhakim"
                    jurusan="Teknik Fisika '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakilHR}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-2 scale-[1]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              IT
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Steven Nataniel Kodyat"
                    jurusan="Teknik Informatika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KetuaBidang}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-10"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Fabian Savero Diaz Pranoto"
                    jurusan="Teknik Informatika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakilKetuaBidang}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-3 scale-[0.9]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Social & Site"
                name="Rafi Raihansyah"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KetuaDivisiSocial}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-7 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Social & Site"
                name="Haikal Lazuardi Fadil"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakilKepalaDivisi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1]"
                classNameNama="mt-1"
              />{' '}
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Content & Publication"
                name="Widya Anugrah Putra"
                jurusan="Teknik Informatika '19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content7}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-8 scale-[0.8]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Content & Publication"
                name="M. Garebaldhie ER Rahman"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Content1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Ketua Divisi"
                secondRole="Event & Attendance"
                name="Jason Kanggara"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-8 scale-[1]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Ketua Divisi"
                secondRole="Event & Attendance"
                name="M. Syahrul Surya Putra"
                jurusan="Teknik Informatika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Event15}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Materi & Metode
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Achmad Daffa Muntashir"
                    jurusan="Teknik Fisika '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KabidMamet}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-6 scale-[1.5]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="M. Nabiel Indraprasta I."
                    jurusan="Teknik Telekomunikasi '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakabidMamet}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-10 scale-[1]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Koordinator"
                secondRole="Divisi Keamanan"
                name="Athallah Rasendriya"
                jurusan="Teknik Pertambangan '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KordivKeamanan}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[1.4]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Koordinator"
                secondRole="Divisi Medik"
                name="Zafran Divac Azzahra"
                jurusan="Sistem & Teknologi Informasi '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KordivMedik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-3 scale-[1.4]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Koordinator"
                secondRole="Divisi Mentor"
                name="Muhammad Al-Ghazali"
                jurusan="Teknik Lingkungan '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KordivMentor}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-4 scale-[1.4]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Acara
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Muhammad Fathur Rozaq Qomar"
                    jurusan="Teknik Sipil '19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KabidAcara}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-8"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Kevin Sean Hans Lopulalan"
                    jurusan="Matematika '20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakabidAcara}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6 scale-[1.1]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Event Organizer"
                name="Rizky Maulana Akbar"
                jurusan="Astronomi '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivEO}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Event Organizer"
                name="Nerfita Aurora Veda Talitha"
                jurusan="Teknik SIpil '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivEO}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Koordinator"
                secondRole="Manajemen Acara"
                name="Argya Rangga Wicaksono"
                jurusan="Astronomi '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Koormancar}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Koordinator"
                secondRole="Manajemen Acara"
                name="Liora Parulian Bitya Joanna"
                jurusan="Teknik Sipil '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Wakoormancar}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-4 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Sekretaris"
                secondRole="Manajemen Acara"
                name="Nooriliefa Fajran Fahira Jastiningsih"
                jurusan="Rekayasa Hayati '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Sekremancar}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-6 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Seremonial"
                name="M. Fadlan Adhari"
                jurusan="Matematika '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Kadivseremonial}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Seremonial"
                name="Febby Athia Rahim"
                jurusan="Teknik Sipil'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={Wakadivseremonial}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.1]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Fundraising
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Vinccentia Viona"
                    jurusan="Manajemen Bisnis '22"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Kabidfundraising}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-3 scale-[0.7]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Zefania Angeliqa Setiawan"
                    jurusan="Manajemen Bisnis'23"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Wakabidfundraising}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-2 scale-[0.9]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Entrepreneurship"
                name="Tiara Azka Adisa"
                jurusan="Teknik Perminyakan '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivEnterpreneur}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Entrepreneurship"
                name="Maulika Tazkia Bressili"
                jurusan="Rekayasa Hayati '20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivEnterpreneur}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Sponsorship"
                name="Salsabiilah Widya Putri"
                jurusan="Manajemen Rekayasa'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivSponsor}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Sponsorship"
                name="Ayu Wanda Rifdah"
                jurusan="Perencanaan Wilayah dan Kota'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivSponsor}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Sekretaris "
                secondRole="Sponsorship"
                name="Naurah Zahrani Firdaus"
                jurusan="Farmasi'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={SekreSponsor}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-6 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Bendahara"
                secondRole="Sponsorship"
                name="Hillary Rade Mora Berutu"
                jurusan="Teknik Sipil'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={BendaharaSponsor}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Kreatif
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Ken Aini"
                    jurusan="Desain Interior'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KabidKreatif}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-0"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Nila Eleora Putri Sianturi"
                    jurusan="Desain Komunikasi Visual'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakabidKreatif}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-1 scale-[1]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Dokumentasi"
                name="Lemuel Dawson"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivDocum}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-1 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Dokumentasi"
                name="Revi Deevan"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivDocum}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Grafis"
                name="Mutia Ramadhani Aziz"
                jurusan="Desain Interior'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivGrafis}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Grafis"
                name="Nabila Salmadhiya"
                jurusan="Desain Interior'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivGrafis}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-5 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi "
                secondRole="Animasi"
                name="Kayla Faisal"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivAnimasi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi "
                secondRole="Concept"
                name="Josephine Tirta"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivKonsep}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi "
                secondRole="Layout"
                name="Salsabilla Rista Putri"
                jurusan="Desain Interior'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivLayout}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi "
                secondRole="Logo"
                name="M. Reyhan K.L."
                jurusan="Desain Produk'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivLogo}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-10 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi "
                secondRole="Vistock"
                name="Daffa Rafi Dahana"
                jurusan="Fesain Produk'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivVistok}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Subdivisi"
                secondRole="Concept"
                name="Terra D. Soegijoko"
                jurusan="Seni Rupa'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakasubdivKonsep}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Subdivisi "
                secondRole="Vistock"
                name="Anggita Kemala Dewi"
                jurusan="Desain Interior'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakasubdivVistok}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.0]"
                classNameNama="mt-1"
              />{' '}
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Kostum"
                name="Najla Fairuz Zahira"
                jurusan="Kriya'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivKostum}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Kostum"
                name="Saskia Nada Fadilla"
                jurusan="Kriya'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivKostum}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Musik"
                name="Theresna Zahra Sembiring"
                jurusan="Arsitektur'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivMusik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Musik"
                name="Leo Agung Bayu Panuntun"
                jurusan="Teknik Kimia'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivMusik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi "
                secondRole="Perform"
                name="Orvala Zeva Syakira"
                jurusan="Kriya'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivPerform}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-4 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi "
                secondRole="Perform"
                name="Vania Ardelia Putri"
                jurusan="Kriya'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivPerform}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-2 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Properti"
                name="Jasmine Amelia Putri Andreani"
                jurusan="Desain Produk'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivProperty}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Properti"
                name="Tia Halida Muntaha"
                jurusan="Desain Produk'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivProperty}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-7 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Sekretaris"
                secondRole="Properti"
                name="Nadiyah Khairiyah S"
                jurusan="Desain Produk'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={SekreProperty}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-8 scale-[1.7]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Publikasi"
                name="Angelica Ratih Rahardjo"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivPublikasi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Publikasi"
                name="Ajda Sekaralifya"
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivPublikasi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-16 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi"
                secondRole="Tiktok"
                name="Tristan Nabiel W."
                jurusan="Desain Komunikasi Visual'21"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivTiktok}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi"
                secondRole="Twitter"
                name="Tsasyshaum Alna N."
                jurusan="Desain Komunikasi Visual'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivTwitter}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.4]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Subdivisi"
                secondRole="Instagram"
                name="Annah Sasqia P."
                jurusan="Desain Interior'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KasubdivIG}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-2 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Subdivisi"
                secondRole="Instagram"
                name="Sabrina Sopyan"
                jurusan="Kriya'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakasubdivIG}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-9 scale-[1.4]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              OHU
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Rifca Soca Btarie"
                    jurusan="Rekayasa Hayati'19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Kabidohu}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6 scale-[1.5]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Reynaldi Adrian"
                    jurusan="Desain Komunikasi Visual'19"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={Wakabidohu}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-4 scale-[1.2]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Artistik"
                name="Azzidny Amin"
                jurusan="Astronomi'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivArtistik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-5 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Artistik"
                name="Sulamit Sihombing"
                jurusan="Teknik Industri'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivArtistik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Exhibition"
                name="Raihan Yoga Pratama Kisworo"
                jurusan="Teknik Industri'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivExhib}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Exhibition"
                name="Risna Alifia Latifah Wirantika"
                jurusan="Teknik Industri'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivExhib}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Manajemen Acara"
                name="Luqman Ardiseno"
                jurusan="Teknik Fisika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivManaj}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Manajemen Acara"
                name="Novia Masni Dwi Putri"
                jurusan="Fisika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivManaj}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Show"
                name="Annisa Rahmaniyah"
                jurusan="Kriya'19"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivShow}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Show"
                name="Shavira Aulina Ananda Nugroho"
                jurusan="Arsitektur'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivShow}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-6 scale-[1.0]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Operasional
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Vincent Siswaji"
                    jurusan="Teknik Sipil'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KabidOP}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="-translate-y-2 scale-[1.2]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Samuel Krismawan"
                    jurusan="Teknik Pangan'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakabidOP}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-4 scale-[1.2]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Akomtrans"
                name="Cakrawala Krisna"
                jurusan="Teknik Industri'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivAkomtrams}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-1 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Akomtrans"
                name="Achmad Ghazi Ichsan"
                jurusan="Teknik Industri'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivAkomtrams}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Live Streaming"
                name="Rifqi Naufal Abdjul"
                jurusan="Teknik Informatika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivLive}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Live Streaming 1"
                name="Hilda Carissa Widelia"
                jurusan="Teknik Informatika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivLive1}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Live Streaming 2"
                name="Zayd Muhammad Kawakibi Zuhri"
                jurusan="Teknik Informatika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivLive2}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Logistik"
                name="Peregrinus Vieri Malwin Situmorang"
                jurusan="Teknik Mesin'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivLogistik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-0 scale-[1.3]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Logistik"
                name="James Christian"
                jurusan="Teknik Fisika'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivLogistik}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-7 scale-[0.9]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Produksi"
                name="Jesslyn Gracsella Rusli"
                jurusan="Aktuaria'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivProduksi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.3]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Produksi"
                name="Talitha Ardilla Haryanto"
                jurusan="Teknik Telekomunikasi'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivProduksi}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="translate-y-0 scale-[1.2]"
                classNameNama="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center xs:gap-x-5 md:gap-x-10">
            {' '}
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow"></div>
            <RoleText className="xs:text-subHeading md:text-heading flex-shrink">
              Relasi & Kolaborasi
            </RoleText>
            <div className="bg-[#231A51] w-100 h-0.5 flex-grow "></div>
          </div>
          <div>
            <div className="KetuaDanWakilDIvisi">
              <div className="flex justify-center md:gap-x-0">
                {' '}
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Kepala"
                    secondRole="Bidang"
                    name="Raden Ajeng Shalsyabilla"
                    jurusan="Teknik Fisika'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={KabidRelasi}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-4 scale-[1.2]"
                    classNameNama="mt-3"
                  />
                </div>
                <div className="">
                  {' '}
                  <CardRole
                    firstRole="Wakil"
                    secondRole="Kepala Bidang"
                    name="Rayhan Muhammad Farras"
                    jurusan="Manajemen Rekayasa'20"
                    avatarSize={180}
                    textRoleSize="xs:text-subHeading md:text-heading "
                    textNameSize="xs:text-body md:text-subHeading"
                    textJurusanSize="mt-1 xs:text-caption md:text-body"
                    classNameSecond="xs:indent-10 md:indent-24"
                    isDarkMode={isDarkMode}
                    classRole="xs:mb-0 md:mb-0 mt:0"
                    cardClassName="xs: md:pt-0"
                    foto={WakabidRelasi}
                    classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                    classNameAvatar="translate-y-6 scale-[1.2]"
                    classNameNama="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Ekstrakampus"
                name="I Komang Arya Widastra"
                jurusan="Teknik Perminyakan'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivEkskam}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Ekstrakampus"
                name="Syahidah Asma Amani Arifianto"
                jurusan="Teknik Kimia'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivEkskam}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-3 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Kepala Divisi"
                secondRole="Intrakampus"
                name="I Dewa Ayu Candradewi"
                jurusan="Teknik Kimia'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={KadivInkam}
                classNameAvatarContainer="h-44 w-44 overflow-hidden rounded-full mx-auto"
                classNameAvatar="-translate-y-1 scale-[1.0]"
                classNameNama="mt-1"
              />
              <CardRole
                firstRole="Wakil Kepala Divisi"
                secondRole="Intrakampus"
                name="Anindya Retno Pramesti"
                jurusan="Oseanografi'20"
                avatarSize={180}
                textRoleSize="xs:text-subHeading md:text-heading"
                textNameSize="xs:text-body md:text-subHeading"
                textJurusanSize="mt-1 xs:text-caption md:text-body"
                classNameSecond=" pt-0"
                isDarkMode={isDarkMode}
                classRole="xs:mb-0 md:mb-0 mt:0"
                cardClassName="xs: md:pt-0"
                foto={WakadivInkam}
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
