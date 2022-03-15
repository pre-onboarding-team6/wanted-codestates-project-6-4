import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { showDetail } from '../redux/reducers/infoDataReducer';
import Thumbnail from './Thumbnail';

export default forwardRef(function SlidingContent({ item }, ref) {
  const dispatch = useDispatch();
  const handleShowDetail = () => {
    dispatch(
      showDetail({
        sectorId: item.sector_id,
        contentId: item.id,
      }),
    );
  };

  return (
    <Container>
      <Image
        src={item.image}
        onError={(event) => {
          event.target.src =
            'https://cdn-images-1.medium.com/max/800/1*OBA2wnz9g7IMXoi0sf9ltQ.jpeg';
        }}
        onClick={() => {
          handleShowDetail();
        }}
      />
      <ContentTitle
        onClick={() => {
          handleShowDetail();
        }}
      >
        {item.title}
      </ContentTitle>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3px;
  cursor: pointer;
`;

const Image = styled(Thumbnail)`
  &:hover {
    opacity: 0.85;
  }
`;

const ContentTitle = styled.div`
  margin-top: 6px;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem 0.8rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.04rem;
  &:hover {
    background: rgb(0, 0, 0, 0.03);
  }
`;
