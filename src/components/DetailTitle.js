import styled from '@emotion/styled';
import { fontSize } from '../styles/colors';
import ChevronLeft from './ChevronLeft';

export default function DetailTitle({}) {
  return (
    <SectorTitleWrap>
      <SVGWrap>
        <ChevronLeft fill="#909090" />
      </SVGWrap>
      <SectorTitle>블록체인 NOW</SectorTitle>
    </SectorTitleWrap>
  );
}

const SectorTitleWrap = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
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
  font-size: ${fontSize.base};
`;
