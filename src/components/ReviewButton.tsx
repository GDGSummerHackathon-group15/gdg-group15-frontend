import * as React from 'react';
import styled from '@emotion/styled';
import api from '../api';
import { Annotation } from '../assets';
import ReviewList from './ReviewList';
import ReviewWrite from './ReviewWrite';
import Modal from './Modal';

const Button = styled.button`
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  line-height: 1.5rem;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.56);
  }

  &:active {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.56);
  }
`;

const WriteButton = styled(Button)`
  margin: 12px 0 4px;
  height: 3rem;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.92);
`;

export interface ReviewButtonProps {
  bookId: number;
}

function ReviewButton({ bookId }: ReviewButtonProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleModal = () => setOpen((prev) => !prev);

  const [openWrite, setOpenWrite] = React.useState<boolean>(false);
  const toggleWrite = () => setOpenWrite((prev) => !prev);

  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const toggleIsEdit = () => setIsEdit((prev) => !prev);

  const handleCloseModal = () => {
    toggleModal();
    if (openWrite) toggleWrite();
    if (isEdit) toggleIsEdit();
  };

  const [initialContent, setInitialContent] = React.useState<
    string | undefined
  >(undefined);
  const [reviewId, setReviewId] = React.useState<number | undefined>(undefined);
  const handleGoEdit = ({
    reviewId,
    content,
  }: {
    reviewId: number;
    content: string;
  }) => {
    setInitialContent(content);
    setReviewId(reviewId);
    toggleIsEdit();
    toggleWrite();
  };

  return (
    <>
      <Button onClick={toggleModal}>
        <Annotation />
        <span>리뷰 보러가기</span>
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        {openWrite ? (
          <ReviewWrite
            bookId={bookId}
            onClose={handleCloseModal}
            initialContent={initialContent}
            reviewId={reviewId}
            isEdit={isEdit}
          />
        ) : (
          <>
            <ReviewList bookId={bookId} goEdit={handleGoEdit} />
            {api.isLoggedIn && (
              <WriteButton onClick={toggleWrite}>
                <Annotation />
                <span>리뷰 작성하기</span>
              </WriteButton>
            )}
          </>
        )}
      </Modal>
    </>
  );
}

export default ReviewButton;
