/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import heroLeft from '../assets/img/vistock/landing/hero/left.png';
import VStock from './VStock';
import heroRight from '../assets/img/vistock/landing/hero/right.png';

const HeroBackground: React.FC = () => {
    return (
        <>
            <div className={`flex absolute top-0 left-0 min-h-full -z-10`}>
                <div className={`flex left-0`}>
                    <VStock className='object-left object-cover h-[630px] w-[1000px] xs:flex lg:hidden' src={heroLeft} />
                    <VStock className='object-left object-cover h-[630px] w-[1000px] xs:hidden lg:flex' src={heroLeft} animation='left' animationType='tween' />
                </div>
            </div>
            <div className={`flex absolute top-0 right-0 min-h-full -z-20 overflow-hidden`}>
                <div className={`flex right-0 w-[1000px] sm:h-[750px] h-[600px]`}>
                    <VStock className='object-right object-cover w-[1000px] sm:h-[750px] h-[600px] xs:flex lg:hidden' src={heroRight} />
                    <VStock className='object-right object-cover w-[1000px] sm:h-[750px] h-[600px] xs:hidden lg:flex' src={heroRight} animation='right' animationType='tween' />
                </div>
            </div>
        </>
    );
};

export default HeroBackground;