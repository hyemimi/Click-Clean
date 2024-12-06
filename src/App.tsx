import React from 'react';
import RootRoutes from './routes/RootRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';
import UserDataProvider from 'context/UserDataProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <UserDataProvider>
          <RootRoutes />
        </UserDataProvider>
      </CookiesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
