import React from 'react';

import { IPhoneSE } from 'react-device-mockups';
import 'html5-device-mockups/dist/device-mockups.min.css';

import { Global } from '@emotion/react';
import { reset } from './styles/reset';
import styled from '@emotion/styled';

function App() {
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
          {/* 탭 컨테이너를 여기에 담습니다 */}
          <iframe
            title="showcase"
            src="https://example.com"
            style={{
              width: '100%',
              height: '100%',
              margin: 0,
            }}
          />
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
