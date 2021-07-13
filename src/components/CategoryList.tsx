import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import api from '../api';

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
`;

const ListItem = styled.li`
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid rgba(50, 122, 174, 0.6);
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
`;

const ListItemText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  color: var(--primary-dark);
`;

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
        <ListItem key={el.mainCategoryId}>
          <ListItemText>{el.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
