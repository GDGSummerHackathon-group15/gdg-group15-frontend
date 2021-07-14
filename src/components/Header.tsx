import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { LogoType1 } from '../assets';
import Login from './Login';

const Base = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(50, 122, 174, 0.6);
  height: 2.5rem;
  padding: 0.25rem;
`;

const LogoAnchor = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  line-height: 2rem;
  color: var(--primary-blue);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.25rem;
    user-select: none;
  }
`;

function Header() {
  return (
    <Base>
      <LogoAnchor to={'/'}>
        <LogoType1 width={32} height={32} />
        <span>HelloWings</span>
      </LogoAnchor>
      <Login />
    </Base>
  );
}

export default Header;
