import * as React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import api from '../api';
import Avator from './Avator';
import LoginModal from './LoginModal';

const LoginButton = styled.button`
  display: inline-flex;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  color: var(--primary-dark);
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  margin-right: 4px;
  transition: transform 250ms, background-color 250ms;

  &:hover {
    transform: scale(0.9) perspective(1px);
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: scale(0.9) perspective(1px);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

function Login() {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  const { data } = useQuery(
    'user',
    async () => {
      const resp = await api.user('get');
      return resp;
    },
    { enabled: api.isLoggedIn }
  );

  return (
    <>
      {data === undefined ? (
        <LoginButton onClick={toggleOpen}>로그인</LoginButton>
      ) : (
        <Avator src={data.avatarUrl} />
      )}
      <LoginModal open={open} onClose={toggleOpen} />
    </>
  );
}

export default Login;
