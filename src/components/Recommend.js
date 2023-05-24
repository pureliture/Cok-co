import { React } from 'react';
import Rank from 'components/Rank';
import Subject from 'components/Subject';
import CurationCard from 'components/CurationCard';
import CountryBtn from 'components/CountryBtn';
import RadiusRect from 'components/RadiusRect';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles/Recommend.css';
import MagazineCard from './MagazineCard';
import NavBar from './NavBar';
import { useAppSelector } from 'app/hooks';

const Recommend = ({ locations }) => {
  const { nickname } = useAppSelector((state) => state.signUp);
  const countryIdx = useAppSelector((state) => state.recommend.countryIdx);

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="dart_board_left.png"
        style={{
          transform: 'rotate(13.23deg)',
          width: '241.48px',
          height: '241.48px',
          position: 'absolute',
          top: '-20px',
          right: '-60px',
          zIndex: 100,
        }}
      ></img>
      <div>
        <div style={{ margin: '30px' }}>
          <Subject
            subject="트리픽만의 룸 큐레이션"
            description={`${nickname} 님을 위한 \n ${locations[0]} 룸 큐레이션`}
          ></Subject>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '30px',
          }}
        >
          <Swiper
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <CurationCard
                size="l"
                title={`몰래 알아본 일본 현지인 추천 \n 방안의 자쿠지 15곳`}
                imgSrc={'/jacuzzi.png'}
                bgColor="#EFE6D5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CurationCard
                size="l"
                title={`베란다 문을 열면 퐁당 \n 한국보다 저렴한 동북아 14곳`}
                imgSrc={'/veranda_moon.png'}
                bgColor="#D9EFD5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CurationCard
                size="l"
                title={`바다와 기찻길이 한눈에 보이는 \n 대만의 룸 20곳`}
                imgSrc={'/sea_and_train_rail.png'}
                bgColor="#D5E3EF"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CurationCard
                size="l"
                title={`잠들지 않는 밤 \n 화려한 홍콩시티뷰 10곳`}
                imgSrc={'/night_hongkong.png'}
                bgColor="#EFD5D5"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#F2F2F2',
          borderRadius: '24px',
          minHeight: '838px',
        }}
      >
        <div style={{ padding: '30px' }}>
          <Subject
            subject="트리픽만의 숙소 큐레이션"
            description={`${nickname} 님이 떠나고 싶을 ${locations[1]} 숙소 큐레이션`}
          ></Subject>
        </div>
        <div className="scroll_x">
          <CountryBtn id={0} />
          <CountryBtn id={1} />
          <CountryBtn id={2} />
          <CountryBtn id={3} />
        </div>
        {countryIdx === 0 ? (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              paddingBottom: '20px',
            }}
          >
            <CurationCard size="s" id={0} />
            <CurationCard size="s" id={1} />
            <CurationCard size="s" id={2} />
            <CurationCard size="s" id={3} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div style={{ backgroundColor: 'black', position: 'relative' }}>
        <img
          src="trophy_perspective.png"
          style={{
            transform: 'rotate(3.58deg)',
            width: '209.2px',
            height: '209.2px',
            position: 'absolute',
            top: '10px',
            right: '-50px',
          }}
        ></img>
        <div style={{ padding: '100px 30px 30px 30px' }}>
          <Subject
            subject="트리피커들이 떠나고 싶은"
            description="지금 많이 찾는 여행지"
            color="white"
          ></Subject>
        </div>
        <div
          style={{
            width: '360px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Rank
            imgSrc="/paris.png"
            bgColor="#9C95AA"
            ranking="1"
            city="파리"
            continent="유럽"
          ></Rank>
          <Rank
            imgSrc="/japan.png"
            bgColor="#C0AFA4"
            ranking="2"
            city="일본"
            continent="동북아"
          ></Rank>
          <Rank
            imgSrc="/thailand.png"
            bgColor="#CFD4D0"
            ranking="3"
            city="태국"
            continent="동남아"
          ></Rank>
        </div>
      </div>
      <div style={{ backgroundColor: 'black' }}>
        <div style={{ padding: '45px 30px 30px 30px' }}>
          <Subject
            subject="유럽이 1등인 이유"
            description={`유럽 숙소는 비싸다? \n 트리픽 숙소는 다르다!`}
            color="white"
          ></Subject>
        </div>
        <div
          className="scroll_x"
          style={{
            paddingBottom: '75px',
          }}
        >
          <CurationCard
            size="m"
            title={`꿈꿔온 에펠탑 뷰 \n 바로 떠나봐요`}
            imgSrc={'/eiffel_tower.png'}
            bgColor="#92B4F0"
          />
          <CurationCard
            size="m"
            title={`산토리니가 한눈에 \n 보이는 Santorica`}
            imgSrc={'/santorini.png'}
            bgColor="#A9B0CA"
          />
          <CurationCard
            size="m"
            title="터키 열기구는 Tholla 호텔에서"
            imgSrc={'/turkey.png'}
            bgColor="#CFBA92"
          />
        </div>
      </div>
      <div style={{ borderRadius: '24px', paddingBottom: '30px' }}>
        <div style={{ padding: '30px' }}>
          <Subject
            subject={`숙소로 여행가요 \n 꼼꼼한 트리픽커들의 선택`}
            description="월간 트리픽 매거진 Top5"
          ></Subject>
        </div>
        <MagazineCard imgSrc={'/magazine_april.png'} />
        {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CurationCard
            size="l"
            title="일박에 10만원 퀄리티는 100만원"
            imgSrc={'/ten_million.png'}
            bgColor="#EFE6D5"
          />
        </div> */}
      </div>
      <div style={{ margin: '40px 0 50px 0' }}>
        <RadiusRect
          width="360px"
          height="80px"
          backgroundColor="black"
          color="white"
        >
          <div>새로운 추천을 받고 싶다면?</div>
          <RadiusRect width="89px" height="33px">
            <div className="btn_text">새로고침</div>
            <img className="btn_img" src="./material-symbols_refresh.png"></img>
          </RadiusRect>
        </RadiusRect>
      </div>
      <NavBar menuIdx={0} />
    </div>
  );
};

export default Recommend;
