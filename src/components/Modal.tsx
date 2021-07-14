import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Close } from '../assets';

const Base = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: calc(100% - 5rem);
  background-color: rgba(0, 0, 0, 0.36);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;

  &:hover {
    transform: scale(0.9);
    background-color: rgba(255, 255, 255, 0.56);
  }

  &:active {
    transform: scale(0.9);
    background-color: rgba(255, 255, 255, 0.56);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: calc(100% - 3rem);
`;

interface PortalProps {
  children?: React.ReactNode;
}

function Portal({ children }: PortalProps) {
  const root = document.getElementById('root');

  if (root === null) return null;
  if (children === undefined) return null;
  return ReactDOM.createPortal(children, root);
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <Portal>
      <Base>
        <Title>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>
        </Title>
        <Content>{children}</Content>
      </Base>
    </Portal>
  );
}

export default Modal;
