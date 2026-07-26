"use client";
import { type ReactNode, useMemo, useState } from "react";
import { environmentManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";


function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (environmentManager.isServer()) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }
    return browserQueryClient
  }
}

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useMemo(() => getQueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
