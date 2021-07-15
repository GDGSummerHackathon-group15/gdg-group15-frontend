import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { ChevronLeft } from '../assets';

const Base = styled.div`
  height: 2.5rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
`;

const PrevButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;

  &:hover {
    transform: scale(0.95);
    background-color: rgba(255, 255, 255, 0.48);
  }

  &:active {
    transform: scale(0.95);
    background-color: rgba(255, 255, 255, 0.48);
  }
`;

export const Title = styled.h3`
  margin-block: 0;
  margin-inline: 0;
  box-sizing: border-box;
  height: 2rem;
  font-size: 1rem;
  font-family: 'iA Writer Quattro';
  line-height: 1.5rem;
  padding: 4px 8px;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  color: var(--primary-dark);
  margin-left: 0.5rem;
  user-select: none;
`;

export interface PartTitleProps {
  stepText?: string;
}

function ContentTitle({ stepText }: PartTitleProps) {
  const history = useHistory();

  const handleClickPrev = () => {
    history.goBack();
  };

  return (
    <Base>
      <PrevButton onClick={handleClickPrev}>
        <ChevronLeft width={24} height={24} />
      </PrevButton>
      {stepText && <Title>{stepText}</Title>}
    </Base>
  );
}

export default ContentTitle;
