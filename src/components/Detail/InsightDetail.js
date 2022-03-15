import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { backgroundColor, buttonColor, fontSize } from '../../styles/colors';
import { Subscribe } from '../../styles/styles';
import LikeShare from '../LikeShare';
import DetailTitle from './DetailTitle';

export default function InsightDetail({ page, id }) {
  const ref = useRef(null);
  const detailPage = page.content.filter((content) => content.id === id);
  const openReport = () => {
    window.open(`${detailPage[0].link}`);
  };

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [id]);

  return (
    <DetailContainer ref={ref}>
      <DetailTitle sectorId={3} />
      <ContentTitle>{detailPage[0].title}</ContentTitle>
      <ImageContainer>
        <Image src={detailPage[0].image} alt={detailPage[0].title} />
      </ImageContainer>
      <Content>{detailPage[0].body}</Content>
      <SubscribeBtn
        color={buttonColor.secondary}
        fontSize={fontSize.base}
        onClick={openReport}
      >
        전체 리포트 읽기
      </SubscribeBtn>
      <LikeShare
        likeText={'좋아요'}
        shareText={'공유하기'}
        fontSize={fontSize.sm}
        iconSize={fontSize.sm}
        content={detailPage[0]}
      />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ContentTitle = styled.div`
  font-size: ${fontSize.md};
  margin: 0px 3px 10px;
  padding: 10px;
  text-align: center;
  line-height: 28px;
  background-color: ${backgroundColor.primary};
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;
const Content = styled.div`
  font-size: ${fontSize.base};
  margin: 30px;
  text-align: left;
  line-height: 25px;
  white-space: pre-wrap;
`;
const SubscribeBtn = styled(Subscribe)`
  width: 170px;
  height: 32px;
  margin-bottom: 30px;
  color: ${buttonColor.primary};
`;
