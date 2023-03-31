import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ width: '360px', height: '394px' }}
          alt=""
          src="/image 161.png"
        ></img>
      </div>
      <div>
        <img
          style={{ width: '360px', height: '394px' }}
          alt=""
          src="/image 13.png"
        ></img>
      </div>
    </Slider>
  );
};

export default Carousel;
