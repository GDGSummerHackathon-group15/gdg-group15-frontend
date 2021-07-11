import * as React from 'react';
import Header from './Header';
import { Main, Container } from './PageTemplate.styles';

export interface PageTemplateProps {
  children?: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Main>
      <Header />
      <Container>{children}</Container>
    </Main>
  );
}

export default PageTemplate;
