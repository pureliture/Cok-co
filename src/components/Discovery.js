import { React } from 'react';
import DiscoveryCard from './DiscoveryCard';
// import { useNavigate } from 'react-router-dom';

const Discovery = () => {
  return (
    <>
      <DiscoveryCard
        imgSrc="./bangkok.png"
        title={`요즘 태국 방콕에서 가성비로 \n 난리난 호텔`}
        musicImgSrc="./stay_by_my_side.png"
        musicTitle="Stay by My Side"
        singer="Sionya"
      />
    </>
  );
};

export default Discovery;
