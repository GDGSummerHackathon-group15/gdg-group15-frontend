import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import WebFont from 'webfontloader';
import { Routes } from './components';
import GithubLoginCallback from './components/GithubLoginCallback';

const queryClient = new QueryClient();

WebFont.load({
  custom: {
    families: ['iA Writer Duo', 'iA Writer Duospace', 'iA Writer Mono', 'iA Writer Quattro'],
    urls: [
      './fonts/iAWriterDuoS.css',
      './fonts/iAWriterDuospace.css',
      './fonts/iAWriterMonoS.css',
      './fonts/iAWriterQuattroS.css',
    ],
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
        <Route path={'/oauth/github'} exact>
          <GithubLoginCallback />
        </Route>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
