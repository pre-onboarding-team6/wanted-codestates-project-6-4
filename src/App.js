import React, { useState } from 'react';

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

function App() {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <>
      <Global styles={reset} />
      <AppContainer>
        <IPhoneSE
          color="white"
          buttonProps={{
            onClick: () => alert('Home Button Clicked!'),
          }}
        >
          <Page>
            {/* 헤더 */}
            {/* 내부 */}
            <ContentContainer>
              <ContentBox>
                <div>새로 올라왔어요</div>
                <Thumbnail src="https://cdn-images-1.medium.com/max/800/1*OBA2wnz9g7IMXoi0sf9ltQ.jpeg" />
              </ContentBox>
              <Subscription />
              <LikeShare />
              <LikeShare
                likeText={'좋아요'}
                shareText={'공유하기'}
                fontSize={fontSize.sm}
                iconSize={iconSize.sm}
              />
              <LikeShare
                likeText={likeCount}
                setLikeCount={setLikeCount}
                shareText={'공유하기'}
                fontSize={fontSize.xs}
                iconSize={iconSize.xs}
              />
            </ContentContainer>
          </Page>
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

const Page = styled.div`
  background-color: ${backgroundColor.primary};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`;
