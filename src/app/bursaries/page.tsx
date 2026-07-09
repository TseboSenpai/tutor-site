import type { Metadata } from "next";
import { bursaries, bursariesDisclaimer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bursaries",
  description:
    "A starting list of STEM-friendly bursaries and scholarships for Grade 12s.",
};

export default function BursariesPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">
        Bursaries &amp; Scholarships for Grade 12s
      </h1>
      <p className="mb-3 text-base text-muted">
        A starting list of STEM-friendly funding to look into before matric
        ends.
      </p>
      <div className="mb-8 rounded-[10px] border border-line bg-panel2 px-[18px] py-3.5 text-[13.5px] text-muted">
        {bursariesDisclaimer}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {bursaries.map((b) => (
          <div
            key={b.name}
            className="rounded-card border border-line bg-panel p-[22px]"
          >
            <div className="mb-1.5 text-[16.5px] font-bold">{b.name}</div>
            <div className="mb-2.5 text-[13px] font-semibold text-accent">
              {b.field}
            </div>
            <div className="mb-2.5 text-sm leading-[1.55] text-muted">
              {b.note}
            </div>
            <div className="font-mono text-[12.5px] text-muted">{b.link}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
