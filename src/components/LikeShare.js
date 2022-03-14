import React, { useState } from 'react';
import styled from '@emotion/styled';

import LikeFull from '../icons/LikeFull';
import Like from '../icons/Like';
import Share from '../icons/Share';
import { textColor } from '../styles/colors';

export default function LikeShare({
  likeText,
  shareText,
  fontSize,
  iconSize,
  link,
  setLikeCount,
}) {
  const [like, setLike] = useState(false);

  const likeContents = () => {
    setLike((prev) => !prev);
    setLikeCount && setLikeCount((prev) => (like ? prev - 1 : prev + 1));
  };

  const openContents = () => {
    window.open(link);
  };

  return (
    <Container>
      <LikeIcon id="likeBtn" onClick={likeContents}>
        {like ? (
          <LikeFull width={iconSize} height={iconSize} fill="red" />
        ) : (
          <Like width={iconSize} height={iconSize} />
        )}
      </LikeIcon>
      <Label htmlFor="likeBtn" textSize={fontSize}>
        {likeText}
      </Label>
      <ShareIcon id="shareBtn" onClick={openContents}>
        <Share width={iconSize} height={iconSize} />
      </ShareIcon>
      <Label htmlFor="likeBtn" textSize={fontSize}>
        {shareText}
      </Label>
    </Container>
  );
}

const Container = styled.div`
  padding: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${textColor.secondary};
`;

const Label = styled.label`
  font-size: ${(props) => props.textSize};
  margin-left: 2px;
`;

const LikeIcon = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  width: auto;
  height: auto;
  cursor: pointer;
  text-align: center;
`;

const ShareIcon = styled(LikeIcon)`
  margin-left: 6px;
`;
