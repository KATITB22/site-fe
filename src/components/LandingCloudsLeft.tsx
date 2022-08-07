/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import awan3 from '../assets/img/vistock/landing/awan3.png';
import awan4 from '../assets/img/vistock/landing/awan4.png';
import VStock from './VStock';

interface LandingCloudsLeftProps {
    embedded?: boolean;
}

const LandingCloudsLeft: React.FC<LandingCloudsLeftProps> = ({ embedded }) => {
    if (embedded) {
        return (
            <div className='relative xs:hidden lg:flex'>
                <VStock className={`absolute w-[420px] -top-[130px] -left-[200px]`} src={awan3} animation="bottom" />
                <VStock className={`absolute w-[450px] -top-[70px] -left-[290px] rotate-45`} src={awan4} animation="bottom" />
            </div>
        );
    }
    return (
        <div className='relative xs:hidden lg:flex'>
            <VStock className={`absolute w-[450px] -top-[300px] -left-[200px]`} src={awan3} animation="bottom" />
            <VStock className={`absolute w-[450px] -top-[240px] -left-[290px] rotate-45`} src={awan4} animation="bottom" />
        </div>
    );
};

export default LandingCloudsLeft;