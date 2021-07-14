import styled from '@emotion/styled';
import Modal from './Modal';
import type { ModalProps } from './Modal';

const BookTitle = styled.h3`
  margin-block: 0;
  margin-inline: 0;
  width: 90%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  word-break: keep-all;
  color: var(--primary-dark);
`;

const BookDescription = styled.p`
  margin-block: 1.25rem;
  width: 90%;
  height: 100%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  word-break: keep-all;
  color: var(--primary-dark);
  overflow-y: auto;
`;

interface BookInfo {
  title: string;
  description: string;
}

export interface BookInfoModalProps extends ModalProps {
  info?: BookInfo;
}

function BookInfoModal({ open, onClose, info }: BookInfoModalProps) {
  if (info === undefined) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <BookTitle>{info.title}</BookTitle>
      <BookDescription>{info.description}</BookDescription>
    </Modal>
  );
}

export default BookInfoModal;
