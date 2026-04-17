import { HealthCheck } from "@/components/shared/health-check";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-14">
      <section className="space-y-3">
        <p className="text-sm font-medium text-blue-600">
          Next.js Base Template
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Next.js + Agent-ready base code
        </h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          App Router, TypeScript, Tailwind, React Query, Zod, testing, CI, and
          reusable agent skills for faster project setup.
        </p>
      </section>

      <HealthCheck />

      <section className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-base font-semibold">What&apos;s included</h2>
        <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-300">
          <li>Strict TypeScript + ESLint + Prettier + Husky + lint-staged</li>
          <li>Vitest + Testing Library + Playwright setup</li>
          <li>React Query provider + fetch wrapper + env validation via Zod</li>
          <li>.agents/skills templates for consistent AI-assisted workflows</li>
        </ul>
      </section>
    </main>
  );
}
