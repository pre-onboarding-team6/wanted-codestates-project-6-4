import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { NotionRenderer } from 'react-notion';

const NotionEmbed = ({ notionId }) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPage = async () => {
      const recordMap = await fetch(
        `https://notion-api.splitbee.io/v1/page/${notionId}`,
      );
      const response = await recordMap.json();
      setResponse(response);
    };
    getPage();
    setLoading(false);

    return () => {
      setLoading(true);
    };
  }, [notionId]);

  return (
    <Container>
      {loading ? (
        <Loading>loading....</Loading>
      ) : (
        <NotionRenderer blockMap={response} fullPage={true} darkMode={false} />
      )}
    </Container>
  );
};

export default NotionEmbed;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Loading = styled.div`
  width: 100%;
`;
