import styled from '@emotion/styled';
import { backgroundColor } from '../../styles/colors';
import DetailTitle from './DetailTitle';

export default function OpinionDetail({}) {
  return (
    <DetailContainer>
      <DetailTitle sectorId={1} />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  background-color: ${backgroundColor.secondary};
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
