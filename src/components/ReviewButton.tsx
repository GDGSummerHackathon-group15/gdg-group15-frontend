import * as React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import api from '../api';
import { Annotation } from '../assets';
import Modal from './Modal';

const Button = styled.button`
  width: 100%;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--primary-dark);
  transition: transform 250ms, background-color 250ms;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'iA Writer Quattro';
  line-height: 1.5rem;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.56);
  }

  &:active {
    transform: scale(0.98) perspective(1px);
    background-color: rgba(255, 255, 255, 0.56);
  }
`;

const List = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  width: 100%;
  height: calc(100% - 10rem);
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReviewBox = styled.div``;

const Box = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;

interface ReviewItemProps {
  author: string;
  rating: number;
  content: string;
}

function ReviewItem({ author, rating, content }: ReviewItemProps) {
  return (
    <ListItem>
      <AuthorBox>
        <div>{author}</div>
        <div>{rating} / 5.0</div>
      </AuthorBox>
      <ReviewBox>{content}</ReviewBox>
    </ListItem>
  );
}

interface ReviewButtonProps {
  bookId: number;
}

function ReviewButton({ bookId }: ReviewButtonProps) {
  const { data } = useQuery(`books/${bookId}`, async () => {
    const resp = await api.book('get', bookId);
    return resp.reviews;
  });

  const [open, setOpen] = React.useState<boolean>(false);
  const toggleModal = () => setOpen((prev) => !prev);

  return (
    <>
      <Button onClick={toggleModal}>
        <Annotation />
        <span>리뷰 보러가기</span>
      </Button>
      <Modal open={open} onClose={toggleModal}>
        <List>
          {data === undefined || (data !== undefined && data.length === 0) ? (
            <ReviewItem author={''} rating={0} content={'리뷰가 없어요!'} />
          ) : (
            data.map((el) => (
              <ReviewItem
                author={el.userResponse.name}
                rating={el.averageRating}
                content={el.content}
              />
            ))
          )}
        </List>
        <Box></Box>
      </Modal>
    </>
  );
}

export default ReviewButton;
