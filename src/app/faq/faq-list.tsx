"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <button
            key={f.q}
            type="button"
            onClick={() => setOpen(isOpen ? null : i)}
            className="cursor-pointer rounded-xl border border-line bg-panel px-[22px] py-5 text-left"
          >
            <div className="flex items-center justify-between text-[15.5px] font-bold">
              {f.q}
              <span className="text-xl text-accent">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
              <div className="mt-3 text-[14.5px] leading-[1.6] text-muted">
                {f.a}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
