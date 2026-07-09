import type { Metadata } from "next";
import { brand, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Why we started tutoring STEM subjects, and the results our learners get.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[800px] px-8 pt-16 pb-24">
      <h1 className="mb-5 font-serif text-[38px] font-bold">About {brand}</h1>
      <p className="mb-5 text-[17px] leading-[1.7] text-ink">
        We started tutoring STEM subjects because too many students give up on
        Maths and Physical Sciences right before they were about to get good at
        them. Our tutors are subject specialists, not generalists — people
        who&apos;ve aced these exact papers and know exactly where marks are
        lost.
      </p>
      <p className="mb-10 text-base leading-[1.7] text-muted">
        Placeholder — swap in your founding story, team photos and mission here.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-[26px] font-bold text-accent">
              {s.value}
            </div>
            <div className="mt-1 text-[12.5px] text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
