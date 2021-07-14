import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import api from '../api';
import ContentTitle from './ContentTitle';
import CategoryList from './CategoryList';

interface RouteParams {
  partId: string | undefined;
}

function PartDetail() {
  const { partId } = useParams<RouteParams>();
  const partIdNum = Number(partId) || 0;

  const { data } = useQuery('parts', async () => {
    const resp = await api.parts('get');
    return resp;
  });

  const [stepText, setStepText] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (data === undefined) return;

    const item = data.find((el) => el.partId === partIdNum);
    if (item === undefined) return;

    setStepText(item.partName);
  }, [partIdNum, data]);

  return (
    <>
      <ContentTitle stepText={stepText} />
      <CategoryList partId={partIdNum} />
    </>
  );
}

export default PartDetail;
