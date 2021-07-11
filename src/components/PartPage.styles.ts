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

export const CategoryList = styled.ul`
  width: 14.25rem;
  height: 100%;
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 1rem;

  border-left: 1px solid var(--primary-blue);
  border-right: 1px solid var(--primary-blue);
`;

export const CategoryListItem = styled.li`
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #203241;
  height: 4rem;
  display: flex;
  align-items: center;

  &[data-selected='true'] {
    border-bottom: 2px solid var(--primary-blue);
  }
`;

export const SubCategoryList = styled.ul`
  width: 10rem;
  height: 100%;
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 1rem;
`;

export const SubCategoryListItem = styled.li`
  padding: 0 1rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: #203241;
  height: 3rem;
  display: flex;
  align-items: center;

  &[data-selected='true'] {
    border-bottom: 2px solid var(--primary-blue);
  }
`;

const styles = {
  Main,
  Header,
  HeaderText,
  Container,
  ContentBox,
  CategoryList,
  CategoryListItem,
  SubCategoryList,
  SubCategoryListItem,
};

export default styles;
