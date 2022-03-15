import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewContent from './NewContent';
import MoreContents from './MoreContents';
import Subscription from './Subscribe';
import Thumbnail from './Thumbnail';
import YoutubeDetail from './Detail/YoutubeDetail';
import OpinionDetail from './Detail/OpinionDetail';
import InsightDetail from './Detail/InsightDetail';
import { backgroundColor } from '../styles/colors';

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
                  <Subscription />
                  <MoreContents page={page} />
                </>
              ) : (
                <>
                  <DetailBox>
                    {page.sector_id === 2 ? (
                      <YoutubeDetail page={page} id={page.nowShoing} />
                    ) : page.sector_id === 1 ? (
                      <OpinionDetail />
                    ) : (
                      <InsightDetail page={page} id={page.nowShoing} />
                    )}
                    {/* <div>id: {page.nowShoing}</div>
                    <div>디테일 페이지 보는중</div>
                    <button
                      onClick={() => {
                        handleExitDetail(page.sector_id);
                      }}
                    >
                      나가기
                    </button> */}
                  </DetailBox>
                  <MoreContents page={page} id={page.nowShoing} />
                  <Subscription />
                </>
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
const DetailBox = styled.div`
  margin: -16px;
  margin-bottom: 20px;
  background-color: ${backgroundColor.secondary};
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
