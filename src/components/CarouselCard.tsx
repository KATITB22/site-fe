import React from 'react';

import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { aplikasiLainnya } from '../utils/aplikasiLainnya';

const slickSettings: Settings = {
  lazyLoad: 'ondemand',
  accessibility: false,
  draggable: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CarouselCard: React.FC = () => {
  return (
    <div className="m:w-[600px] lg:w-[800px] xl:w-[1000px] content-center my-0 mx-auto pt-10 flex">
      <Slick {...slickSettings}>
        {aplikasiLainnya.map((app, idx) => (
          <Card
            key={idx}
            name={app.name}
            src={app.src}
            date={app.date}
            url={app.url}
          />
        ))}
      </Slick>
    </div>
  );
};

export default CarouselCard;
