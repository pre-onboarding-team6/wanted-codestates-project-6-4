import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { backgroundColor, fontSize } from '../../styles/colors';
import LikeShare from '../LikeShare';
import DetailTitle from './DetailTitle';

export default function YoutubeDetail({ page, id }) {
  const ref = useRef(null);
  const detailPage = page.content.filter((content) => content.id === id);

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [id]);

  return (
    <DetailContainer ref={ref}>
      <DetailTitle sectorId={2} />
      <iframe
        width="100%"
        height="200px"
        src={`https://www.youtube.com/embed/${detailPage[0].link}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <ContentTitle>{detailPage[0].title}</ContentTitle>
      <Content>{detailPage[0].body}</Content>
      <LikeShare
        likeText={'좋아요'}
        shareText={'공유하기'}
        fontSize={fontSize.sm}
        iconSize={fontSize.sm}
      />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ContentTitle = styled.div`
  font-size: ${fontSize.md};
  margin: 20px 3px;
  padding: 10px 15px;
  text-align: center;
  line-height: 28px;
  background-color: ${backgroundColor.primary};
`;

const Content = styled.div`
  font-size: ${fontSize.base};
  margin: 10px 30px 30px;
  text-align: left;
  line-height: 25px;
  white-space: pre-wrap;
`;
