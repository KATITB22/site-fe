import React from 'react';
import Title from '../components/Title';
import Texts from '../components/Texts';

const VisiMisi: React.FC = () => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap bg-primaryCream w-[100vw] h-fit xs:px-20 sm:px-36 py-14 h-[70vh]">
      <section className='w-full md:w-3/4 lg:pl-20'>
        <Title className='relative '>Visi</Title>
        <Texts className='relative top-5 w-[70vw]'>KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya dalam mewujudkan kesadaran berkontribusi untuk Indonesia</Texts>
        <Title className='relative top-10'>Misi</Title>
        <ol className='relative top-12 w-[70vw]'>
          <li>1. Menjalankan sistem pendidikan yang sesuai dengan kondisi peserta KAT ITB.</li>
          <li>2. Mengenalkan dan merefleksikan kembali Mahasiswa, Kemahasiswaan, dan KM ITB kepada peserta KAT ITB.</li>
          <li>3. Ruang Inspirasi elemen KM ITB untuk mempunyai kesadaran berkontribusi untuk Indonesia.</li>
          <li>4. Melaksanakan suatu sistem pendidikan yang berbudaya dan membudayakan proses belajar kepada peserta KAT ITB dengan konteks Indonesia.</li>
          <li>5. Menjadi wadah pendidikan dan Kepanitiaan yang selalu mau untuk berefleksi dan menyesuaikan dengan kondisi yang ada.</li>
        </ol>
      </section>
      <section className='w-full md:w-1/4'>
        <div className='position-absolute bg-grey w-[20vw] h-[20vw] p'/>
        {/* <Title className='absolute'>Visi &amp;</Title>
        <Title className='absolute bottom-'>Misi;</Title> */}
      </section>
    </div>
  );
};

export default VisiMisi;
