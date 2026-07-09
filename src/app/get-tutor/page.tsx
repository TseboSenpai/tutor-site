import type { Metadata } from "next";
import { subjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Tutor",
  description:
    "Tell us your grade, subject and where you're stuck — we'll match you with a tutor within 24 hours.",
};

const inputClasses =
  "rounded-[9px] border border-line bg-panel2 px-3.5 py-3 text-[14.5px] text-ink placeholder:text-muted";

export default function GetTutorPage() {
  return (
    <main className="mx-auto max-w-[760px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">
        Get matched with a tutor
      </h1>
      <p className="mb-9 text-base text-muted">
        Tell us a bit about you — we&apos;ll match you within 24 hours.
      </p>
      <form className="flex flex-col gap-[18px] rounded-card border border-line bg-panel p-8">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <input placeholder="Full name" className={inputClasses} />
          <input placeholder="Grade" className={inputClasses} />
        </div>
        <input placeholder="Email or WhatsApp number" className={inputClasses} />
        <div>
          <div className="mb-2.5 text-[13px] font-semibold text-muted">
            Subject(s) you need help with
          </div>
          <div className="flex flex-wrap gap-2.5">
            {subjects.map((subj) => (
              <div
                key={subj}
                className="cursor-pointer rounded-full border border-line bg-panel2 px-3.5 py-2 text-[13.5px] font-semibold"
              >
                {subj}
              </div>
            ))}
          </div>
        </div>
        <textarea
          placeholder="What are you struggling with right now?"
          rows={3}
          className={`${inputClasses} resize-y font-sans`}
        />
        <button
          type="button"
          className="cursor-pointer rounded-[9px] bg-accent p-3.5 text-[15px] font-bold text-white"
        >
          Find my tutor
        </button>
      </form>
    </main>
  );
}
