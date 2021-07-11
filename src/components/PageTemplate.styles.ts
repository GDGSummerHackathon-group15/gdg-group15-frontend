import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, var(--secondary-beige), var(--secondary-blue-grey));
`;

export const Header = styled.header`
  height: 4.5rem;
  width: 100%;
  border-bottom: 1px solid var(--primary-blue);
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  font-family: Noto Sans KR;
  margin-left: 4rem;
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
  Header,
  HeaderText,
  Container,
};

export default styles;
