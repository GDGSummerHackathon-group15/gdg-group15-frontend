import * as React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import styled from '@emotion/styled';
import api from '../api';
import { Star, Heart } from '../assets';
import BookInfoModal from './BookInfoModal';
import ReviewButton from './ReviewButton';
import LoginModal from './LoginModal';
import type KeenSlider from 'keen-slider';

const Base = styled.div`
  margin: 16px 0;
  height: calc(100% - 2rem);
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  width: 100%;
  height: calc(100% - 12rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 75%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Summary = styled.div`
  margin: 16px 0;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 90%;
  }

  & > div + div {
    margin-top: 8px;
  }
`;

const InfoButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  line-height: 1rem;
  text-align: center;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingBox = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 4px;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
`;

const WishButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--prism-pink);
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

interface BookProps {
  bookId: number;
  title: string;
  description: string;
  imageUrl: string;
  averageRating: number;
  slider: KeenSlider;
}

function BookCard({ bookId, title, description, imageUrl, averageRating, slider }: BookProps) {
  const [openInfo, setOpenInfo] = React.useState<boolean>(false);
  const toggleInfo = () => setOpenInfo((prev) => !prev);

  React.useEffect(() => {
    if (slider) {
      if (openInfo) slider.controls(false);
      else slider.controls(true);
    }
  }, [slider, openInfo]);

  const { data: user } = useQuery(
    'user',
    async () => {
      const resp = await api.user('get');
      return resp;
    },
    { enabled: api.isLoggedIn }
  );

  const info = { title, description };

  const likeThisBook = user?.wishes.reduce((acc, item) => {
    if (item.bookId === bookId) acc = true;
    return acc;
  }, false);

  const queryClient = useQueryClient();
  const addWish = useMutation(
    'wish',
    async () => {
      const resp = await api.wish('post', bookId);
      return resp;
    },
    {
      onSuccess() {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const removeWish = useMutation(
    'wish',
    async () => {
      const resp = await api.wish('delete', bookId);
      return resp;
    },
    {
      onSuccess() {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const [openLogin, setOpenLogin] = React.useState<boolean>(false);
  const toggleLogin = () => setOpenLogin((prev) => !prev);

  const handleClickWish = () => {
    if (!api.isLoggedIn) {
      toggleLogin();
      return;
    }

    if (likeThisBook) {
      removeWish.mutate();
      return;
    }

    addWish.mutate();
  };

  return (
    <Base>
      <ImageBox>
        <Image src={imageUrl} alt={`${title} 표지`} />
      </ImageBox>
      <Summary>
        <div>
          <InfoButton onClick={toggleInfo}>
            <span>{title}</span>
          </InfoButton>
        </div>
        <InfoBox>
          <RatingBox>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </RatingBox>
          <WishButton onClick={handleClickWish}>
            <Heart fill={likeThisBook ? '#f0a1bf' : 'none'} />
          </WishButton>
        </InfoBox>
        <div>
          <ReviewButton bookId={bookId} />
        </div>
      </Summary>
      <BookInfoModal open={openInfo} onClose={toggleInfo} info={info} />
      <LoginModal open={openLogin} onClose={toggleLogin} />
    </Base>
  );
}

export default BookCard;
