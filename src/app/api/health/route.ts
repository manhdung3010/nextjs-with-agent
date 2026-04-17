import { NextResponse } from "next/server";

import { env } from "@/config/env";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    app: env.NEXT_PUBLIC_APP_NAME,
  });
}
