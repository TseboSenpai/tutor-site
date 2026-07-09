"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, nav } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line bg-cream/92 px-8 py-[18px] shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="flex size-[30px] items-center justify-center rounded-lg bg-accent font-serif text-base font-bold text-white">
          S
        </div>
        <span className="font-serif text-lg font-bold tracking-[0.2px]">{brand}</span>
      </Link>
      <nav className="flex flex-wrap gap-1">
        {nav.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-ink ${
                active ? "bg-panel2" : "bg-transparent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
