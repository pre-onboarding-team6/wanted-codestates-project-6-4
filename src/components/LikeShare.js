import React, { useState } from 'react';
import styled from '@emotion/styled';

import LikeFull from '../icons/LikeFull';
import Like from '../icons/Like';
import Share from '../icons/Share';
import { textColor } from '../styles/colors';
import { decreaseLike, increaseLike } from '../redux/reducers/infoDataReducer';
import { useDispatch } from 'react-redux';

export default function LikeShare({
  likeText,
  shareText,
  fontSize,
  iconSize,
  content,
}) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const likeContents = () => {
    setLike((prev) => !prev);
    if (like) {
      dispatch(decreaseLike({ content }));
    } else {
      dispatch(increaseLike({ content }));
    }
  };

  const openContents = () => {
    content?.sector_id === 2
      ? window.open(`https://www.youtube.com/watch?v=${content.link}`)
      : window.open(content.link);
  };

  return (
    <Container>
      <LikeIcon onClick={likeContents}>
        {like ? (
          <LikeFull width={iconSize} height={iconSize} fill="red" />
        ) : (
          <Like width={iconSize} height={iconSize} />
        )}
        <Text textSize={fontSize}>{likeText}</Text>
      </LikeIcon>
      <ShareIcon onClick={openContents}>
        <Share width={iconSize} height={iconSize} />
        <Text textSize={fontSize}>{shareText}</Text>
      </ShareIcon>
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

const Text = styled.span`
  font-size: ${(props) => props.textSize};
  margin-left: 2px;
  color: ${textColor.secondary};
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
