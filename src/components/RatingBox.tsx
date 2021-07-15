import styled from '@emotion/styled';
import { Star } from '../assets';

const Base = styled.div`
  width: 7.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  color: var(--primary-dark);
  position: relative;

  span {
    position: absolute;
    display: inline-block;
    height: 1.5rem;
    overflow: hidden;
    white-space: nowrap;
  }

  span:last-of-type {
    width: var(--rating-width);
  }
`;

export interface RatingBoxProps {
  rating: number;
}

function RatingBox({ rating }: RatingBoxProps) {
  const style = {
    '--rating-width': `${rating * 24}px`,
  } as React.CSSProperties;

  return (
    <Base>
      <span>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      <span style={style}>
        <Star fill={'#f4df4d'} />
        <Star fill={'#f4df4d'} />
        <Star fill={'#f4df4d'} />
        <Star fill={'#f4df4d'} />
        <Star fill={'#f4df4d'} />
      </span>
    </Base>
  );
}

export default RatingBox;
