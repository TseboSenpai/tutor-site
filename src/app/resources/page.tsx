import type { Metadata } from "next";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Workshop replays, notes and past papers — buy once, keep forever.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">
        Resources &amp; Past Recordings
      </h1>
      <p className="mb-9 text-base text-muted">
        Workshop replays, notes and past papers — buy once, keep forever.
      </p>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <div
            key={r.title}
            className="overflow-hidden rounded-card border border-line bg-panel"
          >
            <div className="flex h-[110px] items-center justify-center bg-[repeating-linear-gradient(135deg,var(--color-panel2),var(--color-panel2)_10px,var(--color-line)_10px,var(--color-line)_20px)] font-mono text-xs text-muted">
              thumbnail
            </div>
            <div className="flex flex-col gap-2 p-[18px]">
              <div className="text-xs font-bold uppercase text-accent">
                {r.type} · {r.subject}
              </div>
              <div className="text-[15.5px] font-bold leading-[1.35]">
                {r.title}
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="font-bold">{r.price}</span>
                <button
                  type="button"
                  className="cursor-pointer rounded-[7px] bg-accent px-3.5 py-2 text-[13px] font-bold text-white"
                >
                  Get access
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
