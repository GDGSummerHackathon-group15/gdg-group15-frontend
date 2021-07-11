import { useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import api from '../api';
import { PartListBase, PartListItem } from './PartList.styles';

interface RouteParams {
  partId: string | undefined;
}

function PartList() {
  const { partId } = useParams<RouteParams>();
  const history = useHistory();

  const { data } = useQuery('parts', async () => {
    const data = await api.parts('get');
    return data;
  });

  return (
    <PartListBase>
      {data?.map((el) => (
        <PartListItem
          onClick={() => {
            history.push(`/parts/${el.partId}`);
          }}
          data-selected={el.partId === Number(partId)}
          key={el.partId}
        >
          {el.partName}
        </PartListItem>
      ))}
    </PartListBase>
  );
}

export default PartList;
