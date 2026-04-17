"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { httpClient } from "@/lib/http-client";
import { type HealthResponse } from "@/types/api";

export function HealthCheck() {
  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.health,
    queryFn: () => httpClient<HealthResponse>("/api/health"),
  });

  if (isLoading) {
    return <p className="text-sm text-zinc-500">Checking app health...</p>;
  }

  if (isError || !data) {
    return <p className="text-sm text-red-600">Health check failed.</p>;
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        API status:{" "}
        <span className="font-semibold text-emerald-600">{data.status}</span>
      </p>
      <p className="mt-1 text-xs text-zinc-500">
        {new Date(data.timestamp).toLocaleString()}
      </p>
    </div>
  );
}
