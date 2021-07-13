import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import api from '../api';
import PartList from './_PartList';
import {
  ContentBox,
  BookDetailBox,
  BookDetailTitle,
  BookDetailDescription,
  RatingBox,
  RatingTitle,
  StarBox,
  RatingNumber,
  RatingCount,
  LikeButton,
  ReviewBox,
  ReviewTitle,
  ReviewList,
  ReviewListItem,
  ReviewEmptyListItem,
  ReviewField,
} from './BookPage.styles';

const StarIcon = () => (
  <svg width={36} height={36} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}>
    <path
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1}
      d={
        'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      }
    />
  </svg>
);

const LikeIcon = () => (
  <svg width={32} height={32} viewBox={'0 0 20 20'} fill={'currentColor'}>
    <path
      fillRule={'evenodd'}
      d={
        'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
      }
      clipRule={'evenodd'}
    />
  </svg>
);

interface RouteParams {
  bookId: string | undefined;
}

function BookPage() {
  const { bookId } = useParams<RouteParams>();
  const bookIdNum = Number(bookId) || 0;

  const { data: book } = useQuery(`book/${bookIdNum}`, async () => {
    const data = api.book('get', bookIdNum);
    return data;
  });

  if (book === undefined) return null;
  return (
    <>
      <PartList />
      <ContentBox>
        <div>
          <img src={book.imageUrl} width={360} alt={`${book.title} 책 표지`} />
        </div>
        <BookDetailBox>
          <BookDetailTitle>{book.title}</BookDetailTitle>
          <BookDetailDescription>{book.description}</BookDetailDescription>
          <RatingBox>
            <RatingTitle>평균</RatingTitle>
            <StarBox>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </StarBox>
            <RatingNumber>{`${book.averageRating} / 5`}</RatingNumber>
            <RatingCount>{`${book.reviewerCount}명이 평가`}</RatingCount>
            <LikeButton>
              <LikeIcon />
              <span>위시리스트에 추가</span>
            </LikeButton>
          </RatingBox>
          <ReviewBox>
            <ReviewTitle>리뷰</ReviewTitle>
            <ReviewList>
              {book.reviews.length === 0 && (
                <ReviewEmptyListItem>리뷰가 없어요</ReviewEmptyListItem>
              )}
              {book.reviews.map((el) => (
                <ReviewListItem>
                  {el.reviewId}
                  {el.averageRating}
                  {el.content}
                </ReviewListItem>
              ))}
            </ReviewList>
            <ReviewField>리뷰를 추가하려면 로그인해주세요.</ReviewField>
          </ReviewBox>
        </BookDetailBox>
      </ContentBox>
    </>
  );
}

export default BookPage;
