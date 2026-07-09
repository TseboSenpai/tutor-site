import type { Metadata } from "next";
import { tutorBenefits, tutorRequirements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Become a Tutor",
  description:
    "Tutor STEM subjects for Grade 8–12 learners — set your own hours, get matched to students, paid per session.",
};

export default function BecomeTutorPage() {
  return (
    <main className="mx-auto max-w-[900px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">
        Tutor STEM. Get paid to teach what you love.
      </h1>
      <p className="mb-10 max-w-[600px] text-base text-muted">
        We&apos;re always looking for tutors who can turn hard subjects into
        &ldquo;oh, that makes sense now.&rdquo;
      </p>
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {tutorBenefits.map((b) => (
          <div
            key={b.title}
            className="rounded-card border border-line bg-panel p-[22px]"
          >
            <div className="mb-2 text-base font-bold">{b.title}</div>
            <div className="text-sm leading-[1.5] text-muted">{b.body}</div>
          </div>
        ))}
      </div>
      <h2 className="mb-4 font-serif text-base uppercase tracking-[1px] text-muted">
        What you&apos;ll need
      </h2>
      <div className="mb-10 flex flex-col gap-2.5">
        {tutorRequirements.map((req) => (
          <div
            key={req}
            className="flex items-start gap-3 text-[14.5px] text-ink"
          >
            <span className="font-bold text-accent">—</span>
            {req}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="cursor-pointer rounded-[9px] bg-accent px-[30px] py-3.5 text-[15.5px] font-bold text-white"
      >
        Apply to tutor
      </button>
    </main>
  );
}
