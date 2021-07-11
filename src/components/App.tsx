import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MainPage from './MainPage';
import PartPage from './PartPage';
import BookPage from './BookPage';
import GithubLoginCallback from './GithubLoginCallback';

import AuthProvider from '../context';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
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
              <GithubLoginCallback />
            </Route>
          </Switch>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
