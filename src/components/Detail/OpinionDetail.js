import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { PROXY } from '../../redux/reducers/infoDataReducer';
import { backgroundColor } from '../../styles/colors';
import DetailTitle from './DetailTitle';

export default function OpinionDetail({ page, id }) {
  const [embed, setEmbed] = useState('');

  useEffect(() => {
    const getPost = async () => {
      const detailPage = page.content.filter((content) => content.id === id);
      const res = await fetch(PROXY + '/' + detailPage[0].link);
      const data = await res.text();
      setEmbed(data);
    };
    getPost();
  }, [page, id]);

  return (
    <DetailContainer>
      <DetailTitle sectorId={1} />
      <Iframe
        title="showcase"
        srcDoc={embed}
        frameBorder={0}
        sandbox="allow-same-origin"
      />
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
  flex-grow: 1;
  height: calc(100% + 2rem);
`;

const Iframe = styled.iframe`
  width: 100%;
  flex-grow: 1;
  background-color: white;
`;
