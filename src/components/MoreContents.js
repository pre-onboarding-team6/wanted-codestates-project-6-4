import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

// sector = youtube, opinion, insight
const MoreContents = ({ sector }) => {
  const [section, setSection] = useState();
  const [contents, setContents] = useState([]);
  const [sectorContents, setSectorContents] = useState([]);
  const [spread, setSpread] = useState(false);

  // title 설정
  useEffect(() => {
    if (sector === 'youtube') {
      setSection('블록체인 NOW');
    } else if (sector === 'opinion') {
      setSection('알쓸B잡');
    } else {
      setSection('어떻게 투자할까');
    }
  }, [sector]);

  // data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://cors-proxy-server11.herokuapp.com/https://test.daground.io/info/contents',
          {
            cache: 'default',
            headers: {
              'Cache-Control': 'max-age=' + 3000,
              'TEST-AUTH': 'wantedpreonboarding',
            },
          },
        );
        const data = await res.json();
        setContents(data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [sector]);

  // sector에 따라 filtering
  useEffect(() => {
    if (sector === 'youtube') {
      setSectorContents(
        spread
          ? contents.filter((content) => content.sector_id === 2)
          : contents.filter((content) => content.sector_id === 2).slice(0, 6),
      );
    } else if (sector === 'opinion') {
      setSectorContents(
        spread
          ? contents.filter((content) => content.sector_id === 1)
          : contents.filter((content) => content.sector_id === 1).slice(0, 6),
      );
    } else {
      setSectorContents(
        spread
          ? contents.filter((content) => content.sector_id === 3)
          : contents.filter((content) => content.sector_id === 3).slice(0, 6),
      );
    }
  }, [sector, contents, spread]);

  const gotoDetail = (link, sectorId) => {
    // go to Detail
    const url =
      sectorId === 2 ? `https://www.youtube.com/watch?v=${link}` : link;

    console.log(url);
  };

  const showMore = () => {
    setSpread((prev) => !prev);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{section}</Title>
        <span>Youtube</span>
      </TitleWrapper>
      {sectorContents.map(
        ({ id, image, like_cnt, link, title, upload_date, sector_id }, index) =>
          index > 2 ? (
            <ContentWrapper
              key={id}
              onClick={() => gotoDetail(link, sector_id)}
            >
              <ImgBox>
                <img src={image} alt={title} />
              </ImgBox>
              <OtherBox>
                <DateSpan>{upload_date}</DateSpan>
                <Icons>
                  <HeartBox>🤍{like_cnt}</HeartBox>
                  <ShareBox>
                    <a href="https://sandbank.io" target="blank">
                      💌공유하기
                    </a>
                  </ShareBox>
                </Icons>
              </OtherBox>
            </ContentWrapper>
          ) : null,
      )}
      <Button onClick={showMore}>{spread ? '접기' : '더보기'}</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 15px 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  margin-right: 12px;
`;

const ContentWrapper = styled.div`
  padding: 5px 10px;
  cursor: default;
`;

const ImgBox = styled.div`
  width: 100%;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const OtherBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ccc;

  @media (max-width: 335px) {
    flex-direction: column;
  }
`;

const DateSpan = styled.span``;

const Icons = styled.div``;

const HeartBox = styled.span`
  margin-right: 8px;
`;

const ShareBox = styled.span`
  a {
    color: #ccc;
    text-decoration: none;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: blue;
  background-color: lightblue;
  border-radius: 15px;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default MoreContents;
