import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showDetail } from '../redux/reducers/infoDataReducer';
import Thumbnail from './Thumbnail';

export default React.memo(function SlidingContent({ item }) {
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
            'https://dummyimage.com/600x400/cfd6f9/487ff7.jpg&text=Sandbank';
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
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 0.6rem;
  padding: 1rem 0.8rem;

  font-weight: 600;
  line-height: 1rem;
  &:hover {
    background: rgb(0, 0, 0, 0.03);
  }
`;
