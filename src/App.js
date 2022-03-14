import React, { useEffect, useState } from 'react';

import { IPhoneSE } from 'react-device-mockups';
import 'html5-device-mockups/dist/device-mockups.min.css';

import { Global } from '@emotion/react';
import { reset } from './styles/reset';
import styled from '@emotion/styled';
import { ContentBox } from './styles/styles';
import Thumbnail from './components/Thumbnail';
import { backgroundColor, fontSize, iconSize } from './styles/colors';
import Subscription from './components/Subscribe';
import LikeShare from './components/LikeShare';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/reducers/infoDataReducer';
import SlidingPage from './components/SlidingPage';
import Tabs from './components/Tabs';
import loader from './assets/loader.png';

function App() {
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(0);
  const { data, loading } = useSelector((state) => state.infoData);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.sector && data.sector[0]) {
      setTab(data.sector[0]?.id);
    }
  }, [data]);

  return (
    <>
      <Global styles={reset} />
      <AppContainer>
        <IPhoneSE
          width={500}
          color="white"
          buttonProps={{
            onClick: () => dispatch(fetchData()),
          }}
        >
          <ViewPort>
            {loading ? (
              <LoaderContainer>
                <LoaderBox>
                  <LoaderImage src={loader} alt="loading" />
                </LoaderBox>
              </LoaderContainer>
            ) : (
              <>
                <Tabs setTab={setTab} sector={data.sector} />
                <SlidingPage
                  tab={tab}
                  sector={data.sector}
                  content={data.content}
                />
              </>
            )}
            <Subscription />
            {/* 새로 올라왔어요에서 like, share 사이즈는 기본으로 사용 */}
            <LikeShare />
            <LikeShare
              likeText={'좋아요'}
              shareText={'공유하기'}
              fontSize={fontSize.base} // 디테일 페이지 사이즈
              iconSize={iconSize.base}
              link="https://sandbank.io" // 컨텐츠 링크
            />
            <LikeShare
              likeText={likeCount}
              setLikeCount={setLikeCount}
              shareText={'공유하기'}
              fontSize={fontSize.sm} // 더보기 컴포넌트 사이즈
              iconSize={iconSize.sm}
              link="https://sandbank.io"
            />
          </ViewPort>
        </IPhoneSE>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const ViewPort = styled.div`
  background-color: ${backgroundColor.primary};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoaderBox = styled.div`
  display: block;
  width: 6rem;
  height: 6rem;
`;

const LoaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
