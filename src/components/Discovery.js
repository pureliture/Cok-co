import { React } from 'react';
import DiscoveryCard from './DiscoveryCard';
// import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Discovery.css';

const Discovery = () => {
  return (
    <div style={{ height: '601px' }}>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DiscoveryCard
            imgSrc="/bangkok.png"
            title={`요즘 태국 방콕에서 가성비로 \n 난리난 호텔`}
            musicImgSrc="/stay_by_my_side.png"
            musicTitle="Stay by My Side"
            singer="Sionya"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoveryCard
            imgSrc="/europehouse.png"
            title={`따뜻한 다이닝이 준비된 \n 유럽 중산층 가정집`}
            musicImgSrc="/how_to_carry_on.png"
            musicTitle="How to Carry On"
            singer="Wildflow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoveryCard
            imgSrc="/hotel_ritz_paris.png"
            title={`유럽투어에 빠질 수 없는 \n Hotel Ritz Paris`}
            musicImgSrc="/someone_like_me.png"
            musicTitle="Someone Like Me"
            singer="Velvet"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoveryCard
            imgSrc="/greece_hotel.png"
            title={`2023 꼭 가야할 그리스 호텔 \n The Palms Turks and Caicos`}
            musicImgSrc="/stockholm.png"
            musicTitle="Stockholm"
            singer="Revel Day"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscoveryCard
            imgSrc="/the_style_mate.png"
            title={`The Style Mate 선정 \n 멕시코에 가야 하는 이유`}
            musicImgSrc="/can_we_work_it_out.png"
            musicTitle="Can We Work It Out"
            singer="CLGR"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discovery;
