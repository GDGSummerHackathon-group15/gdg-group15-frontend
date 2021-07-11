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

export const UserProfile = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;

export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bdbdbd;
  border-radius: 50%;
`;

export const AvatorImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #bdbdbd;
  object-fit: cover;
`;

const styles = {
  Base,
  Navigation,
  UserProfile,
  Avatar,
  AvatorImage,
};

export default styles;
