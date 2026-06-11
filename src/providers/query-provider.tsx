"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

import { AppError } from "@/lib/http-client";
import { logger } from "@/lib/logger";

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError(error, query) {
        // Only log unexpected errors (not 401/403 which are handled by auth)
        if (error instanceof AppError && error.status >= 500) {
          logger.error("[QueryCache] Server error", {
            status: error.status,
            message: error.message,
            queryKey: query.queryKey,
          });
        }
      },
    }),
    mutationCache: new MutationCache({
      onError(error) {
        if (error instanceof AppError && error.status >= 500) {
          logger.error("[MutationCache] Server error", {
            status: error.status,
            message: error.message,
          });
        }
      },
    }),
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        retry: (failureCount, error) => {
          // Never retry on 4xx client errors
          if (error instanceof AppError && error.status < 500) return false;
          return failureCount < 2;
        },
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
