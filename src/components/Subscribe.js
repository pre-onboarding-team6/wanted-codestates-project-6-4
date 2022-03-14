import React from 'react';
import { ContentBox, Subscribe } from '../styles/styles';
import styled from '@emotion/styled';
import { buttonColor, fontSize, textColor } from '../styles/colors';

const Subscription = (props) => {
  const openLink = () => {
    window.open('https://sandbank.io');
  };

  return (
    <SubscriptionComponent>
      <TextBox>
        <InfoText>매주 새로운 코인 지식을 드려요</InfoText>
        <Title>샌드뱅크 오리지널</Title>
      </TextBox>
      <SubscribeBtn
        color={buttonColor.primary}
        fontSize={fontSize.xxs}
        onClick={openLink}
      >
        구독하기
      </SubscribeBtn>
    </SubscriptionComponent>
  );
};

export default Subscription;

const SubscriptionComponent = styled(ContentBox)`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscribeBtn = styled(Subscribe)`
  width: 55px;
  height: 26px;
`;

const InfoText = styled.span`
  font-size: ${fontSize.xxs};
  color: ${textColor.secondary};
`;

const Title = styled.span`
  margin-top: 0.25rem;
  font-size: ${fontSize.base};
  color: ${buttonColor.primary};
`;
