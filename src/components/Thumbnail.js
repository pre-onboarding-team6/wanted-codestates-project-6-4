import styled from '@emotion/styled';

export default function Thumbnail({ ...rest }) {
  return (
    <ImageContainer>
      <Image {...rest} alt="" />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
