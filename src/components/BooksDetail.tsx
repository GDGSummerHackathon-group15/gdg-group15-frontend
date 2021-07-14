import { useLocation } from 'react-router-dom';
import ContentTitle from './ContentTitle';
import BooksList from './BooksList';

interface LocationState {
  subCategoryId: number;
  subCategoryTitle: string;
}

function BooksDetail() {
  const { state } = useLocation<Partial<LocationState>>();

  return (
    <>
      <ContentTitle stepText={state.subCategoryTitle} />
      <BooksList subCategoryId={state.subCategoryId} />
    </>
  );
}

export default BooksDetail;
