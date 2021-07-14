import styled from '@emotion/styled';
import { Github, LogoType1 } from '../assets';
import Modal from './Modal';

const LoginLogoIconBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  transition: transform 250ms, background-color 250ms;
  color: var(--ultimate-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled.span`
  margin-top: 16px;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  color: rgba(255, 255, 255, 0.72);
`;

const LoginBox = styled.div`
  margin-top: 48px;

  & > * + * {
    margin-top: 16px;
  }
`;

const LoginAnchor = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.72);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  line-height: 1.5rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  padding: 4px 8px;
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.8);
  }

  &:active {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const GITHUB_LOGIN_URI = 'https://github.com/login/oauth/authorize';
const CLIENT_ID = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
const SCOPE = 'scope=user';
const REDIRECT_URI = `redirect_uri=${window.origin}/oauth/github`;
const LOGIN_URI = `${GITHUB_LOGIN_URI}?${CLIENT_ID}&${SCOPE}&${REDIRECT_URI}`;

export interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({ open, onClose }: LoginModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <LoginLogoIconBox>
        <LogoType1 width={72} height={72} />
      </LoginLogoIconBox>
      <LoginText>HelloWings 로그인</LoginText>
      <LoginBox>
        <LoginAnchor href={LOGIN_URI}>
          <Github width={32} height={32} />
          <span>Github 계정으로 로그인</span>
        </LoginAnchor>
      </LoginBox>
    </Modal>
  );
}

export default LoginModal;
