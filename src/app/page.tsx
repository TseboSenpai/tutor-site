import Link from "next/link";
import { howItWorks, stats, subjects } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-8 pt-24 pb-[72px] text-center">
        <div className="mb-[22px] inline-block rounded-full border border-accent px-3.5 py-1.5 text-[13px] font-semibold text-accent">
          STEM tutoring for Grade 8–12
        </div>
        <h1 className="mb-5 font-serif text-4xl font-bold leading-[1.08] text-pretty sm:text-[56px]">
          Turn your STEM marks into your best marks.
        </h1>
        <p className="mx-auto mb-9 max-w-[640px] text-[19px] leading-[1.6] text-muted">
          1-on-1 and small-group tutoring in Maths, Physical Sciences, Life
          Sciences and CS — built around the exam, not just the textbook.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href="/get-tutor"
            className="rounded-[10px] bg-accent px-7 py-3.5 text-[15.5px] font-bold text-white"
          >
            Get a Tutor
          </Link>
          <Link
            href="/workshops"
            className="rounded-[10px] border border-line px-7 py-3.5 text-[15.5px] font-bold text-ink"
          >
            See Workshops
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 px-8 pb-[72px] lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-card border border-line bg-panel px-[18px] py-6 text-center shadow-[0_1px_3px_rgba(20,20,10,0.04)]"
          >
            <div className="font-serif text-[32px] font-bold text-accent">
              {s.value}
            </div>
            <div className="mt-1.5 text-[13.5px] leading-[1.4] text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* Subjects */}
      <section className="mx-auto max-w-[1100px] px-8 pb-20">
        <h2 className="mb-5 font-serif text-[15px] uppercase tracking-[1.5px] text-muted">
          Subjects we cover
        </h2>
        <div className="flex flex-wrap gap-3">
          {subjects.map((subj) => (
            <div
              key={subj}
              className="rounded-[10px] border border-line bg-panel2 px-[18px] py-3 text-[14.5px] font-semibold"
            >
              {subj}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-8 pb-24 md:grid-cols-3">
        {howItWorks.map((st) => (
          <div
            key={st.step}
            className="rounded-card border border-line bg-panel p-7"
          >
            <div className="mb-2.5 font-serif text-[26px] font-bold text-accent">
              {st.step}
            </div>
            <div className="mb-2 text-[17px] font-bold">{st.title}</div>
            <div className="text-[14.5px] leading-[1.55] text-muted">
              {st.body}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
