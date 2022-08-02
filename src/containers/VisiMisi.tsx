import { motion } from 'framer-motion';
import React from 'react';
import Texts from '../components/Texts';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import VStock from '../components/VStock';
import { getTransition } from '../utils/transition';

const VisiMisi: React.FC = () => {
  return (
    <div
      className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-full h-auto space-x-0 xs:px-20 md:px-32 
    lg:px-20 xl:px-40 xxl:px-80"
    >
      <motion.section
        className="flex justify-center w-full lg:w-2/3"
        {...getTransition('right')}
      >
        <section>
          <Title>isi</Title>
          <Texts>
            KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya dalam mewujudkan
            kesadaran berkontribusi untuk Indonesia
          </Texts>
          <Title className="pt-10">isi</Title>
          <ol className="pb-10">
            <li>
              <Texts>
                1. Menjalankan sistem pendidikan yang sesuai dengan kondisi
                peserta KAT ITB.
              </Texts>
            </li>
            <li>
              <Texts>
                2. Mengenalkan dan merefleksikan kembali Mahasiswa,
                Kemahasiswaan, dan KM ITB kepada peserta KAT ITB.
              </Texts>
            </li>
            <li>
              <Texts>
                3. Ruang Inspirasi elemen KM ITB untuk mempunyai kesadaran
                berkontribusi untuk Indonesia.
              </Texts>
            </li>
            <li>
              <Texts>
                4. Melaksanakan suatu sistem pendidikan yang berbudaya dan
                membudayakan proses belajar kepada peserta KAT ITB dengan
                konteks Indonesia.
              </Texts>
            </li>
            <li>
              <Texts>
                5. Menjadi wadah pendidikan dan Kepanitiaan yang selalu mau
                untuk berefleksi dan menyesuaikan dengan kondisi yang ada.
              </Texts>
            </li>
          </ol>
        </section>
      </motion.section>
      <motion.section
        className="relative flex justify-center content-center xs:invisible lg:visible xs:w-0 lg:w-1/3"
        {...getTransition('left')}
      >
        <section className="relative w-[232px] h-[269px]">
          <TopTitle className="absolute top-72">
            isi &amp; <br /> &ensp; isi
          </TopTitle>
          <VStock className="absolute top-10 ml-8"></VStock>
        </section>
      </motion.section>
    </div>
  );
};

export default VisiMisi;
