/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import awan3 from '../assets/img/vistock/landing/awan3.png';
import awan4 from '../assets/img/vistock/landing/awan4.png';
import VStock from './VStock';

const LandingCloudsLeft: React.FC = () => {
    return (
        <div className='relative xs:hidden lg:flex'>
            <VStock className={`absolute w-[450px] -top-[300px] -left-[200px]`} src={awan3} />
            <VStock className={`absolute w-[450px] -top-[240px] -left-[290px] rotate-45`} src={awan4} />
        </div>
    );
};

export default LandingCloudsLeft;