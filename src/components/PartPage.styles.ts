import styled from '@emotion/styled';

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
    position: relative;
    border-bottom: 2px solid var(--primary-blue);

    &::before {
      content: '';
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      top: 50%;
      left: -1.25rem;
      background-color: var(--primary-blue);
    }
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
    position: relative;
    border-bottom: 2px solid var(--primary-blue);

    &::before {
      content: '';
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      top: 50%;
      left: -1.25rem;
      background-color: var(--primary-blue);
    }
  }
`;

const styles = {
  ContentBox,
  CategoryList,
  CategoryListItem,
  SubCategoryList,
  SubCategoryListItem,
};

export default styles;
