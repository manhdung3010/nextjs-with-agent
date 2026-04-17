import { HealthCheck } from "@/components/shared/health-check";

export default function Home() {
  const highlights = [
    {
      title: "Kiến trúc rõ ràng, dễ mở rộng",
      description:
        "Sử dụng Next.js App Router với cấu trúc thư mục tách lớp theo feature để scale nhanh khi dự án lớn dần.",
    },
    {
      title: "Tối ưu cho developer experience",
      description:
        "TypeScript strict mode, linting, formatting và quy trình kiểm tra code giúp giảm lỗi ngay từ lúc phát triển.",
    },
    {
      title: "Sẵn sàng cho production",
      description:
        "Tích hợp sẵn testing, validation và CI checklist để team tự tin triển khai trên nhiều môi trường.",
    },
  ];

  const technologies = [
    "Next.js App Router",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
    "Zod schema validation",
    "Vitest + Playwright",
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
          Next.js Landing Page
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Modern Code Base cho dự án web scale nhanh
        </h1>
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
          Đây là nền tảng Next.js được chuẩn hóa để bắt đầu sản phẩm mới với tốc
          độ cao. Bạn có sẵn kiến trúc, công cụ chất lượng code, testing và
          workflow AI agent ngay từ ngày đầu.
        </p>
      </section>

      <HealthCheck />

      <section className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-base font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Tech Stack nổi bật</h2>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-zinc-600 sm:grid-cols-2 dark:text-zinc-300">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
          Bắt đầu nhanh
        </h2>
        <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
          Clone repository, cài dependency và chạy development server để bắt đầu
          xây dựng feature theo đúng chuẩn architecture có sẵn của dự án.
        </p>
        <div className="mt-4 rounded-xl bg-white/70 p-4 text-sm text-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100">
          <p>1. Cài package: npm install</p>
          <p>2. Chạy local: npm run dev</p>
          <p>3. Mở browser tại: http://localhost:3000</p>
        </div>
      </section>
    </main>
  );
}
