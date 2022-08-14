/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import VStock from '../components/VStock';
import pohon from '../assets/img/vistock/organogram_it/pohon.png';
import pohon2 from '../assets/img/vistock/organogram_it/pohon2.png';
import pohon3 from '../assets/img/vistock/organogram_it/pohon3.png';

const OrganogramFooterGraphics: React.FC = () => {
    return (
        <>
            <VStock className="absolute xs:invisible lg:visible -top-[300px] -left-36 right-0 w-[360px]" src={pohon} animation='bottom' />
            <VStock className="absolute xs:invisible lg:visible -top-[280px] -right-[300px] w-[490px]" src={pohon3} animation='bottom' />
        </>
    );
};

export default OrganogramFooterGraphics;