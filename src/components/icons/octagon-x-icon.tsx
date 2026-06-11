import type { IconProps } from "./types";

/** Octagon X — error / destructive state */
export function OctagonXIcon({ width = 24, height = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15.312 2H8.688L2 8.688v6.624L8.688 22h6.624L22 15.312V8.688z" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
