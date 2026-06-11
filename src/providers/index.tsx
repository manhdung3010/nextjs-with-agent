"use client";

import { PropsWithChildren } from "react";

import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <Toaster />
      </QueryProvider>
    </ThemeProvider>
  );
}
