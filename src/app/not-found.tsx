import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6 py-14">
      <div className="space-y-4 text-center">
        <p className="text-sm font-medium text-zinc-500">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm text-zinc-500">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-md border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
