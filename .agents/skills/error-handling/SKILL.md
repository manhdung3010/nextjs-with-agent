---
name: error-handling
description: >
  Error handling conventions for this Next.js project.
  Use when adding error handling to route handlers, client components,
  server actions, or integrating Sentry error capturing.
---

# Error Handling Skill

## Error layers

| Layer                | Mechanism                    | File                                       |
| -------------------- | ---------------------------- | ------------------------------------------ |
| Route handlers       | `AppError` + typed responses | `src/lib/http-client.ts`                   |
| Client components    | `ErrorBoundary`              | `src/components/shared/error-boundary.tsx` |
| Pages                | `error.tsx` (route segment)  | `src/app/**/error.tsx`                     |
| Root                 | `global-error.tsx`           | `src/app/global-error.tsx`                 |
| Unhandled rejections | Sentry                       | `instrumentation-client.ts`                |

## Route handler pattern

```ts
// src/app/api/example/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import type { ApiResponse, ApiError } from "@/types/api";

const schema = z.object({ name: z.string().min(1) });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<ApiError>(
      {
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  try {
    const result = await doSomething(parsed.data);
    return NextResponse.json<ApiResponse<typeof result>>({ data: result });
  } catch (error) {
    // Log to Sentry in production
    console.error("[POST /api/example]", error);
    return NextResponse.json<ApiError>(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
```

## AppError in client fetches

`httpClient` throws `AppError` for non-2xx responses. Catch it to display user-facing messages:

```ts
import { AppError } from "@/lib/http-client";

try {
  const data = await httpClient<MyType>("/api/example", {
    method: "POST",
    body: JSON.stringify(payload),
  });
} catch (error) {
  if (error instanceof AppError) {
    if (error.status === 422) {
      // show validation errors
    } else if (error.status === 401) {
      // redirect to login
    } else {
      // generic error toast
    }
  }
}
```

## React Query error handling

React Query's global `QueryCache.onError` (in `src/providers/query-provider.tsx`) logs 5xx errors automatically. For per-query handling:

```ts
useQuery({
  queryKey: queryKeys.users.detail(id),
  queryFn: () => httpClient<User>(`/api/users/${id}`),
  throwOnError: (error) => error instanceof AppError && error.status >= 500,
});
```

## ErrorBoundary usage

```tsx
import { ErrorBoundary } from "@/components/shared/error-boundary";

// Basic
<ErrorBoundary>
  <FeatureComponent />
</ErrorBoundary>

// Custom fallback
<ErrorBoundary fallback={(error) => <MyErrorUI message={error.message} />}>
  <FeatureComponent />
</ErrorBoundary>

// With Sentry
import * as Sentry from "@sentry/nextjs";
<ErrorBoundary onError={(error, info) => Sentry.captureException(error, { extra: info })}>
  <FeatureComponent />
</ErrorBoundary>
```

## Route segment error page

```tsx
// src/app/dashboard/error.tsx
"use client";
export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Failed to load dashboard: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

## Sentry manual capture

```ts
import * as Sentry from "@sentry/nextjs";

// Capture exception with context
Sentry.captureException(error, {
  extra: { userId, action: "checkout" },
  tags: { feature: "payments" },
});

// Capture message (non-error events)
Sentry.captureMessage("Payment webhook received", "info");
```

## Rules

1. **Never expose raw error messages to the client** in production — return generic messages from route handlers.
2. **Always log on the server** before returning a 500 response.
3. **Use `AppError.status`** to distinguish 4xx (user error, don't retry) from 5xx (server error, may retry).
4. **Wrap feature subtrees** in `ErrorBoundary` — not the entire app.
5. **Provide a `reset` button** in route segment `error.tsx` pages so users can recover without a full page reload.
