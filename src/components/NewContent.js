import styled from '@emotion/styled';
import { badgeColor, fontSize } from '../styles/colors';
import { Badge, ContentBox } from '../styles/styles';
import Carousel from './Carousel';

export default function NewContent({ news }) {
  return (
    <Container>
      <Title>
        새로 올라왔어요<Badge color={badgeColor.new}>new</Badge>
      </Title>
      <Carousel items={news} />
    </Container>
  );
}

const Container = styled(ContentBox)`
  font-size: ${fontSize.sm};
  width: 100%;
  height: fit-content;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.base};
  font-weight: 700;

  margin-bottom: 0.7rem;
`;
