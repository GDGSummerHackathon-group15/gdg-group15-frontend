import * as React from 'react';
import { Main, Header, HeaderText, Container } from './PageTemplate.styles';

export interface PageTemplateProps {
  children?: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Main>
      <Header>
        <HeaderText>Hello Wings</HeaderText>
      </Header>
      <Container>{children}</Container>
    </Main>
  );
}

export default PageTemplate;
