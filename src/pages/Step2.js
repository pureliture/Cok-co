import { React } from 'react';
import ProgressBar from '../components/ProgressBar';
import Subject from '../components/Subject';
import Question from '../components/Question';
import TasteCard from '../components/TasteCard';
import Rect from '../components/Rect';
import GoBackBar from '../components/GoBackBar';
import CountryCard from 'components/CountryCard';
import Region from 'components/Region';

const Step2 = () => {
  const disabled = true;

  return (
    <div className="page" style={{ minHeight: '720px' }}>
      <GoBackBar />
      <div style={{ margin: '2px auto' }}>
        <ProgressBar value={66} />
      </div>
      <div style={{ margin: '30px' }}>
        <Question
          subject={`Plan & Play \n 떠나고 싶은 국가는?`}
          description={
            '추천과 알림을 통해 \n 새로운 소식을 빠르게 전해드릴게요.'
          }
        />
      </div>
      <Subject description="" />
      <Region region="동북아" count={2121}>
        <CountryCard
          imgSrc={'/japan_2.png'}
          name="일본"
          count={821}
          backgroundColor="#F0E0B5"
        />
        <CountryCard
          imgSrc={'/taiwan.png'}
          name="대만"
          count={243}
          backgroundColor="#8DAD9E"
        />
      </Region>
      <Region region="동남아" count={1123}>
        <CountryCard
          imgSrc={'/singapore.png'}
          name="싱가포르"
          count={312}
          backgroundColor="#FFDFFF"
        />
        <CountryCard
          imgSrc={'/laos_s.png'}
          name="라오스"
          count={82}
          backgroundColor="#BADC94"
        />
      </Region>
      <Region region="서남아" count={1048}>
        <CountryCard
          imgSrc={'/maldive.png'}
          name="몰디브"
          count={642}
          backgroundColor="#C7EAE7"
        />
        <CountryCard
          imgSrc={'/india.png'}
          name="인도"
          count={152}
          backgroundColor="#C0BABA"
        />
      </Region>
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Rect height="52px" text="다음" />
      </div>
    </div>
  );
};

export default Step2;
