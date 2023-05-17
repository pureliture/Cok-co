import { React, useEffect } from 'react';
import CurationCard from 'components/CurationCard';

const CurationCardEx = () => {
  return (
    <>
      <CurationCard
        size="l"
        title="몰래 알아본 일본 현지인 추천 방안의 자쿠지 15곳"
        imgSrc={'/room1.png'}
        bgColor="#EFE6D5"
      />
      <CurationCard
        size="m"
        title="터키 열기구는 Tholla 호텔에서"
        imgSrc={'/turkey.png'}
        bgColor="#CFBA92"
      />
      <CurationCard
        size="s"
        title="정글 하우스"
        imgSrc={'/junglehouse.png'}
        bgColor="#CFBA92"
      />
    </>
  );
};

export default CurationCardEx;
