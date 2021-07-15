import * as React from 'react';
import { useSlider } from 'react-use';
import { useLocation } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import styled from '@emotion/styled';
import api from '../api';
import RatingBox from './RatingBox';

const WriteBox = styled.div`
  padding: 8px;
  width: 100%;
  height: calc(100% - 4rem);
  display: flex;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;

const WriteRating = styled.div`
  width: 100%;
  height: 3rem;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  margin: 12px 0 4px;
`;

const RatingSliderBox = styled.div`
  width: 7.5rem;
  height: 1.5rem;
`;

const RatingSliderValueBox = styled.div`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  color: var(--primary-dark);
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 6px 2px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  color: var(--primary-dark);
  height: 2rem;
  padding: 4px 8px;
  margin: 0;
  transition: transform 250ms;

  span {
    font-size: 0.875rem;
    font-weight: 700;
    font-family: 'iA Writer Quattro';
    line-height: 1.5rem;
  }

  &:hover {
    transform: scale(0.95) perspective(1px);
  }

  &:active {
    transform: scale(0.95) perspective(1px);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  color: var(--primary-dark);
`;

interface LocationState {
  subCategoryId: number;
  subCategoryTitle: string;
}

export interface ReviewWriteProps {
  bookId: number;
  onClose: () => void;
}

function ReviewWrite({ bookId, onClose }: ReviewWriteProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { value } = useSlider(ref);

  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  const { state } = useLocation<Partial<LocationState>>();

  const queryClient = useQueryClient();

  const reviewSubmit = useMutation(
    'review',
    async ({ rating, content }: { rating: number; content: string }) => {
      const resp = await api.review('post', {
        bookId,
        averageRating: rating,
        content,
      });
      return resp;
    },
    {
      onSuccess() {
        if (state.subCategoryId) {
          queryClient.invalidateQueries(`subCategory/${state.subCategoryId}`);
        }
      },
    }
  );

  const handleClick = async () => {
    const el = textareaRef.current;
    if (el === null) return;

    if (el.value === '') return;
    const content = el.value;
    const rating = Number((value * 5).toFixed(1));

    await reviewSubmit.mutateAsync({ rating, content });
    onClose();
  };

  return (
    <>
      <WriteBox>
        <TextArea
          placeholder={'여기에 리뷰를 입력해주세요!'}
          ref={textareaRef}
        />
      </WriteBox>
      <WriteRating>
        <RatingSliderBox ref={ref}>
          <RatingBox rating={value * 5} />
        </RatingSliderBox>
        <RatingSliderValueBox>
          <span>{(value * 5).toFixed(1)} / 5.0</span>
        </RatingSliderValueBox>
        <SubmitButton onClick={handleClick}>
          <span>등록</span>
        </SubmitButton>
      </WriteRating>
    </>
  );
}

export default ReviewWrite;
