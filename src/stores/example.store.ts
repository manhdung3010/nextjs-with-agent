import { create } from "zustand";
import { devtools } from "zustand/middleware";

// ─── Example counter store ────────────────────────────────────────────────────
// Rename this file and the store to match your domain.
// Convention: src/stores/<domain>.store.ts
//
// Usage in a Client Component:
//   import { useCounterStore } from "@/stores/example.store"
//   const { count, increment } = useCounterStore()

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 }), false, "increment"),
      decrement: () => set((s) => ({ count: s.count - 1 }), false, "decrement"),
      reset: () => set({ count: 0 }, false, "reset"),
    }),
    { name: "CounterStore" },
  ),
);
