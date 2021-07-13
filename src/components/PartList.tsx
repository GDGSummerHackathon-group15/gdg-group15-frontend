import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Book } from '../assets';
import api from '../api';

const List = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ListItem = styled.li`
  width: 5rem;
  height: 6.25rem;
  display: flex;
  flex-direction: column;

  &:hover {
    div {
      transform: scale(0.95);
      background-color: rgba(255, 255, 255, 0.48);
    }
  }

  &:active {
    div {
      transform: scale(0.95);
      background-color: rgba(255, 255, 255, 0.48);
    }
  }
`;

const ListItemText = styled.span`
  color: var(--primary-dark);
  margin-top: 0.25rem;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  user-select: none;
`;

const ListItemIconBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(4px);
  transition: transform 250ms, background-color 250ms;
  color: var(--ultimate-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CategoryList() {
  const { data } = useQuery('parts', async () => {
    const resp = await api.parts('get');
    return resp;
  });

  const history = useHistory();

  const handleClickParts = (partId: number) => {
    return () => history.push(`/parts/${partId}`);
  };

  return (
    <List>
      {data?.map((el) => (
        <ListItem onClick={handleClickParts(el.partId)} key={el.partId}>
          <ListItemIconBox>
            <Book width={64} height={64} />
          </ListItemIconBox>
          <ListItemText>{el.partName}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
