import { React } from 'react';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import TasteCard from '../components/TasteCard';
import Rect from '../components/Rect';
import GoBackBar from '../components/GoBackBar';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

const Step1 = () => {
  const selectedStatus = useAppSelector(
    (state) => state.tasteRoom.selectedStatus,
  );
  const disabled =
    selectedStatus.filter((ele) => ele === true).length < 3 ? true : false;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/step2');
  };

  return (
    <div className="page" style={{ minHeight: '720px' }}>
      <GoBackBar />
      <div style={{ margin: '2px auto' }}>
        <ProgressBar value={33} />
      </div>
      <div style={{ margin: '30px' }}>
        <Question
          subject={`Pick & Pic \n 머물고 싶은 해외숙소는?`}
          description={'최소 3개 이상을 선택해 주세요.'}
        />
      </div>
      <div className="scroll_y" style={{ margin: '0 auto 102px auto' }}>
        <TasteCard
          id={0}
          imgSrc={'/emerald.png'}
          hashtags={['바다로', '에메랄드 해변뷰']}
        />
        <TasteCard
          id={1}
          imgSrc={'/five_star_hotel.png'}
          hashtags={['5성급 호텔', '최상의 퀄리티', '가치소비']}
        />
        <TasteCard
          id={2}
          imgSrc={'/choncance.png'}
          hashtags={['촌캉스', '마운틴뷰', '자연asmr']}
        />
        <TasteCard
          id={3}
          imgSrc={'/resort.png'}
          hashtags={['리조트', '모든것이 갖춰진']}
        />
        <TasteCard
          id={4}
          imgSrc={'/fantastic_castle.png'}
          hashtags={['환상적인 성', '꿈같은 궁전', '자연을 담은 공원']}
        />
      </div>
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Rect
          height="52px"
          disabled={disabled}
          text={disabled ? '취향을 선택해보세요' : '다음'}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Step1;
