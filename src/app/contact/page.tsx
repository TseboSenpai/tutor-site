import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about tutors, workshops or bursaries — reach out.",
};

const inputClasses =
  "rounded-[9px] border border-line bg-panel2 px-3.5 py-3 text-[14.5px] text-ink placeholder:text-muted";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[700px] px-8 pt-16 pb-24">
      <h1 className="mb-3 font-serif text-[38px] font-bold">Contact Us</h1>
      <p className="mb-9 text-base text-muted">
        Questions about tutors, workshops or bursaries — reach out.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-card border border-line bg-panel p-[22px]">
          <div className="mb-1.5 text-[12.5px] font-bold uppercase text-muted">
            Email
          </div>
          <div className="text-[15.5px] font-semibold">
            hello@summitstem.example
          </div>
        </div>
        <div className="rounded-card border border-line bg-panel p-[22px]">
          <div className="mb-1.5 text-[12.5px] font-bold uppercase text-muted">
            WhatsApp
          </div>
          <div className="text-[15.5px] font-semibold">+27 00 000 0000</div>
        </div>
      </div>
      <form className="flex flex-col gap-3.5 rounded-card border border-line bg-panel p-[26px]">
        <input placeholder="Your name" className={inputClasses} />
        <input placeholder="Email" className={inputClasses} />
        <textarea
          placeholder="Message"
          rows={4}
          className={`${inputClasses} resize-y font-sans`}
        />
        <button
          type="button"
          className="cursor-pointer rounded-[9px] bg-accent p-[13px] text-[15px] font-bold text-white"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
