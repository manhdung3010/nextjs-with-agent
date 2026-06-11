import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image for all pages.
 * Pages can override this by placing their own opengraph-image.tsx
 * inside the route segment folder.
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
 */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-2px",
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#a1a1aa",
          marginTop: 16,
        }}
      >
        {siteConfig.description}
      </div>
    </div>,
    size,
  );
}
