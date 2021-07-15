import * as React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import api from '../api';
import { ChevronDown } from '../assets';

const List = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  width: calc(100% - 4rem);
  height: calc(100% - 6.5rem);
  margin: 16px 32px 48px 32px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  overflow-y: auto;
`;

const ListItem = styled.li`
  width: 100%;
  position: relative;
`;

const ListItemTitle = styled.div`
  height: 2.5rem;
  border-bottom: 1px solid rgba(50, 122, 174, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
`;

const ListItemText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  color: var(--primary-dark);
  user-select: none;
`;

const ListItemIconButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  color: var(--primary-dark);

  svg {
    transition: transform 250ms, background-color 250ms;
  }

  &[data-open='true'] {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const SubCategoryList = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 16px;
`;

const SubCategoryListItem = styled.li`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  padding: 8px;
  border-bottom: 1px solid rgba(50, 122, 174, 0.4);
`;

interface SubCategory {
  subCategoryId: number;
  title: string;
}

interface Category {
  mainCategoryId: number;
  title: string;
  subCategoryResponses: SubCategory[];
}

function CategoryItem({
  mainCategoryId,
  title,
  subCategoryResponses,
}: Category) {
  const [open, setOpen] = React.useState<boolean>(false);

  const history = useHistory();

  return (
    <ListItem>
      <ListItemTitle onClick={() => setOpen((prev) => !prev)}>
        <ListItemText>{title}</ListItemText>
        <ListItemIconButton data-open={open}>
          <ChevronDown width={20} height={20} />
        </ListItemIconButton>
      </ListItemTitle>
      {open && (
        <SubCategoryList>
          {subCategoryResponses.map((el) => (
            <SubCategoryListItem
              onClick={() => {
                history.push({
                  pathname: '/books',
                  state: {
                    subCategoryId: el.subCategoryId,
                    subCategoryTitle: el.title,
                  },
                });
              }}
              key={el.subCategoryId}
            >
              {el.title}
            </SubCategoryListItem>
          ))}
        </SubCategoryList>
      )}
    </ListItem>
  );
}

export interface CategoryListProps {
  partId: number;
}

function CategoryList({ partId }: CategoryListProps) {
  const { data } = useQuery(`parts/${partId}`, async () => {
    const resp = await api.part('get', partId);
    return resp;
  });

  return (
    <List>
      {data?.map((el) => (
        <CategoryItem
          mainCategoryId={el.mainCategoryId}
          title={el.title}
          subCategoryResponses={el.subCategoryResponses ?? []}
          key={el.mainCategoryId}
        />
      ))}
    </List>
  );
}

export default CategoryList;
