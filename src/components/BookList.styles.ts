import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SliderBox = styled.div`
  flex: 1;
  width: calc(100% - 24.25rem);
  min-width: 45rem;
`;

export const SliderItemBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageBox = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const ImageDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
`;

export const ImageDetailLink = styled(Link)`
  text-decoration: none;
  padding: 0.625rem 1.5rem;
  background-color: var(--secondary-blue-grey);
  box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.8),
    1px 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  transition: box-shadow 250ms;
  color: var(--primary-dark);
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.8),
      inset 1px 1px 3px rgba(0, 0, 0, 0.08);
  }

  &:active {
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.8),
      inset 1px 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const styles = {
  SliderBox,
  SliderItemBox,
  ImageBox,
  ImageDetail,
  ImageDetailLink,
};

export default styles;
