/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import VStock from '../components/VStock';
import pohon from '../assets/img/vistock/organogram_it/pohon.png';
import pohon2 from '../assets/img/vistock/organogram_it/pohon2.png';
import pohon3 from '../assets/img/vistock/organogram_it/pohon3.png';

const OrganogramGraphics: React.FC = () => {
  return (
    <>
      <VStock
        className="absolute xs:invisible lg:visible xl:-left-32 lg:-left-44 3xl:-left-18 lg:top-[3500px] xl:top-[2500px] xxl:top-[2400px] 3xl:top-[2150px] xxl:w-[450px] xl:w-[450px] lg:w-[310px] 4xl:top-[2200px] 5xl:top-[1800px]"
        src={pohon3}
        animation="bottom"
      />
      <VStock
        className="absolute xs:invisible lg:visible xl:top-40 lg:top-[420px] -right-8 xxl:w-[450px] xl:w-[350px] lg:w-[320px]"
        src={pohon2}
        animation="bottom"
      />
      <VStock
        className="absolute xs:invisible lg:visible xl:top-100 lg:top-[700px] left-0 xl:-left-8 xxl:-left-20 xxl:w-[450px] xl:w-[350px] lg:w-[320px]"
        src={pohon2}
        animation="bottom"
        mirror
      />
      <VStock
        className="absolute xs:invisible lg:visible xl:top-100 lg:top-[2250px] xl:top-[3000px] xxl:top-[2400px] 3xl:top-[2000px] 5xl:top-[1800px] -right-10 xxl:w-[450px] xl:w-[300px] lg:w-[320px]"
        src={pohon2}
        animation="bottom"
      />
      <VStock
        className="absolute xs:invisible lg:visible xl:visible xxl:visible -right-8 xxl:top-[3800px] xl:top-[4300px] lg:top-[5100px] xl:top-[5000px] xxl:top-[4200px] 3xl:top-[3600px] xxl:w-[450px] xl:w-[300px] lg:w-[310px] 4xl:top-[3200px] 5xl:top-[2900px]"
        src={pohon2}
        animation="bottom"
      />
      <VStock
        className="absolute xs:invisible lg:visible xl:visible xxl:visible xl:-left-8 xxl:-left-20 xxl:top-[4200px] xl:top-[5100px] lg:top-[5100px] 3xl:top-[3500px] 4xl:top-[3500px] xxl:w-[450px] xl:w-[380px] lg:w-[310px] 5xl:top-[3000px]"
        src={pohon2}
        animation="bottom"
        mirror
      />
    </>
  );
};

export default OrganogramGraphics;
