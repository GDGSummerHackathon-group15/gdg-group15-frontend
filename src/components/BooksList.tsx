import * as React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import api from '../api';
import BookCard from './BookCard';

const Slider = styled.div`
  width: 100%;
  height: calc(100% - 6.5rem);
  margin-top: 16px;

  .keen-slider__slide {
    padding: 0 6px;
  }
`;

interface BookItem {
  bookId: number;
  title: string;
  description: string;
  imageUrl: string;
  averageRating: number;
  reviewerCount: number;
  reviews: {
    reviewId: number;
    averageRating: number;
    content: string;
    userResponse: {
      userId: number;
      avatorUrl: string;
      name: string;
    };
  }[];
}

interface BookSliderProps {
  items: BookItem[];
}

function BookSlider({ items }: BookSliderProps) {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1.25,
    mode: 'free-snap',
    centered: true,
    loop: true,
  });

  React.useEffect(() => {
    if (slider) slider.resize();
  }, [slider]);

  return (
    <>
      <Slider className={'keen-slider'} ref={ref}>
        {items.map((el) => (
          <div className={'keen-slider__slide'} key={el.bookId}>
            <BookCard
              bookId={el.bookId}
              title={el.title}
              description={el.description}
              imageUrl={el.imageUrl}
              averageRating={el.averageRating}
              slider={slider}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export interface BooksListProps {
  subCategoryId?: number;
}

function BooksList({ subCategoryId }: BooksListProps) {
  const { data } = useQuery(
    `subCategory/${subCategoryId}`,
    async () => {
      if (subCategoryId === undefined) throw new Error('location state error');
      const resp = await api.subCategories('get', subCategoryId);
      return resp;
    },
    { enabled: subCategoryId !== undefined }
  );

  if (data === undefined) return null;
  return <BookSlider items={data} />;
}

export default BooksList;
