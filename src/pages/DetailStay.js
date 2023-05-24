import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import OneWord from '../components/OneWord';
import Subject from '../components/Subject';
import CurationCard from '../components/CurationCard';
import ViewCard from '../components/ViewCard';
import RoomCard from '../components/RoomCard';
import DiscoveryCard from '../components/DiscoveryCard';
import RadiusRect from '../components/RadiusRect';
import OutLink from '../components/OutLink';
import GoBackBarWhite from 'components/GoBackBarWhite';
import { stay } from 'constant';
import Badge from 'components/Badge';
import SpecGuide from 'components/SpecGuide';

const DetailStay = () => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // const status = useAppSelector((state) => state.like.status);
  return (
    <div className="page">
      <GoBackBarWhite />
      <DetailCard
        mainImgSrc="/mecongvillage.png"
        subImgSrc="/laos_s.png"
        title={`라오스의 거대한 자연아래 \n 메콩 빌리지 (르 그랑 팍벵)`}
        location="Pak Beng, Oudomxay Province, 라오스"
        id={2}
      />
      <OneWord
        words={[
          '가성비 좋은 자연 휴양지로 떠나고 싶다면 \n 라오스를 추천드리고 싶어요🍀',
          '그 중에서도 프라이빗한 장소에서 가장 멋진 마운틴 뷰를 감상할 수 있는 완벽한 숙소를 소개해드릴게요🥰',
          '이름도 귀여운 메콩 빌리지는 \n 현지인 친구의 추천으로 검증 방문하였어요. \n 라오스 가성비 Top3안에 드는 숙소인 만큼 \n Tripic 만족도도 아주 높았죠.',
          '자, 이제 상세한 숙소 스팩을 소개드릴게요🥳',
        ]}
      />
      <div
        style={{
          backgroundImage: `url('/spec_guide.png')`,
          display: 'flex',
          justifyContent: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img
          src="/book_mockup.png"
          style={{
            transform: 'rotate(-15deg)',
            width: '162.99px',
            height: '221.75px',
          }}
          onClick={toggleDrawer}
        ></img>
        {/* <div
          style={{
            backgroundColor: 'black',
            transform: 'rotate(-15deg)',
            width: '160.3px',
            height: '221.75px',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
          onClick={toggleDrawer}
        >
          <Badge />
          <Subject
            subject={'섬세한 트리피커들을 위한 \n 4월 업데이트'}
            description={`가장 따근하고 정확한 \n ${stay[id].title} \n Detail Spec Guide >`}
            color="white"
            fontSize="14.14px"
            subjectFontSize="9.62px"
          />
        </div> */}
      </div>
      <SpecGuide isOpen={isOpen} toggleDrawer={toggleDrawer} />
      {/* TODO: 추후 삭제하기 */}
      <img
        src="/map_test.png"
        style={{ height: '596px', width: '360px', margin: '50px 0' }}
      />
      <div
        style={{
          backgroundColor: 'black',
          borderRadius: '24px',
        }}
      >
        {/* <div style={{ margin: '30px' }}>
          <Subject
            subject="트리픽이 직접 찍은"
            description={'이 숙소의 매력포인트 뷰'}
            color="white"
          ></Subject>
        </div>
        <div
          className="scroll_x"
          style={{
            paddingBottom: '30px',
          }}
        >
          <ViewCard
            title={`노을이 질때 \n 선셋뷰도 놓칠 수 없어요`}
            imgSrc={'/sunset.png'}
            bgColor="#F1D9A9"
          />
          <ViewCard
            title={`베란다를 나서면 \n 초록초록한 마운틴 뷰`}
            imgSrc={'/veranda.png'}
            bgColor="#AFDD9F"
          />
        </div> */}
        <div style={{ margin: '30px' }}>
          <Subject
            subject="트리픽이 직접 꼽은"
            description={'이 숙소의 Best 룸'}
            color="white"
          ></Subject>
        </div>
        <div
          className="scroll_x"
          style={{
            paddingBottom: '30px',
          }}
        >
          <RoomCard
            imgSrc={'/mountain_view.png'}
            title={`마운틴뷰가 가장 좋은 \n  Mountain Villa`}
            price={'130,252'}
          />
          <RoomCard
            imgSrc={'/veranda.png'}
            title={`깨끗한 컨디션을 자랑하는 \n Presidentail Suite`}
            price={'128,342'}
          />
        </div>
        <>
          <div style={{ margin: '30px' }}>
            <Subject
              subject="트리픽이 큐레이션한"
              description={'이 숙소의 발견'}
              color="white"
            ></Subject>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              paddingBottom: '40px',
            }}
          >
            <DiscoveryCard
              size="m"
              imgSrc="/bangkok.png"
              title={`요즘 태국 방콕에서 가성비로 \n 난리난 호텔`}
              musicImgSrc="/evergreen.png"
              musicTitle="Evergreen"
              singer="dazeychain"
            />
          </div>
        </>
      </div>
      {/* <>
        <div style={{ margin: '30px' }}>
          <Subject description="공간 정보"></Subject>
        </div>
        <img
          src="/pak_baeng_map.png"
          style={{ width: '360px', height: '170px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RadiusRect width="178px" height="60px" border="2px solid #1a1a1a">
            <div>길찾기</div>
          </RadiusRect>
          <RadiusRect
            width="178px"
            height="60px"
            backgroundColor="black"
            color="white"
          >
            <div>지도 보기</div>
          </RadiusRect>
        </div>
        <div>
          <div
            className="description"
            style={{ color: 'black', fontSize: '20px' }}
          >
            메콩 빌리지 (르 그랑 팍벵)
          </div>
          <div className="subject">Pak Beng, Oudomxay Province, 라오스</div>
        </div>
      </> */}
      <div style={{ margin: '50px 0' }}>
        <Subject description="예약 가능 링크" color="black"></Subject>
        <OutLink name="아고다" imgSrc="/agoda.png" />
        <OutLink name="부킹닷컴" imgSrc="/bookingdotcom.png" />
        <OutLink name="에어비앤비" imgSrc="/airbnb.png" />
      </div>
      <>
        <div style={{ margin: '30px' }}>
          <Subject
            subject="메콩빌리지와 비슷한"
            description="Global Rooms"
          ></Subject>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '40px',
          }}
        >
          <CurationCard
            size="l"
            title={`산과 열기구 전망 \n 최신식 대형 객실`}
            imgSrc={'/hot_air_balloon.png'}
            bgColor="#E0D3C5"
          />
        </div>
      </>
      <div style={{ margin: '40px 0 50px 0' }}>
        <RadiusRect
          width="360px"
          height="80px"
          backgroundColor="black"
          color="white"
        >
          <div>관련 숙소를 더 보고 싶다면?</div>
          <RadiusRect width="89px" height="33px">
            <div className="btn_text">트리픽발견</div>
            <img className="btn_img" src="/material-symbols_refresh.png"></img>
          </RadiusRect>
        </RadiusRect>
      </div>
    </div>
  );
};

export default DetailStay;
