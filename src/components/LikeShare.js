import React, { useState } from 'react';
import styled from '@emotion/styled';

import LikeFull from '../icons/LikeFull';
import Like from '../icons/Like';
import Share from '../icons/Share';
import { textColor } from '../styles/colors';
import { decreaseLike, increaseLike } from '../redux/reducers/infoDataReducer';
import { useDispatch } from 'react-redux';

// 새로 올라왔어요 컴포넌트는 기본으로 사용 <LikeShare />

// 디테일 페이지 fontSize, iconSize는 둘다 base
// 디테일 페이지 likeText="좋아요", shareText="공유하기"

// link는 컨텐츠 url ex.) link="https://sandbank.io"

// 더보기 컴포넌트 fontSize, iconSize는 둘다 sm
// 디테일 페이지 likeText={likeCount}, shareText="공유하기"
// 더보기 컴포넌트는 likeCount set함수 필요(setLikeCount)

export default function LikeShare({
  likeText,
  shareText,
  fontSize,
  iconSize,
  content,
  setLikeCount,
}) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const likeContents = () => {
    setLike((prev) => !prev);
    console.log(content);
    if (like) {
      dispatch(decreaseLike({ content }));
    } else {
      dispatch(increaseLike({ content }));
    }
  };

  const openContents = () => {
    window.open(content.link);
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
