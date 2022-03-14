import React, { useEffect, useState } from 'react';

import { IPhoneSE } from 'react-device-mockups';
import 'html5-device-mockups/dist/device-mockups.min.css';

import { Global } from '@emotion/react';
import { reset } from './styles/reset';
import styled from '@emotion/styled';
import { backgroundColor } from './styles/colors';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/reducers/infoDataReducer';
import SlidingPage from './components/SlidingPage';

import Tabs from './components/Tabs';
import loader from './assets/loader.png';

function App() {
  const dispatch = useDispatch();
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
