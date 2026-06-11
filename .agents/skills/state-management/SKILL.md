---
name: state-management
description: >
  Zustand state management conventions for this project.
  Use when creating new global stores, migrating local state to global state,
  or deciding between local useState vs Zustand vs React Query.
---

# State Management Skill

## Decision guide

| State type                               | Tool                                        |
| ---------------------------------------- | ------------------------------------------- |
| Server / async data                      | **React Query** (`useQuery`, `useMutation`) |
| Global UI state (modals, sidebar, theme) | **Zustand**                                 |
| Local component state                    | **`useState` / `useReducer`**               |
| Form state                               | **React Hook Form**                         |

**Rule:** Do not put server data in Zustand. React Query is the cache.

## Zustand conventions

### File naming & location

```
src/stores/<domain>.store.ts
```

Examples:

- `src/stores/ui.store.ts` — sidebar open, modal state
- `src/stores/auth.store.ts` — current user session (if not using React Query)

### Store template

```ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MyState {
  // state
  value: string;
  // actions
  setValue: (v: string) => void;
  reset: () => void;
}

const INITIAL_STATE = {
  value: "",
};

export const useMyStore = create<MyState>()(
  devtools(
    (set) => ({
      ...INITIAL_STATE,
      setValue: (value) => set({ value }, false, "setValue"),
      reset: () => set(INITIAL_STATE, false, "reset"),
    }),
    { name: "MyStore" }, // shows in Redux DevTools
  ),
);
```

### Rules

1. **Always use `devtools` middleware** — enables Redux DevTools debugging.
2. **Name every action** (third arg to `set`) — makes time-travel debugging readable.
3. **Keep stores small and domain-focused** — one store per domain, not one global store.
4. **Never import stores in Server Components** — Zustand is client-only.
5. **Reset on logout** — call `useMyStore.getState().reset()` in the logout handler.

### Persisted store (optional)

```ts
import { persist } from "zustand/middleware";

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "system",
        setTheme: (theme) => set({ theme }, false, "setTheme"),
      }),
      { name: "theme-storage" }, // localStorage key
    ),
    { name: "ThemeStore" },
  ),
);
```

### Slice pattern (for larger stores)

Split a large store into slices if it grows beyond ~5 fields:

```ts
// slices/counter.slice.ts
export interface CounterSlice {
  count: number;
  increment: () => void;
}
export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
});

// combined store
export const useBoundStore = create<CounterSlice>()(
  devtools((...args) => ({ ...createCounterSlice(...args) })),
);
```

## Example store

See `src/stores/example.store.ts` for a working reference implementation.
