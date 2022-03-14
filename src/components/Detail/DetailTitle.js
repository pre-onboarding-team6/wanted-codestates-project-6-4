import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import ChevronLeft from '../../icons/ChevronLeft';
import { exitDetail } from '../../redux/reducers/infoDataReducer';
import { fontSize } from '../../styles/colors';

export default function DetailTitle({ sectorId }) {
  const dispatch = useDispatch();
  const handleExitDetail = (sectorId) => {
    dispatch(
      exitDetail({
        sectorId,
      }),
    );
  };

  return (
    <SectorTitleWrap>
      <SVGWrap
        onClick={() => {
          handleExitDetail(sectorId);
        }}
      >
        <ChevronLeft fill="#909090" />
      </SVGWrap>
      <SectorTitle>
        {sectorId === 2
          ? '블록체인 NOW'
          : sectorId === 1
          ? '알쓸B잡'
          : '어떻게 투자할까'}
      </SectorTitle>
    </SectorTitleWrap>
  );
}

const SectorTitleWrap = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVGWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const SectorTitle = styled.h1`
  font-size: ${fontSize.md};
`;
