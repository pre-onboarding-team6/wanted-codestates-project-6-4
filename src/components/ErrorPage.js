import styled from '@emotion/styled';
import { fontSize } from '../styles/colors';

export default function ErrorPage({ error }) {
  return (
    <Container>
      <Title>CORS를 방지하기 위해 아래 경로를 경유합니다.</Title>
      <SubTitle>
        <mark>https://cors-anywhere.herokuapp.com/corsdemo</mark>
      </SubTitle>
      <Iframe
        title="showcase"
        src="https://cors-anywhere.herokuapp.com/corsdemo"
        frameBorder={0}
      />
      <ErrorContainer>
        <ErrorMessage>Error : {error.message}</ErrorMessage>
        <ErrorStack>{error.stack}</ErrorStack>
      </ErrorContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: ${fontSize.base};
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: ${fontSize.base};
  font-weight: 500;
  text-align: center;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 280px;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
`;

const ErrorContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: #333;
`;

const ErrorMessage = styled.div`
  font-size: ${fontSize.lg};
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const ErrorStack = styled.div`
  line-height: 1.5;
  word-break: break-word;
`;
