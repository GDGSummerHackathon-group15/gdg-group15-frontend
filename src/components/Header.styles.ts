import styled from '@emotion/styled';

export const Base = styled.header`
  height: 4.5rem;
  width: 100%;
  border-bottom: 1px solid var(--primary-blue);
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  margin-left: auto;
  margin-right: 1.125rem;
`;

const styles = {
  Base,
  Navigation,
};

export default styles;
