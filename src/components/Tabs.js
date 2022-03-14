import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { buttonColor } from '../styles/colors';

export default function Tabs({ setTab, sector }) {
  const [showBottom, setShowBottom] = useState(false);
  const [bottomInitialX, setBottomInitialX] = useState(0);
  const [bottomTranslateX, setBottomTranslateX] = useState(0);

  const changeTranslateX = useCallback(
    (index) => {
      setBottomTranslateX(bottomInitialX + index * 100);
    },
    [setBottomTranslateX, bottomInitialX],
  );

  useEffect(() => {
    if (sector.length % 2 !== 0) {
      const x = Math.floor(sector.length / 2) * -100;
      setBottomInitialX(x);
    } else {
      const x = Math.floor(sector.length / 2) * -100 + 50;
      setBottomInitialX(x);
    }
    // 비동기 실행해야 바텀이 이동후 노출됩니다.
    setTimeout(() => {
      setShowBottom(true);
    });
  }, [sector]);

  useEffect(() => {
    setBottomTranslateX(bottomInitialX);
  }, [bottomInitialX]);

  return (
    <TabsDiv>
      {sector.map((item, index) => (
        <TabDiv
          key={item.id}
          onClick={() => {
            setTab(item.id);
            changeTranslateX(index);
          }}
        >
          {item.sector_kr}
        </TabDiv>
      ))}
      {showBottom && <TabBottom bottomTranslateX={bottomTranslateX} />}
    </TabsDiv>
  );
}

const TabsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  position: relative;
`;

const TabDiv = styled.button`
  display: inline-flex;
  justify-content: center;
  width: 25%;
  padding: 1.25rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  overflow: hidden;
`;

const TabBottom = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  width: 25%;
  height: 2px;
  background-color: ${buttonColor.primary};
  transition-duration: 0.2s;
  transform: ${(props) => `translateX(${props.bottomTranslateX}%)`};
`;
