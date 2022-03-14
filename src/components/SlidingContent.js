import styled from '@emotion/styled';
import { forwardRef } from 'react';
import Thumbnail from './Thumbnail';

const SlidingContent = () => {
  return (
    <Container>
      <Image src="https://cdn-images-1.medium.com/max/800/1*OBA2wnz9g7IMXoi0sf9ltQ.jpeg" />
      <ContentTitle>new content test</ContentTitle>
    </Container>
  );
};

export default forwardRef(SlidingContent);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3px;
`;

const Image = styled(Thumbnail)``;

const ContentTitle = styled.div`
  margin-top: 6px;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 9px 6px;
  font-weight: 600;
`;
