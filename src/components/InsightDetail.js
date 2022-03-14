import styled from '@emotion/styled';
import { backgroundColor, buttonColor, fontSize } from '../styles/colors';
import { Subscribe } from '../styles/styles';
import DetailTitle from './DetailTitle';

const data = {
  id: 30,
  sector_id: 3,
  title:
    '[Research Report] #2 포트폴리오에 비트코인을 추가하면 오히려 손해보는 날이 적어진다?',
  body: '비트코인은 다른 자산들과 낮은 상관관계를 가지며, 이는 주식, 채권, 금 등 기존 금융 자산에서 발견할 수 없는 독특한 특성입니다.\n\n낮은 상관관계의 이유 세 가지는 다음과 같습니다: \n1) 기존 금융자산과 다른 리스크 팩터 \n2) 비트코인 역할에 대한 다양한 기대감 3) 비트코인 투자자층과 기존 금융 자산 투자자층의 괴리\n\n비트코인의 낮은 상관관계로 포트폴리오의 안정성 향상에 기여할 수 있습니다. → 미국, 한국 60/40 포트폴리오의 손해를 보는 날이 줄어드는 효과 확인할 수 있습니다.',
  image:
    'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-105.png',
  link: 'https://sandbankofficial.notion.site/Research-Report-2-4d47efc744fa463696b0dc5e8bc8fa4f',
  upload_date: '2021-10-19',
  like_cnt: 1,
  like_top: 1,
};

export default function InsightDetail({}) {
  const openLink = () => {
    window.open('');
  };

  return (
    <DetailContainer>
      <DetailTitle />
      <ContentTitle>{data.title}</ContentTitle>
      <ImageContainer>
        <Image src={data.image} alt={data.title} />
      </ImageContainer>
      <Content>{data.body}</Content>
      <SubscribeBtn
        color={buttonColor.secondary}
        fontSize={fontSize.xxs}
        onClick={openLink}
      >
        전체 리포트 읽기
      </SubscribeBtn>
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
  margin: 0px 3px 10px;
  padding: 10px;
  text-align: center;
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
  font-size: ${fontSize.sm};
  padding: 15px;
  text-align: left;
`;
const SubscribeBtn = styled(Subscribe)`
  width: 130px;
  height: 26px;
`;
