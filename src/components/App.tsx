import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MainPage from './MainPage';
import PartPage from './PartPage';
import BookPage from './BookPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <MainPage />
          </Route>
          <Route path={'/parts/:partId'} exact>
            <PartPage />
          </Route>
          <Route path={'/books/:bookId'} exact>
            <BookPage />
          </Route>
          <Route path={'/oauth/github'} exact>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
