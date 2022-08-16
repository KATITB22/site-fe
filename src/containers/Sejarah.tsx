import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Texts from '../components/Texts';
import TimelineWaveBottom from '../components/TimelineWaveBottom';
import TimelineWaveTop from '../components/TimelineWaveTop';
import { MotionTitle } from '../components/Title';
import { getTransition } from '../utils/transition';

const Sejarah: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-[3] -mt-56">
      <TimelineWaveTop width={1920} />
      <MotionTitle
        className="absolute top-24 xs:px-20 md:px-32 lg:px-32 xl:px-40 xxl:px-80 3xl:px-96"
        {...getTransition('left')}
      >
        ejara <br /> &emsp; OSK ITB
      </MotionTitle>
      <div className="flex flex-col bg-primaryYellow items-center justify-start xs:px-20 sm:px-36 pt-20 sm:pt-14">
        <motion.div {...getTransition('right')}>
          <Texts>
            <span className="font-alegreya color-primaryBlack text-subHeading">
              OSKM ITB sebagai Wadah Pergerakan: <br />
            </span>
            Sejak awal, OSKM ITB merupakan ajang kaderisasi terpusat yang kental
            dengan agenda pergerakan. Hal ini terlihat dari tema dan aksi-aksi
            yang dilakukan di OSKM ITB yang selalu berbentuk gerakan yang
            menjawab isu aktual pada masanya. Kemudian, isu aktual tersebut
            terwujud menjadi visi yang dibawakan oleh ketua OSKM ITB berdasarkan
            atas pembacaan yang dilakukan terhadap kondisi Indonesia saat itu.
            Serta OSKM sendiri mempunyai dua substansi, yakni sebagai penyadaran
            arti mahasiswa dan penyadaran tentang lingkungan KM ITB
          </Texts>
        </motion.div>
        <br />
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <motion.div
              variants={{
                hidden: {
                  height: 0,
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: -1,
                    delay: 1,
                  },
                },
                visible: {
                  height: 'auto',
                  transition: {
                    staggerChildren: 0.2,
                    when: 'beforeChildren',
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  Memasuki tahun 2015, terlihat bahwa OSKM ITB semakin berusaha
                  beradaptasi dengan isu dan tantangan zaman yang terus berubah,
                  melalui topik-topik yang dapat membantu mahasiswa untuk
                  mewujudkan gerakan-gerakan yang relevan di masanya. Contohnya
                  adalah pada OSKM 2015 yang mulai membuka pandangan terhadap
                  isu internasional, dimana ketua OSKM pada tahun tersebut
                  menuliskan kegelisahannya mengenai isu ASEAN Free Trade Area
                  (AFTA) di tahun 2015 pada dokumen gagasannya.
                </Texts>
              </motion.div>
              <br />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  Dari situ, orientasi tentang kemahasiswaan yang dilakukan di
                  OSKM ITB mulai berkembang sehingga arah gerak OSKM ITB yang
                  biasanya cukup spesifik menjawab isu tertentu mulai melebar,
                  dan panitia OSKM ITB mulai berkreasi dengan caranya
                  masing-masing untuk memberikan orientasi kemahasiswaan bagi
                  mahasiswa baru.
                </Texts>
              </motion.div>
              <br />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  Seperti pada Integrasi ITB 2016 yang membawakan tema berwarna
                  pendidikan karakter yaitu Empati untuk Negeri, OSKM 2017 yang
                  mempopulerkan tiga lingkar pergerakan (Sosial Masyarakat,
                  Sosial Politik, dan Karya), OSKM ITB 2018 yang memperkuat
                  pendidikan di topik nasionalisme, hingga OSKM ITB 2019 yang
                  mulai memberikan materi-materi self-development untuk
                  mewujudkan pendidikan yang lebih personalized bagi generasi
                  baru.
                </Texts>
              </motion.div>
              <br />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  <span className="font-alegreya color-primaryBlack text-subHeading">
                    Visi OSKM ITB 2012-2021: <br />
                  </span>
                </Texts>
                <ul>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2012 :</Texts>
                    <Texts className="ml-2">Integrasi untuk Indonesia</Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2013 :</Texts>
                    <Texts className="ml-2">
                      Semangat Berkemahasiswaan berdasarkan Kearifan Lokal untuk
                      Indonesia
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2014 :</Texts>
                    <Texts className="ml-2">
                      Simfoni Pergerakan untuk Indonesia
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2015 :</Texts>
                    <Texts className="ml-2">
                      OSKM ITB 2015 sebagai Penyadaran akan Identitas Insan
                      Akademis Masa Depan Bangsa
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2016 :</Texts>
                    <Texts className="ml-2">
                      KAT ITB 2016 yang Melahirkan Perintis Gerakan Berasaskan
                      Empati
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2017 :</Texts>
                    <Texts className="ml-2">
                      Mewujudkan Mozaik Pergerakan untuk Indonesia
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2018 :</Texts>
                    <Texts className="ml-2">
                      Sebagai Sarana Inisiasi Pembentuk Mahasiswa Nirmala
                      Pemrakarsa Pembangunan Bangsa
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2019 :</Texts>
                    <Texts className="ml-2">
                      OSKM ITB 2019 sebagai Sarana Inisiasi Semangat Bermimpi
                      untuk Indonesia.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2020 :</Texts>
                    <Texts className="ml-2">
                      Terciptanya mahasiswa dengan keunikannya masing masing
                      senantiasa mendefinisikan perannya dan bertanggung jawab
                      terhadap peran tersebut
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2021 :</Texts>
                    <Texts className="ml-2">
                      KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya Dalam
                      Mewujudkan Kesadaran Berkontribusi untuk Indonesia
                    </Texts>
                  </li>
                </ul>
              </motion.div>
              <br />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  <span className="font-alegreya color-primaryBlack text-subHeading">
                    Dinamika Legalitas OSKM ITB: <br />
                  </span>
                </Texts>
                <ul>
                  <li className="flex">
                    <Texts className="min-w-[42px]">90an :</Texts>
                    <Texts className="ml-2">
                      OSKM ITB adalah ajang kaderisasi terpusat yang kental
                      dengan agenda pergerakan.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2000 :</Texts>
                    <Texts className="ml-2">
                      Munculnya permasalahan legalitas OSKM karena adanya
                      pandangan bahwa kaderisasi di OSKM ITB mengandung unsur
                      kekerasan sehingga menjadi perhatian Rektorat. Hal ini
                      berdampak pelarangan OSKM ITB pada tahun 2000-2002.
                      Penyelenggaraan OSKM ITB ilegal menyebabkan kehadiran
                      peserta yang sangat minim.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2002 :</Texts>
                    <Texts className="ml-2">
                      Diselenggarakannya OSKM pertama yang dilegalkan oleh
                      Rektorat dengan beberapa perubahan seperti peniadaan acara
                      Swasta dan metode kekerasan yang diganti menjadi metode
                      disiplin.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2005 :</Texts>
                    <Texts className="ml-2">
                      OSKM ITB kembali dibayang-bayangi isu Legalitas.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2006 :</Texts>
                    <Texts className="ml-2">
                      Berlangsungnya OSKM ilegal yang hanya diikuti oleh 136
                      mahasiswa. Ancaman DO membayangi Presiden, Ketua OSKM, dan
                      angkatan 2006 yang mengikuti OSKM.
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2007 :</Texts>
                    <Texts className="ml-2">
                      OSKM akhirnya dilegalkan dengan banyak perubahan konsep
                      dan metode, dengan pertimbangan agar angkatan 2007 dapat
                      berinteraksi dengan seniornya.
                    </Texts>
                  </li>
                </ul>
              </motion.div>
              <br />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '100%' },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <Texts>
                  <span className="font-alegreya color-primaryBlack text-subHeading">
                    Berbagai Nama OSKM ITB: <br />
                  </span>
                </Texts>
                <ul>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2006 :</Texts>
                    <Texts className="ml-2">
                      Pengenalan Satuan Akademik dan Kemahasiswaan (PSAK) ITB
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2007 :</Texts>
                    <Texts className="ml-2">
                      Penerimaan Mahasiswa Baru (PMB) KM ITB
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2009 :</Texts>
                    <Texts className="ml-2">
                      Pengenalan Ruang Dan Orientasi KM (PROKM) ITB
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2010 :</Texts>
                    <Texts className="ml-2">
                      Inisiasi Keluarga Mahasiswa (INKM) ITB
                    </Texts>
                  </li>
                  <li className="flex">
                    <Texts className="min-w-[42px]">2016 :</Texts>
                    <Texts className="ml-2">
                      Inisiasi Terpusat Keluarga Mahasiswa (INTEGRASI) ITB
                    </Texts>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          onClick={handleExpand}
          style={{ fontSize: '42px', color: '#171133', cursor: 'pointer' }}
        >
          <MdKeyboardArrowDown />
        </motion.div>
      </div>
      <TimelineWaveBottom width={1920} />
    </div>
  );
};

export default Sejarah;
