// ─── Shared API types ─────────────────────────────────────────────────────────

/** Generic success response wrapper used by all route handlers. */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/** Generic paginated response wrapper. */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

/** Generic error response shape returned by route handlers. */
export interface ApiError {
  message: string;
  code?: string;
  /** Field-level validation errors (e.g. from Zod). */
  errors?: Record<string, string[]>;
}

/** Health check endpoint response. */
export interface HealthResponse {
  status: "ok";
  timestamp: string;
  app: string;
}
