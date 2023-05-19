import { React } from 'react';
import Rank from 'components/Rank';
import Subject from 'components/Subject';
import CurationCard from 'components/CurationCard';
import './styles/Recommend.css';
import RadiusRect from './RadiusRect';

const Recommend = ({ username, locations }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="dart_board_left.png"
        style={{
          transform: 'rotate(-13.23deg)',
          width: '241.48px',
          height: '241.48px',
          position: 'absolute',
          top: '25px',
          right: '-60px',
        }}
      ></img>
      <div>
        <Subject
          subject="트리픽만의 룸 큐레이션"
          description={`${username} 님을 위한 \n ${locations[0]} 룸 큐레이션`}
        ></Subject>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CurationCard
            size="l"
            title="몰래 알아본 일본 현지인 추천 방안의 자쿠지 15곳"
            imgSrc={'/room1.png'}
            bgColor="#EFE6D5"
          />
        </div>
      </div>
      <div style={{ backgroundColor: '#F2F2F2', borderRadius: '24px' }}>
        <Subject
          subject="트리픽만의 숙소 큐레이션"
          description={`${username} 님이 떠나고 싶을 ${locations[1]} 숙소 큐레이션`}
        ></Subject>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <CurationCard
            size="s"
            title="정글 하우스"
            imgSrc={'/junglehouse.png'}
            bgColor="#CFBA92"
          />
          <CurationCard
            size="s"
            title="눈부신 풀장의 Mike"
            imgSrc={'/mike.png'}
            bgColor="#CFBA92"
          />
          <CurationCard
            size="s"
            title="르 그랑 팍벵"
            imgSrc={'/legrangpakbaeng.png'}
            bgColor="#CFBA92"
          />
          <CurationCard
            size="s"
            title="메콩 빌리지"
            imgSrc={'/mecongvillage.png'}
            bgColor="#CFBA92"
          />
        </div>
      </div>
      <div style={{ backgroundColor: 'black' }}>
        <Subject
          subject="트리피커들이 떠나고 싶은"
          description="지금 많이 찾는 여행지"
          color="white"
        ></Subject>
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
      <div style={{ backgroundColor: 'black' }}>
        <Subject
          subject="유럽이 1등인 이유"
          description={`유럽 숙소는 비싸다? \n 트리픽 숙소는 다르다!`}
          color="white"
        ></Subject>
        <div
          className="scroll"
          style={{ display: 'flex', overflowX: 'scroll' }}
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
      <div style={{ borderRadius: '24px' }}>
        <Subject
          subject="꼼꼼한 트리픽커들의 선택"
          description="Global Best 10 Room"
        ></Subject>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CurationCard
            size="l"
            title="일박에 10만원 퀄리티는 100만원"
            imgSrc={'/room1.png'}
            bgColor="#EFE6D5"
          />
        </div>
      </div>
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
  );
};

export default Recommend;
