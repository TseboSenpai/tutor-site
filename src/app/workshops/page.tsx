import type { Metadata } from "next";
import { workshops } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Live, focused STEM workshops on the topics that trip students up most.",
};

export default function WorkshopsPage() {
  return (
    <main className="mx-auto max-w-[1100px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">
        Upcoming Workshops
      </h1>
      <p className="mb-9 text-base text-muted">
        Live, focused sessions on the topics that trip students up most.
      </p>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((w) => (
          <div
            key={w.title}
            className="flex flex-col gap-2.5 rounded-card border border-line bg-panel p-[22px]"
          >
            <div className="text-[12.5px] font-bold uppercase tracking-[0.5px] text-accent">
              {w.subject}
            </div>
            <div className="text-[17px] font-bold leading-[1.35]">{w.title}</div>
            <div className="text-[13.5px] text-muted">
              {w.date} · {w.level}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-serif text-[17px] font-bold">{w.price}</span>
              <span className="text-xs text-muted">{w.spots}</span>
            </div>
            <button
              type="button"
              className="mt-1.5 cursor-pointer rounded-lg bg-accent p-2.5 font-bold text-white"
            >
              Reserve seat
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
