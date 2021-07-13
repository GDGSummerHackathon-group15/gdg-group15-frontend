import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import WebFont from 'webfontloader';
import { Routes } from './components';
// import GithubLoginCallback from './components/GithubLoginCallback';

import AuthProvider from './context';

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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
