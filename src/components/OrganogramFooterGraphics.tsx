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
        <div className={`relative xs:hidden lg:flex`}>
            <VStock className="absolute -top-[300px] -left-36 right-0 w-[360px]" src={pohon} animation='right' />
            <VStock className="absolute -top-[1500px] -right-8 w-[420px]" src={pohon2} animation='bottom' />
            <VStock className="absolute -top-[280px] -right-[300px] w-[490px]" src={pohon3} animation='left' />
        </div>
    );
};

export default OrganogramFooterGraphics;