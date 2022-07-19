import React from 'react';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import Texts from '../components/Texts';
import VStock from '../components/VStock';

const VisiMisi: React.FC = () => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-full h-auto space-x-0 xs:px-20 sm:px-36 py-14">
      <section className='flex justify-center w-full h-auto lg:w-2/3'>
        <section>
          <Title className='relative '>Visi</Title>
          <Texts className='relative top-5'>KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya dalam mewujudkan kesadaran berkontribusi untuk Indonesia</Texts>
          <Title className='relative top-10'>Misi</Title>
          <ol className='relative top-12 h-auto'>
            <li>
              <Texts>1. Menjalankan sistem pendidikan yang sesuai dengan kondisi peserta KAT ITB.</Texts>
            </li>
            <li>
              <Texts>2. Mengenalkan dan merefleksikan kembali Mahasiswa, Kemahasiswaan, dan KM ITB kepada peserta KAT ITB.</Texts>
            </li>
            <li>
              <Texts>3. Ruang Inspirasi elemen KM ITB untuk mempunyai kesadaran berkontribusi untuk Indonesia.</Texts>
            </li>
            <li>
              <Texts>4. Melaksanakan suatu sistem pendidikan yang berbudaya dan membudayakan proses belajar kepada peserta KAT ITB dengan konteks Indonesia.</Texts>
            </li>
            <li>
              <Texts>5. Menjadi wadah pendidikan dan Kepanitiaan yang selalu mau untuk berefleksi dan menyesuaikan dengan kondisi yang ada.</Texts>
            </li>
          </ol>
        </section>
      </section>
      <section className='relative flex justify-center content-center xs:invisible lg:visible xs:w-0 lg:w-1/3'>
        <section className='relative w-[232px] h-[269px]'>
          <TopTitle className='absolute top-72'>Visi &amp; <br/> &ensp; Misi</TopTitle>
          <VStock className='absolute top-10 ml-8'></VStock>
        </section>
      </section>
    </div>
  );
};

export default VisiMisi;
