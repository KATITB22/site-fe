/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import heroLeft from '../assets/img/vistock/landing/hero/left.png';
import heroRight from '../assets/img/vistock/landing/hero/right.png';

const HeroBackground: React.FC = () => {
    return (
        <>
            <div className={`flex absolute top-0 left-0 min-h-full -z-10`}>
                <div className={`flex left-0 h-[630px] w-[1000px]`}>
                    <img src={heroLeft} className={`object-left object-cover`} alt="heroLeft" />
                </div>
            </div>
            <div className={`flex absolute top-0 right-0 min-h-full -z-20`}>
                <div className={`flex right-0 w-[1000px] sm:h-[750px] h-[600px]`}>
                    <img src={heroRight} className={`object-right object-cover`} alt="heroRight" />
                </div>
            </div>
        </>
    );
};

export default HeroBackground;