import { React } from 'react';
import GoBackBar from 'components/GoBackBar';
import ProgressBar from 'components/ProgressBar';
import Question from 'components/Question';
import RadiusRect from 'components/RadiusRect';
import Placeholder from 'components/Placeholder';
import './styles/Step3.css';
import Rect from 'components/Rect';

const Step3 = () => {
  const genderSelected = [true, false, false];
  const disabled = true;

  return (
    <div className="page" style={{ minHeight: '720px', marginBottom: '102px' }}>
      <GoBackBar />
      <div style={{ margin: '2px auto' }}>
        <ProgressBar value={100} />
      </div>
      <div style={{ margin: '30px' }}>
        <Question
          subject={`Prepare \n 준비완료`}
          description={'회원가입하고 웰컴기프트를 받아가세요.'}
        />
      </div>
      <img className="gift_front" src="/gift_front.png" />
      <div style={{ margin: '2px auto' }}>
        <RadiusRect height="120px" backgroundColor="#F2F2F2" color="#AEAEAE">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Placeholder title="닉네임" required={true} />
            <input className="user_info_input" maxLength={10}></input>
          </div>
        </RadiusRect>
      </div>
      <div style={{ margin: '2px auto' }}>
        <RadiusRect height="120px" backgroundColor="#F2F2F2" color="#AEAEAE">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Placeholder title="거주국가" required={true} />
            <form action="#" style={{ margin: '10px auto' }}>
              {/* <label>Language</label> */}
              <select
                name="languages"
                id="lang"
                className="residence_select_box"
              >
                <option value="ko">대한민국</option>
                <option value="jp">일본</option>
              </select>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
        </RadiusRect>
      </div>
      <div style={{ margin: '2px auto' }}>
        <RadiusRect height="120px" backgroundColor="#F2F2F2" color="#AEAEAE">
          <div
            style={{
              width: '100%',
              //   height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Placeholder title="생년월일" required />
            <form action="#" style={{ margin: '10px auto' }}>
              {/* <label>Language</label> */}
              <select
                name="languages"
                id="lang"
                className="residence_select_box"
              >
                <option value="ko">1995년 12월 16일</option>
                {/* <option value="jp">일본</option> */}
              </select>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
        </RadiusRect>
      </div>
      <div style={{ margin: '2px auto ' }}>
        <RadiusRect height="120px" backgroundColor="#F2F2F2" color="#AEAEAE">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Placeholder title="성별" />
            <div
              style={{
                display: 'flex',
                margin: '10px 30px',
              }}
            >
              <RadiusRect
                width="51px"
                height="35px"
                backgroundColor={genderSelected[0] ? 'black' : 'white'}
                color={genderSelected[0] ? 'white' : 'black'}
              >
                <div>여성</div>
              </RadiusRect>
              <RadiusRect
                width="51px"
                height="35px"
                backgroundColor={genderSelected[1] ? 'black' : 'white'}
                color={genderSelected[1] ? 'white' : 'black'}
              >
                <div>남성</div>
              </RadiusRect>
              <RadiusRect
                width="51px"
                height="35px"
                backgroundColor={genderSelected[2] ? 'black' : 'white'}
                color={genderSelected[2] ? 'white' : 'black'}
              >
                <div>기타</div>
              </RadiusRect>
            </div>
          </div>
        </RadiusRect>
      </div>
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Rect height="52px" text="트리픽 시작하기" disabled={disabled} />
      </div>
    </div>
  );
};

export default Step3;
