export interface ApiError {
  message: string;
  code?: string;
}

export interface HealthResponse {
  status: "ok";
  timestamp: string;
  app: string;
}
