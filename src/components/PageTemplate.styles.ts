import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, var(--secondary-blue-grey), var(--secondary-beige));
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.5rem);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
`;

const styles = {
  Main,
  Container,
};

export default styles;
