import { React } from 'react';
import DiscoveryCard from './DiscoveryCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Discovery.css';
import NavBar from './NavBar';
import Subject from './Subject';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setIsFirstTime, setMutedStatus } from 'features/discovery/discovery';

const DiscoverySwipe = () => {
  const { mustedStatus } = useAppSelector((state) => state.discovery);
  const dispatch = useAppDispatch();

  const handleChange = ({ realIndex }) => {
    console.log(realIndex);
    dispatch(setMutedStatus(realIndex + 2));
  };
  const firstRowHandleChange = ({ realIndex }) => {
    console.log('real', realIndex);

    // dispatch(setMutedStatus(realIndex + 0));
  };
  const secondRowHandleChange = ({ realIndex }) => {
    console.log('real', realIndex);
    // dispatch(setMutedStatus(realIndex + 2));
  };
  const thirdRowHandleChange = ({ realIndex }) => {
    console.log('real', realIndex);

    // dispatch(setMutedStatus(realIndex + 4));
  };

  return (
    <div>
      {console.log(mustedStatus)}
      <div style={{ height: '601px' }}>
        <Swiper
          onActiveIndexChange={handleChange}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Swiper onActiveIndexChange={firstRowHandleChange}>
              <SwiperSlide>
                {/* <div style={{ position: 'relative' }}>
                  <video
                    style={{ zIndex: -100 }}
                    height="601px"
                    loop
                    autoPlay
                    muted={mustedStatus[0]}
                    id="vid"
                  >
                    <source type="video/mp4" src="11.mp4"></source>
                    <source type="video/ogg" src="11.ogg"></source>
                  </video> */}
                <DiscoveryCard
                  // classname="test"
                  imgSrc="/bangkok.png"
                  title={`요즘 태국 방콕에서 가성비로 \n 난리난 호텔`}
                  musicImgSrc="/stay_by_my_side.png"
                  musicTitle="Stay by My Side"
                  singer="Sionya"
                />
                {/* </div> */}
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
            </Swiper>
          </SwiperSlide>

          <SwiperSlide>
            <Swiper className="mySwiper">
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
                  imgSrc="/europehouse.png"
                  title={`따뜻한 다이닝이 준비된 \n 유럽 중산층 가정집`}
                  musicImgSrc="/how_to_carry_on.png"
                  musicTitle="How to Carry On"
                  singer="Wildflow"
                />
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper className="mySwiper">
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
          </SwiperSlide>
        </Swiper>
      </div>
      <NavBar menuIdx={0} />
    </div>
  );
};

const DiscoveryGuide = () => {
  const dispatch = useAppDispatch();
  const handleStartDiscoveryClick = () => {
    dispatch(setIsFirstTime());
  };

  return (
    <div>
      <div className="discovery_guide">
        <div style={{ margin: '30px' }}>
          <Subject
            subject="트리픽이 검증한"
            description={`고퀄리티 글로벌 숙소를 \n 발견해보세요!`}
          />
        </div>
        <div style={{ height: '400px' }}>
          <Swiper className="">
            <SwiperSlide>
              {/* <div className="discovery_guide_card">
                <div style={{ padding: '20px' }}>
                  <img
                    src="/compass_perspective.png"
                    style={{ width: '195px', height: '279.69px' }}
                  ></img>
                </div>
                <div className="discovery_guide_card_btn">다음</div>
              </div> */}
              <img
                className="discovery_guide_card_btn"
                src="/compass_perspective.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="discovery_guide_card_btn"
                src="/magnifying_glass_right.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="discovery_guide_card_btn"
                src="/heart_perspective.png"
                onClick={handleStartDiscoveryClick}
              ></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <NavBar menuIdx={0} />
    </div>
  );
};

const Discovery = () => {
  const { isFirstTime } = useAppSelector((state) => state.discovery);
  return <>{isFirstTime ? <DiscoveryGuide /> : <DiscoverySwipe />}</>;
};

export default Discovery;
