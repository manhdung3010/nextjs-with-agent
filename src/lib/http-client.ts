export class AppError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
}

export async function httpClient<T>(
  input: RequestInfo | URL,
  init?: RequestOptions,
): Promise<T> {
  const { timeoutMs = 10_000, headers, ...rest } = init ?? {};
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(input, {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      let errorMessage = "Request failed";
      let errorCode: string | undefined;

      try {
        const errorBody = (await response.json()) as {
          message?: string;
          code?: string;
        };
        errorMessage = errorBody.message ?? errorMessage;
        errorCode = errorBody.code;
      } catch {
        // no-op
      }

      throw new AppError(response.status, errorMessage, errorCode);
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new AppError(408, "Request timeout");
    }

    throw error;
  } finally {
    clearTimeout(timer);
  }
}
