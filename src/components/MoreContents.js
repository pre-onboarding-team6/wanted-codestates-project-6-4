import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fontSize, badgeColor, buttonColor } from '../styles/colors';
import { Badge, ContentBox } from '../styles/styles';

// sectorId / 1 = opinion, 2 = youtube, 3 = insight
const MoreContents = ({ sectorId }) => {
  const {
    data: { content: contents },
  } = useSelector((state) => state.infoData);

  const [section, setSection] = useState('');
  const [badge, setBadge] = useState('');
  const [sectorContents, setSectorContents] = useState([]);
  const [spread, setSpread] = useState(false);

  // title 및 badge 이름 설정
  useEffect(() => {
    console.log(sectorId);
    if (sectorId === 2) {
      setSection('블록체인 NOW');
      setBadge('Youtube');
    } else if (sectorId === 1) {
      setSection('알쓸B잡');
      setBadge('News');
    } else {
      setSection('어떻게 투자할까');
      setBadge('Report');
    }
  }, [sectorId]);

  // sector에 따라 filtering
  useEffect(() => {
    if (sectorId === 2) {
      setSectorContents(
        spread
          ? contents.filter((content) => content.sector_id === 2)
          : contents.filter((content) => content.sector_id === 2).slice(0, 6),
      );
    } else if (sectorId === 1) {
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
  }, [sectorId, contents, spread]);

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
    <ContentBox>
      <TitleWrapper>
        <Title>{section}</Title>
        <Badge
          color={
            sectorId === 1
              ? badgeColor.news
              : sectorId === 2
              ? badgeColor.youtube
              : badgeColor.report
          }
        >
          {badge}
        </Badge>
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
    </ContentBox>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: ${fontSize.md};
  margin-right: 0.8rem;
  white-space: nowrap;
  letter-spacing: -3px;
`;

const ContentWrapper = styled.div`
  padding: 0.1rem 0.25rem;
  cursor: default;
`;

const ImgBox = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const OtherBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${fontSize.sm};
  color: #ccc;
  margin: 0.25rem 0 0.5rem;

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
  font-size: ${fontSize.md};
  font-weight: bold;
  color: ${buttonColor.primary};
  background-color: ${buttonColor.secondary};
  border-radius: 15px;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default MoreContents;
