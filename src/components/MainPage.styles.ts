import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, var(--secondary-beige), var(--secondary-blue-grey));
`;

export const CategoryBox = styled.div`
  width: 20rem;
  height: fit-content;
  max-height: 45rem;
  padding: 4rem;
  background-color: rgba(235, 235, 235, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 480px) {
    width: 25rem;
  }

  @media (min-width: 720px) {
    width: 40rem;
  }

  @media (min-width: 960px) {
    width: 55rem;
  }

  @media (min-width: 1280px) {
    width: 75rem;
  }
`;

export const CategoryTitle = styled.h2`
  color: var(--primary-dark);
  margin-block-start: 1.25rem;
  margin-block-end: 1.25rem;
  font-size: 2.5rem;
  font-family: Noto Sans KR;
  letter-spacing: 0.5px;
`;

export const CategoryGrid = styled.ul`
  --grid-item-size: 14rem;

  list-style: none;
  overflow-y: auto;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  margin-top: 1.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 480px) {
    --grid-item-size: 20rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, var(--grid-item-size));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, var(--grid-item-size));
  }
`;

export const CategoryGridItem = styled.li`
  width: var(--grid-item-size);
  height: calc(var(--grid-item-size) / 2);
  background-color: #f2f3f7;
  color: var(--primary-dark);
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  transition: color 250ms, background-color 250ms, box-shadow 250ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.875rem;
    font-weight: 500;
    line-height: 2.25rem;
  }

  &:hover {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.08);
    background-color: var(--secondary-blue-grey);
  }

  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.08);
    background-color: var(--secondary-blue-grey);
  }
`;

const styles = {
  Main,
  CategoryBox,
  CategoryTitle,
  CategoryGrid,
  CategoryGridItem,
};

export default styles;
