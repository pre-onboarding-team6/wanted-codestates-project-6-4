import styled from '@emotion/styled';

export const ContentBox = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  background-color: white;
`;

export const Badge = styled.button`
  width: auto;
  margin: 3px;
  padding: 2px 6px;
  height: auto;
  background-color: ${(props) => props.color};
  border: none;
  color: white;
  border-radius: 4px;
`;

export const Subscribe = styled.button`
  width: auto;
  height: auto;
  margin: 3px;
  padding: 8px 10px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.font ? props.font : 'white')};
  border-radius: 15px;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
