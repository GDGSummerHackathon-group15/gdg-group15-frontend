import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../api';
import PartList from './PartList';
import BookList from './BookList';
import {
  Main,
  Header,
  HeaderText,
  Container,
  ContentBox,
  CategoryList,
  CategoryListItem,
  SubCategoryList,
  SubCategoryListItem,
} from './PartPage.styles';

interface RouteParams {
  partId: string | undefined;
}

function PartPage() {
  const { partId } = useParams<RouteParams>();
  const partIdNum = Number(partId) || 0;

  const { data: part } = useQuery(`part/${partIdNum}`, async () => {
    const data = await api.part('get', partIdNum);
    return data;
  });

  const [catetoryId, setCategoryId] = React.useState<number | undefined>(part?.[0].mainCategoryId);

  const [subCatetoryId, setSubCategoryId] = React.useState<number | undefined>(
    part?.[0].subCategoryResponses[0].subCategoryId
  );

  return (
    <Main>
      <Header>
        <HeaderText>HelloWings</HeaderText>
      </Header>
      <Container>
        <PartList />
        <ContentBox>
          <CategoryList>
            {part?.map((el) => (
              <CategoryListItem
                onClick={() => {
                  setCategoryId(el.mainCategoryId);
                }}
                data-selected={el.mainCategoryId === catetoryId}
                key={el.mainCategoryId}
              >
                <span>{el.title}</span>
              </CategoryListItem>
            ))}
          </CategoryList>
          {catetoryId !== undefined && (
            <SubCategoryList>
              {part
                ?.find((el) => el.mainCategoryId === catetoryId)
                ?.subCategoryResponses.map((el) => (
                  <SubCategoryListItem
                    onClick={() => {
                      setSubCategoryId(el.subCategoryId);
                    }}
                    data-selected={el.subCategoryId === subCatetoryId}
                    key={el.subCategoryId}
                  >
                    <span>{el.title}</span>
                  </SubCategoryListItem>
                ))}
            </SubCategoryList>
          )}
          {subCatetoryId !== undefined && <BookList subCategoryId={subCatetoryId} />}
        </ContentBox>
      </Container>
    </Main>
  );
}

export default PartPage;
