/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import VStock from '../components/VStock';
import pohon from '../assets/img/vistock/landing/pohon.png';
import semak from '../assets/img/vistock/landing/semak.png';
import lari from '../assets/img/vistock/landing/lari.png';
import batangKayu from '../assets/img/vistock/landing/batang-kayu.png';
import batangKayu2 from '../assets/img/vistock/landing/batang-kayu-2.png';
import bunga from '../assets/img/vistock/landing/bunga.png';

const LandingFooterGraphics: React.FC = () => {
    return (
        <div className={`relative xs:hidden lg:flex`}>
            <VStock className="absolute left-[400px] w-[200px] -top-4" src={lari} />
            <VStock className="absolute left-[70px] w-[200px] top-0" src={semak} />
            <VStock className="absolute -top-[380px] -left-40 right-0 w-[380px]" src={pohon} />
            <VStock className="absolute -top-[90px] left-[800px] right-0 w-[220px]" src={batangKayu} />
            <VStock className="absolute -top-[5px] left-[1250px] right-0 w-[220px] rotate-12" src={bunga} />
            <VStock className="absolute top-8 left-[1150px] right-0 w-[220px] rotate-12" src={semak} />
            <VStock className="absolute -top-[5px] left-[1250px] right-0 w-[220px] rotate-12" src={batangKayu2} />
        </div>
    );
};

export default LandingFooterGraphics;