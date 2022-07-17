import React from 'react';
import Title from '../components/Title';
import TopTitle from '../components/TopTitle';
import Texts from '../components/Texts';

const VisiMisi: React.FC = () => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-full h-fit xs:px-20 sm:px-36 py-14 h-[70vh]">
      <section className='w-full h-fit md:w-3/4 lg:pl-20'>
        <Title className='relative '>Visi</Title>
        <Texts className='relative top-5'>KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya dalam mewujudkan kesadaran berkontribusi untuk Indonesia</Texts>
        <Title className='relative top-10'>Misi</Title>
        <ol className='relative top-12 h-fit'>
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
      <section className='w-full h-fit md:w-1/4'>
        <TopTitle className='top-80'>Visi &amp; <br/> &ensp; Misi</TopTitle>
        <div className='bg-grey w-[200px] h-[250px] p'/>
      </section>
    </div>
  );
};

export default VisiMisi;
