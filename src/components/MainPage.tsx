import { useQuery } from 'react-query';
import api from '../api';
import {
  Main,
  CategoryBox,
  CategoryTitle,
  CategoryGrid,
  CategoryGridItem,
} from './MainPage.styles';

function MainPage() {
  const { data } = useQuery('parts', async () => {
    const data = await api.parts('get');
    return data;
  });

  return (
    <Main>
      <CategoryBox>
        <CategoryTitle>관심있는 분야를 선택해주세요!</CategoryTitle>
        <CategoryGrid>
          {data?.map((el) => (
            <CategoryGridItem key={el.partId}>
              <span>{el.partName}</span>
            </CategoryGridItem>
          ))}
        </CategoryGrid>
      </CategoryBox>
    </Main>
  );
}

export default MainPage;
