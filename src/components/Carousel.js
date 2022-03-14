import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { badgeColor, buttonColor } from '../styles/colors';
import SlidingContent from './SlidingContent';

const Carousel = () => {
  const sliderLength = 3;
  const itemRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const autoSilde = setInterval(() => {
      setCurrentItem((prev) => {
        if (prev === sliderLength - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);
    return () => {
      clearInterval(autoSilde);
    };
  }, []);

  useEffect(() => {
    itemRef.current.style.transition = 'all 0.5s';
    itemRef.current.style.transform = `translateX(-${
      (currentItem * 100) / sliderLength
    }%)`;
  }, [currentItem]);

  const scrollToItem = (idx) => {
    setCurrentItem(idx);
  };

  return (
    <Container>
      <SlideContainer>
        <SliderItems ref={itemRef} sliderLength={sliderLength}>
          {[0, 0, 0].map((item, idx) => (
            <SlidingContent key={idx} />
          ))}
        </SliderItems>
      </SlideContainer>
      <ButtonContainer>
        <Indicator>
          {[0, 0, 0].map((item, idx) => (
            <Index
              key={idx}
              onClick={() => scrollToItem(idx)}
              isShow={currentItem === idx}
            />
          ))}
        </Indicator>
      </ButtonContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SlideContainer = styled.div`
  overflow: hidden;
`;

const SliderItems = styled.div`
  display: flex;
  width: ${(props) => `${props.sliderLength * 100}%`};
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 1.1rem;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2rem;
`;

const Index = styled.div`
  width: ${(props) => (props.isShow ? '5px' : '4px')};
  height: ${(props) => (props.isShow ? '5px' : '4px')};
  border-radius: 100%;

  background: ${(props) =>
    props.isShow ? buttonColor.primary : badgeColor.news};
  transition: all 0.5s;
  cursor: pointer;
`;
