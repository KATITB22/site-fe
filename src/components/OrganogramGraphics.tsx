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
            <VStock className="absolute xs:invisible lg:visible xl:-left-32 lg:-left-44 lg:top-[3500px] xl:top-[4100px] xxl:top-[2200px] xxl:w-[450px] xl:w-[400px] lg:w-[310px]" src={pohon3} animation='bottom' />
            <VStock className="absolute xs:invisible lg:visible xl:top-40 lg:top-[420px] -right-8 xxl:w-[450px] xl:w-[350px] lg:w-[320px]" src={pohon2} animation='bottom' />
            <VStock className="absolute xs:invisible lg:visible xl:invisible xxl:visible -right-8 xxl:top-[4000px] xl:top-[4100px] lg:top-[5400px] xxl:w-[450px] xl:w-[250px] lg:w-[310px]" src={pohon2} animation='bottom' />
        </>
    );
};

export default OrganogramGraphics;