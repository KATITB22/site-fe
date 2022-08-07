/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import awan3 from '../assets/img/vistock/landing/awan3.png';
import awan5 from '../assets/img/vistock/landing/awan5.png';
import VStock from './VStock';

interface LandingCloudsRightProps {
    embedded?: boolean;
}

const LandingCloudsRight: React.FC<LandingCloudsRightProps> = ({ embedded }) => {
    if (embedded) {
        return (
            <div className='relative xs:hidden lg:flex'>
                <VStock className={`absolute w-[500px] -right-[120px]`} src={awan3} />
                <VStock className={`absolute w-[500px] -right-[100px] rotate-0`} src={awan5} />
                <VStock className={`absolute w-[300px] top-[90px] right-[500px] rotate-0`} src={awan5} />
            </div>
        );
    }
    return (
        <div className='relative xs:hidden lg:flex'>
            <VStock className={`absolute w-[500px] -right-[120px] -top-[270px]`} src={awan3} />
            <VStock className={`absolute w-[500px] -right-[20px] -top-[150px] rotate-0`} src={awan5} />
            <VStock className={`absolute w-[200px] right-[500px] -top-[150px] rotate-0`} src={awan5} />
        </div>
    );
};

export default LandingCloudsRight;