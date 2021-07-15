import * as React from 'react';
import { useQuery } from 'react-query';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import api from '../api';
import {
  SliderBox,
  SliderItemBox,
  ImageBox,
  ImageDetail,
  ImageDetailLink,
} from './BookList.styles';

interface SliderProps {
  items: any[];
}

const Slider = ({ items }: SliderProps) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 2,
    mode: 'free-snap',
    spacing: 16,
    centered: true,
    loop: false,
  });

  React.useEffect(() => {
    if (slider) slider.resize();
  }, [items, slider]);

  const [isHoverBookId, setIsHoverBookId] = React.useState<number | undefined>(
    undefined
  );

  return (
    <SliderBox className={'keen-slider'} ref={sliderRef}>
      {items.map((el) => (
        <SliderItemBox className={'keen-slider__slide'} key={el.bookId}>
          <ImageBox
            onMouseEnter={() => setIsHoverBookId(el.bookId)}
            onMouseLeave={() => setIsHoverBookId(undefined)}
          >
            {isHoverBookId === el.bookId && (
              <ImageDetail>
                <ImageDetailLink to={`/books/${el.bookId}`}>
                  상세보기
                </ImageDetailLink>
              </ImageDetail>
            )}
            <img src={el.imageUrl} alt={`${el.title} 책 표지`} width={360} />
          </ImageBox>
        </SliderItemBox>
      ))}
    </SliderBox>
  );
};

export interface BookListProps {
  subCategoryId: number;
}

function BookList({ subCategoryId }: BookListProps) {
  const { data: books } = useQuery(
    `subCategories/${subCategoryId}`,
    async () => {
      const data = await api.subCategories('get', subCategoryId);
      return data;
    }
  );

  if (books === undefined) return null;
  return <Slider items={books} />;
}

export default BookList;
