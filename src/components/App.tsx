import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>GDG Hackathon group15</div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
