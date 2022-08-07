/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import heroLeft from '../assets/img/vistock/landing/hero/left.png';
import heroRight from '../assets/img/vistock/landing/hero/right.png';

const HeroBackground: React.FC = () => {
    return (
        <>
            <div className={`flex absolute top-0 left-0 min-h-full z-[-1]`}>
                <div className={`flex left-0 w-full xl:h-[660px] 2xl:h-full h-[600px]`}>
                    <img src={heroLeft} className={`object-top object-cover`} alt="heroLeft" />
                </div>
            </div>
            <div className={`flex absolute top-0 right-0 min-h-full z-[-2]`}>
                <div className={`flex right-0 w-full sm:h-[750px] h-[600px]`}>
                    <img src={heroRight} className={`object-top object-cover`} alt="heroRight" />
                </div>
            </div>
        </>
    );
};

export default HeroBackground;