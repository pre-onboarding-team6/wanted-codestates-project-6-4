import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exitDetail } from '../redux/reducers/infoDataReducer';
import { ContentBox } from '../styles/styles';
import NewContent from './NewContent';
import Thumbnail from './Thumbnail';

export default function SlidingPage({ tab }) {
  const [showContent, setShowContent] = useState(false);
  const [contentTranslateX, setContentTranslateX] = useState(0);
  const { pages } = useSelector((state) => state.infoData);

  useEffect(() => {
    const index = pages.findIndex((page) => page.sector_id === tab);
    setContentTranslateX((index * -100) / pages.length);
    if (index >= 0) {
      setTimeout(() => {
        setShowContent(true);
      });
    }
  }, [tab, pages]);

  const dispatch = useDispatch();
  const handleExitDetail = (sectorId) => {
    dispatch(
      exitDetail({
        sectorId,
      }),
    );
  };

  return (
    <SlidingView
      pages={pages.length}
      contentTranslateX={contentTranslateX}
      showContent={showContent}
    >
      {showContent &&
        pages.map((page, index) => (
          <RelateView key={index}>
            <AbsoluteScrollView>
              {!page.nowShoing ? (
                <>
                  <NewContent news={page.news} />
                </>
              ) : (
                <ContentBox>
                  <div>{page.nowShoing} 보는중</div>
                  <Thumbnail src="https://cdn-images-1.medium.com/max/800/1*OBA2wnz9g7IMXoi0sf9ltQ.jpeg" />
                  <button
                    onClick={() => {
                      handleExitDetail(page.sector_id);
                    }}
                  >
                    나가기
                  </button>
                </ContentBox>
              )}
            </AbsoluteScrollView>
          </RelateView>
        ))}
    </SlidingView>
  );
}
const SlidingView = styled.div`
  flex-grow: 1;
  display: flex;
  width: ${(props) => props.pages * 100 + '%'};
  height: 100%;
  overflow: hidden;
  transition-duration: 0.2s;
  transform: ${(props) => `translateX(${props.contentTranslateX}%)`};
`;

const RelateView = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const AbsoluteScrollView = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
