import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ContentBox } from '../styles/styles';
import MoreContents from './MoreContents';
import Thumbnail from './Thumbnail';

class Page {
  constructor(content) {
    this.content = content;
    this.nowShoing = undefined;
  }
}

export default function SlidingPage({ tab, sector, content }) {
  const [showContent, setShowContent] = useState(false);
  const [contentTranslateX, setContentTranslateX] = useState(0);
  const [pages, setPages] = useState([]);
  console.log(pages);

  useEffect(() => {
    const newPages = sector.map((item) => {
      const contentInSector = content.filter(
        (singleContent) => singleContent.sector_id === item.id,
      );
      return new Page(contentInSector);
    });
    setPages(newPages);
  }, [sector, content]);

  useEffect(() => {
    const index = sector.findIndex((singleSector) => singleSector.id === tab);
    setContentTranslateX((index * -100) / sector.length);
    if (index >= 0) {
      setTimeout(() => {
        setShowContent(true);
      });
    }
  }, [tab, sector]);

  const showDetail = (page, index, contentId) => {
    const newPage = page;
    newPage.nowShoing = contentId;
    const newPages = [...pages];
    newPages[index] = newPage;
    setPages(newPages);
  };

  return (
    <SlidingView
      sector={sector.length}
      contentTranslateX={contentTranslateX}
      showContent={showContent}
    >
      {showContent &&
        pages.map((page, index) => (
          <RelateView key={index}>
            <AbsoluteScrollView>
              {!page.nowShoing ? (
                page.content.map((item, contentIndex) => (
                  <ContentBox key={'' + index + contentIndex}>
                    <div>새로 올라왔어요</div>
                    <button
                      onClick={() => {
                        showDetail(page, index, item.id);
                      }}
                    >
                      {item.id} 보기
                    </button>
                  </ContentBox>
                ))
              ) : (
                <ContentBox>
                  <div>{page.nowShoing} 보는중</div>
                  <Thumbnail src="https://cdn-images-1.medium.com/max/800/1*OBA2wnz9g7IMXoi0sf9ltQ.jpeg" />
                  <button
                    onClick={() => {
                      showDetail(page, index);
                    }}
                  >
                    나가기
                  </button>
                </ContentBox>
              )}
              <MoreContents sectorId={index + 1} />
            </AbsoluteScrollView>
          </RelateView>
        ))}
    </SlidingView>
  );
}
const SlidingView = styled.div`
  flex-grow: 1;
  display: flex;
  width: ${(props) => props.sector * 100 + '%'};
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
