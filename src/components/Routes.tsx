import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';

import Layout from './Layout';
import PartList from './PartList';
import PartDetail from './PartDetails';
import BooksDetail from './BooksDetail';
import BookPage from './BookPage';

const Transition = styled(TransitionGroup)`
  position: relative;
  width: 100%;
  height: calc(100% - 2.5rem);

  .slide-in-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-in-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: transform 500ms, opacity 500ms;
  }

  .slide-in-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  .slide-in-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 500ms, opacity 500ms;
  }
`;

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function Routes() {
  const location = useLocation();

  return (
    <Layout>
      <Transition component={'main'}>
        <CSSTransition key={location.pathname} classNames={'slide-in'} timeout={500}>
          <Switch location={location}>
            <Route path={'/'} exact>
              <Page>
                <PartList />
              </Page>
            </Route>
            <Route path={'/parts/:partId'} exact>
              <Page>
                <PartDetail />
              </Page>
            </Route>
            <Route path={'/books'} exact>
              <Page>
                <BooksDetail />
              </Page>
            </Route>
            <Route path={'/books/:bookId'} exact>
              <Page>
                <BookPage />
              </Page>
            </Route>
          </Switch>
        </CSSTransition>
      </Transition>
    </Layout>
  );
}

export default Routes;
