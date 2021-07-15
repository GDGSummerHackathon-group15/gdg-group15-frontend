import styled from '@emotion/styled';
import { User } from '../assets';

const UserImage = styled.img`
  border-radius: 50%;
`;

export interface AvatorProps {
  src: string | null | undefined;
}

function Avator({ src }: AvatorProps) {
  if (typeof src === 'string' && src !== '') {
    return <UserImage src={src} width={24} height={24} />;
  }
  return <User width={24} height={24} />;
}

export default Avator;
