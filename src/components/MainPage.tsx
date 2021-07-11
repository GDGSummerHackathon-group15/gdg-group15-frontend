import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import api from '../api';
import PageTemplate from './PageTemplate';
import { CategoryBox, CategoryTitle, CategoryGrid, CategoryGridItem } from './MainPage.styles';

function MainPage() {
  const { data } = useQuery('parts', async () => {
    const data = await api.parts('get');
    return data;
  });

  const history = useHistory();

  return (
    <PageTemplate>
      <CategoryBox>
        <CategoryTitle>관심있는 분야를 선택해주세요!</CategoryTitle>
        <CategoryGrid>
          {data?.map((el) => (
            <CategoryGridItem
              onClick={() => {
                history.push(`/parts/${el.partId}`);
              }}
              key={el.partId}
            >
              <span>{el.partName}</span>
            </CategoryGridItem>
          ))}
        </CategoryGrid>
      </CategoryBox>
    </PageTemplate>
  );
}

export default MainPage;
