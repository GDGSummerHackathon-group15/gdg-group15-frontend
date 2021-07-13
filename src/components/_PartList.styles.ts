import styled from '@emotion/styled';

export const PartListBase = styled.ul`
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  display: flex;

  li + li {
    margin-left: 1.5rem;
  }
`;

export const PartListItem = styled.li`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  line-height: 2.75rem;
  vertical-align: bottom;
  font-weight: 700;
  color: rgba(32, 50, 65, 0.4);
  transition: color 250ms, font-size 250ms;

  &[data-selected='true'] {
    font-size: 2.25rem;
    color: rgba(32, 50, 65, 1);
  }

  &[data-selected='false'] {
    &:hover {
      font-size: 1.75rem;
      color: rgba(32, 50, 65, 0.8);
    }
  }
`;

const styles = {
  PartListBase,
  PartListItem,
};

export default styles;
