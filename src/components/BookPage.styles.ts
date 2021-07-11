import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, var(--secondary-beige), var(--secondary-blue-grey));
`;

export const Header = styled.header`
  height: 4.5rem;
  width: 100%;
  border-bottom: 1px solid var(--primary-blue);
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  font-family: Noto Sans KR;
  margin-left: 4rem;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.5rem);
  padding: 2rem 4rem;
`;

export const ContentBox = styled.div`
  margin-top: 4rem;
  height: calc(100% - 10.5rem);
  display: flex;
`;

export const BookDetailBox = styled.div`
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`;

export const BookDetailTitle = styled.h3`
  font-size: 2rem;
  margin-block: 0;
  padding-block: 0;
  padding-inline: 0;
`;

export const BookDetailDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-block: 1rem;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingTitle = styled.span`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

export const StarBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  color: var(--beige);
`;

export const RatingNumber = styled.span`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

export const RatingCount = styled.span`
  margin-left: 1.25rem;
  color: #203241;
  font-size: 1rem;
  line-height: 2.25rem;
`;

export const LikeButton = styled.button`
  margin-left: 1rem;
  height: 36px;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;

  svg {
    color: var(--secondary-beige);
  }

  span {
    margin-left: 0.25rem;
  }

  &:active {
    box-shadow: inset 0 2px 3px 0 rgba(31, 38, 135, 0.4);
  }
`;

export const ReviewBox = styled.div`
  margin-top: 0.75rem;
`;

export const ReviewTitle = styled.span`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

export const ReviewList = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  width: 100%;
  padding: 1rem;
`;

export const ReviewListItem = styled.li``;

export const ReviewEmptyListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 400;
  color: #203241;
`;

export const ReviewField = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset -1px 1px 2px rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 6px;
  color: #203241;
`;

const styles = {
  Main,
  Header,
  HeaderText,
  Container,
  ContentBox,
  BookDetailBox,
  BookDetailTitle,
  BookDetailDescription,
  RatingBox,
  RatingTitle,
  StarBox,
  RatingNumber,
  RatingCount,
  LikeButton,
  ReviewBox,
  ReviewTitle,
  ReviewList,
  ReviewListItem,
  ReviewEmptyListItem,
  ReviewField,
};

export default styles;
