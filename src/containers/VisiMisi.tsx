import React from 'react';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import Texts from '../components/Texts';
import VStock from '../components/VStock';

const VisiMisi: React.FC = () => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-full h-auto xs:px-20 sm:px-36 py-14">
      <section className='w-full h-auto xs:pl-0 sm:pl-0 lg:w-3/4 lg:pl-20 xl:pl-10'>
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
      <section className='relative w-full lg:w-1/4'>
        <TopTitle className='static top-80 mb-1/3'>Visi &amp; <br/> &ensp; Misi</TopTitle>
        <VStock className='static ml-8'></VStock>
      </section>
    </div>
  );
};

export default VisiMisi;
