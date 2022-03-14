import styled from '@emotion/styled';
import { backgroundColor, fontSize } from '../styles/colors';
import DetailTitle from './DetailTitle';

const data = {
  id: 62,
  sector_id: 2,
  title: '부동산 시장에도 번진 크립토 금융! 이제 비트코인으로 모기지론 받는다?',
  body: "최근 암호화폐 가격이 전반적으로 모두 하락하자 비트코인, 이더리움 등 메이저 코인을 장기로 보유하려는 사람들은 오히려 더욱 늘고있습니다. \n\n캐나다 스타트업인 Ledn(레든)은 이런 투자자들을 위해 '비트코인 담보 모기지론' 상품을 내놓는다고 하는데요. 과연 크립토를 부동산 대출에 어떻게 이용하는 것일까요? 함께 알아봅니다.",
  image:
    '[https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_033.png](https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_033.png)',
  link: 'FyUSkHccOq4',
  upload_date: '2022-01-29',
  like_cnt: 0,
  like_top: 1,
};

export default function YoutubeDetail({}) {
  return (
    <DetailContainer>
      <DetailTitle />
      <iframe
        width="100%"
        height="150px"
        src={`https://www.youtube.com/embed/FyUSkHccOq4`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <ContentTitle>{data.title}</ContentTitle>
      <Content>{data.body}</Content>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  background-color: ${backgroundColor.secondary};
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.div`
  font-size: ${fontSize.sm};
  margin: 10px 3px;
  padding: 10px;
  text-align: center;
  background-color: ${backgroundColor.primary};
`;

const Content = styled.div`
  font-size: ${fontSize.sm};
  padding: 15px;
  text-align: left;
`;
