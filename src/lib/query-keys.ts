/**
 * Centralised query key factory.
 *
 * Convention: use arrays so keys compose and invalidate predictably.
 *
 * Usage:
 *   useQuery({ queryKey: queryKeys.health.all() })
 *   useQuery({ queryKey: queryKeys.users.detail(userId) })
 *   queryClient.invalidateQueries({ queryKey: queryKeys.users.all() })
 */
export const queryKeys = {
  // ── Health ────────────────────────────────────────────────────────────
  health: {
    all: () => ["health"] as const,
  },

  // ── Example: Users ────────────────────────────────────────────────────
  // Uncomment and rename for your domain entity.
  //
  // users: {
  //   all:    ()         => ["users"]                     as const,
  //   lists:  ()         => ["users", "list"]             as const,
  //   list:   (filters)  => ["users", "list", filters]    as const,
  //   details:()         => ["users", "detail"]           as const,
  //   detail: (id)       => ["users", "detail", id]       as const,
  // },
};
