import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../api';
import PartList from './_PartList';
import BookList from './BookList';
import {
  ContentBox,
  ListBox,
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

  const [catetoryId, setCategoryId] = React.useState<number | undefined>(
    undefined
  );

  const [subCatetoryId, setSubCategoryId] = React.useState<number | undefined>(
    undefined
  );

  return (
    <>
      <PartList />
      <ContentBox>
        <ListBox>
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
        </ListBox>
        {subCatetoryId !== undefined && (
          <BookList subCategoryId={subCatetoryId} />
        )}
      </ContentBox>
    </>
  );
}

export default PartPage;
