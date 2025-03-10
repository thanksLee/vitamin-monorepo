import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 재시도 횟수
      retryDelay: 1000,
      staleTime: Infinity, // 쿼리에 대한 데이터가 자동으로 새로고침되거나 재검증되지 않는다.
      refetchInterval: false, // 특정초마다 데이터를 새로고침한다.
      enabled: false, // 자동실행방지 (true로 되어 있어야 invalidateQueries 에서 실행이 된다.)
    },
    mutations: {
      retry: 3, // 재시도 횟수
    },
  },
});

export interface TanstackQueryProps {
  readonly children: ReactNode;
}

export function TanstackQuery({ children }: TanstackQueryProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
