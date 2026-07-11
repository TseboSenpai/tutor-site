import Link from "next/link";
import { howItWorks, stats, subjects } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1100px] items-center gap-14 px-8 pt-16 pb-20 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-24">
        {/* Copy */}
        <div>
          <p className="mb-6 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[2px] text-accent">
            <span aria-hidden className="inline-block h-px w-8 bg-accent" />
            STEM tutoring · Grades 8–12
          </p>
          <h1 className="mb-6 font-serif text-[40px] font-bold leading-[1.07] text-pretty sm:text-[54px]">
            Turn your STEM marks into your{" "}
            <span className="relative inline-block whitespace-nowrap">
              best marks
              <svg
                aria-hidden
                className="absolute -bottom-1.5 left-0 h-[10px] w-full text-accent"
                viewBox="0 0 220 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C38 3.5 82 2.5 126 5c33 1.8 62 3.2 91-2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="mb-9 max-w-[480px] text-[18px] leading-[1.65] text-muted">
            1-on-1 and small-group tutoring in Maths, Physical Sciences, Life
            Sciences and CS — built around the exam, not just the textbook.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/get-tutor"
              className="rounded-[10px] bg-accent px-7 py-3.5 text-[15.5px] font-bold text-white"
            >
              Get a Tutor
            </Link>
            <Link
              href="/workshops"
              className="text-[15.5px] font-bold text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
            >
              See workshops →
            </Link>
          </div>
        </div>

        {/* Illustration: tutor & learner on a video call */}
        <div aria-hidden className="relative mx-auto w-full max-w-[420px] select-none">
          <svg viewBox="0 0 440 410" fill="none" className="h-auto w-full">
            {/* hand-drawn dashes */}
            <path d="M96 28 C104 16 114 9 126 6" stroke="#1A2233" strokeWidth="5" strokeLinecap="round" />
            <path d="M120 42 C126 32 134 26 144 22" stroke="#1A2233" strokeWidth="5" strokeLinecap="round" />

            {/* light panel */}
            <rect x="14" y="168" width="266" height="204" rx="5" fill="#D9E8E6" />

            {/* dark panel + learner */}
            <g transform="rotate(2 320 190)">
              <rect x="228" y="58" width="194" height="238" rx="5" fill="#1A2233" />
              <rect x="252" y="290" width="148" height="26" fill="#1A2233" />
              {/* call frame */}
              <rect x="258" y="106" width="140" height="98" rx="14" fill="#D9E8E6" />
              <rect x="268" y="116" width="120" height="78" rx="10" stroke="#1A2233" strokeWidth="2.5" />
              <rect x="350" y="126" width="26" height="11" rx="5.5" stroke="#1A2233" strokeWidth="2.5" />
              {/* learner */}
              <path
                d="M272 294 C272 226 292 196 326 196 C360 196 382 226 382 294 Z"
                fill="#FFFFFF"
                stroke="#1A2233"
                strokeWidth="3"
              />
              <circle cx="326" cy="158" r="26" fill="#FFFFFF" stroke="#1A2233" strokeWidth="3" />
              <path
                d="M301 154 C302 138 312 130 326 130 C340 130 350 140 351 154 C342 144 332 142 326 146 C316 138 306 144 301 154 Z"
                fill="#1A2233"
              />
              <circle cx="317" cy="160" r="2.5" fill="#1A2233" />
              <circle cx="336" cy="160" r="2.5" fill="#1A2233" />
              <path d="M321 168 q6 8 12 0 Z" fill="#1A2233" />
              <circle cx="306" cy="166" r="4" fill="#F2BDC5" />
              <circle cx="346" cy="166" r="4" fill="#F2BDC5" />
              {/* collar */}
              <path d="M310 208 C318 215 334 215 342 208" stroke="#0E7490" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* sparkle badge */}
            <circle cx="214" cy="52" r="44" fill="#CBE1E7" />
            <path
              d="M214 24c3.2 16.4 7.6 20.8 24 24-16.4 3.2-20.8 7.6-24 24-3.2-16.4-7.6-20.8-24-24 16.4-3.2 20.8-7.6 24-24Z"
              fill="#1A2233"
            />

            {/* tutor's call frame */}
            <rect x="78" y="222" width="200" height="122" rx="16" stroke="#FFFFFF" strokeWidth="3.5" />
            <rect x="206" y="238" width="44" height="13" rx="6.5" stroke="#FFFFFF" strokeWidth="3" />

            {/* tutor */}
            <path
              d="M96 412 C96 342 120 312 168 312 C216 312 240 342 240 412 Z"
              fill="#FFFFFF"
              stroke="#1A2233"
              strokeWidth="3"
            />
            <circle cx="168" cy="280" r="28" fill="#FFFFFF" stroke="#1A2233" strokeWidth="3" />
            <circle cx="168" cy="242" r="11" fill="#1A2233" />
            <path
              d="M140 280 C138 258 150 246 168 246 C186 246 198 258 196 280 C190 264 178 260 168 262 C154 258 146 266 140 280 Z"
              fill="#1A2233"
            />
            <circle cx="158" cy="284" r="2.5" fill="#1A2233" />
            <circle cx="178" cy="284" r="2.5" fill="#1A2233" />
            <path d="M162 294 q6 5 12 0" stroke="#1A2233" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="147" cy="290" r="4" fill="#F2BDC5" />
            <circle cx="189" cy="290" r="4" fill="#F2BDC5" />
            {/* heart + button details */}
            <path
              d="M168 334 c-3 -4 -8.5 -3 -8.5 1 0 3 4.5 5.5 8.5 8.5 4 -3 8.5 -5.5 8.5 -8.5 0 -4 -5.5 -5 -8.5 -1Z"
              fill="#0E7490"
            />
            <circle cx="190" cy="342" r="4.5" stroke="#1A2233" strokeWidth="2.5" />
          </svg>
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
