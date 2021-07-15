import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import api from '../api';
import Avator from './Avator';
import RatingBox from './RatingBox';

const List = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  width: 100%;
  height: 100%;
  min-height: calc(100% - 5rem);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  min-height: 3rem;
  font-family: 'iA Writer Quattro';
  font-weight: 700;
  border-bottom: 1px solid rgba(32, 50, 65, 0.18);
  padding: 8px;
  display: flex;
  flex-direction: column;
  color: rgba(32, 50, 65, 0.92);
`;

const AuthorBox = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    height: inherit;
    display: flex;
    align-items: center;
  }

  & > div:first-of-type {
    span {
      margin-left: 0.5rem;
    }
  }

  span {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

const ReviewBox = styled.div`
  margin-top: 8px;
`;

const UserBox = styled.div`
  margin-top: 8px;
`;

export interface ReviewItemProps {
  id?: number;
  author: string;
  authorImage?: string | null;
  rating: number;
  content: string;
  editable?: boolean;
  goEdit?: ({
    reviewId,
    content,
  }: {
    reviewId: number;
    content: string;
  }) => void;
}

function ReviewItem({
  id,
  author,
  authorImage,
  rating,
  content,
  editable,
  goEdit,
}: ReviewItemProps) {
  const handleClickEdit = () => {
    if (id && goEdit) goEdit({ reviewId: id, content });
  };

  return (
    <ListItem>
      <AuthorBox>
        <div>
          <Avator src={authorImage} />
          <span>{author}</span>
        </div>
        <div>
          <RatingBox rating={rating} />
        </div>
      </AuthorBox>
      <ReviewBox>{content}</ReviewBox>
      {editable && (
        <UserBox>
          <button onClick={handleClickEdit}>수정</button>
        </UserBox>
      )}
    </ListItem>
  );
}

export interface ReviewListProps {
  bookId: number;
  goEdit: ({
    reviewId,
    content,
  }: {
    reviewId: number;
    content: string;
  }) => void;
}

function ReviewList({ bookId, goEdit }: ReviewListProps) {
  const { data } = useQuery(`books/${bookId}`, async () => {
    const resp = await api.book('get', bookId);
    return resp.reviews;
  });

  const { data: user } = useQuery(
    'user',
    async () => {
      const resp = await api.user('get');
      return resp;
    },
    { enabled: api.isLoggedIn }
  );

  return (
    <List>
      {data === undefined || (data !== undefined && data.length === 0) ? (
        <ReviewItem author={''} rating={0} content={'리뷰가 없어요!'} />
      ) : (
        data.map((el) => (
          <ReviewItem
            id={el.reviewId}
            author={el.userResponse.name}
            rating={el.averageRating}
            content={el.content}
            editable={el.userResponse.userId === user?.userId}
            goEdit={goEdit}
          />
        ))
      )}
    </List>
  );
}

export default ReviewList;
